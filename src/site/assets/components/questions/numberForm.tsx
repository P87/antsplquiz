import { MySQLAnswer, Question } from "../../../../types";
import React, { Dispatch, useEffect, useState } from "react";

interface Props {
  question: Question;
  setErrorMessage: Dispatch<React.SetStateAction<string>>;
  savedAnswer?: MySQLAnswer[];
}

const NumberForm = ({
  question,
  setErrorMessage,
  savedAnswer,
}: Props): JSX.Element => {
  const [answer, setAnswer] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [loadedSavedAnswer, setLoadedSavedAnswer] = useState(false);

  useEffect(() => {
    if (savedAnswer && !loadedSavedAnswer) {
      setAnswer(savedAnswer[0] as unknown as string);
      setLoadedSavedAnswer(true);
    }
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = () => {
    fetch(`/questions/set-yes-no-answer/${question.id}`, {
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
      <div className="form-floating">
        <input
          type="number"
          className="form-control"
          id="number"
          name="number"
          placeholder="Your Answer"
          value={answer}
          onChange={handleFormChange}
        />
        <label htmlFor="number" className="form-label">
          Your Answer
        </label>
      </div>
      {answer && (
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

export default NumberForm;
