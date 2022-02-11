import { MySQLAnswer, PowerToken } from "../../../../types";
import React, { Dispatch, useEffect, useState } from "react";
import PowerTokens from "./powerTokens";
import PowerTokenWarning from "./powerTokenWarning";

interface Props {
  setErrorMessage: Dispatch<React.SetStateAction<string>>;
  savedAnswer?: MySQLAnswer[];
  submitUrl: string;
  questionId: number;
  powerTokens?: PowerToken[];
}

const CorrectScoreForm = ({
  setErrorMessage,
  savedAnswer,
  submitUrl,
  powerTokens,
  questionId,
}: Props): JSX.Element => {
  const [homeScore, setHomeScore] = useState("");
  const [awayScore, setAwayScore] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [loadedSavedAnswer, setLoadedSavedAnswer] = useState(false);
  const [powerToken, setPowerToken] = useState<PowerToken>();

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
        powerToken,
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

  if (success) {
    return (
      <div className="alert alert-success text-center" role="alert">
        Answer Saved.
      </div>
    );
  }

  return (
    <div>
      {!!powerTokens && !!powerTokens.length && (
        <PowerTokens
          powerTokens={powerTokens}
          setPowerToken={setPowerToken}
          questionId={questionId}
        />
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
        <div
          className={`mt-4 text-center ${
            powerToken ? "alert alert-warning" : ""
          }`}
        >
          <PowerTokenWarning
            powerToken={powerToken}
            savedAnswer={!!savedAnswer?.length}
          />
          <button
            className={`btn btn-success ${powerToken ? "mt-4" : ""}`}
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
