import { MySQLAnswer } from "../../../../types";
import React, { Dispatch, useEffect, useState } from "react";

interface Props {
  setErrorMessage: Dispatch<React.SetStateAction<string>>;
  savedAnswer?: MySQLAnswer[];
  submitUrl: string;
}

const CorrectScoreForm = ({
  setErrorMessage,
  savedAnswer,
  submitUrl,
}: Props): JSX.Element => {
  const [homeScore, setHomeScore] = useState("");
  const [awayScore, setAwayScore] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [loadedSavedAnswer, setLoadedSavedAnswer] = useState(false);

  useEffect(() => {
    if (
      savedAnswer &&
      savedAnswer[0] &&
      savedAnswer[0].length &&
      !loadedSavedAnswer
    ) {
      const answer = savedAnswer[0].split("-");
      setHomeScore(answer[0]);
      setAwayScore(answer[1]);
      setLoadedSavedAnswer(true);
    }
  });

  const handleHomeScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHomeScore(e.target.value);
  };

  const handleAwayScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAwayScore(e.target.value);
  };

  const handleSubmit = () => {
    if (!homeScore && !awayScore) {
      setErrorMessage("Both values must be set");
      return;
    }

    const answer = `${homeScore}-${awayScore}`;

    fetch(submitUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer: answer,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setSuccess(true);
        } else {
          setErrorMessage(result.message);
        }
      })
      .catch(() => {
        setErrorMessage("Error saving answer, please refresh and try again");
      })
      .finally(() => setSubmitting(false));
  };

  if (submitting) {
    return <div className="text-center">Submitting...</div>;
  }

  return (
    <div>
      {success && (
        <div className="alert alert-success text-center" role="alert">
          Answer Saved.
        </div>
      )}
      <div className="row">
        <div className="col-5">
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="homeScore"
              name="score[]"
              placeholder="Home Score"
              value={homeScore}
              onChange={handleHomeScoreChange}
            />
            <label htmlFor="homeScore" className="form-label">
              Home Score
            </label>
          </div>
        </div>
        <div className="col-2 text-center lh58"> -</div>
        <div className="col-5">
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="awayScore"
              name="score[]"
              placeholder="Away Score"
              value={awayScore}
              onChange={handleAwayScoreChange}
            />
            <label htmlFor="awayScore" className="form-label text-center">
              Away Score
            </label>
          </div>
        </div>
      </div>
      <div className="alert alert-warning text-center" role="alert">
        Please pay attention to your answer, it matters which score you put as
        Home vs Away!
      </div>
      {homeScore && awayScore && (
        <div className="mt-4 text-center">
          <button
            className="btn btn-success"
            type="button"
            onClick={handleSubmit}
          >
            {savedAnswer?.length ? "Update" : "Submit"} Answer
          </button>
        </div>
      )}
    </div>
  );
};

export default CorrectScoreForm;
