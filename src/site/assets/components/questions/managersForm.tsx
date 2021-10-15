import { MySQLAnswer, MySQLSetAnswer } from "../../../../types";
import React, { Dispatch, useEffect, useState } from "react";

interface Props {
  answerAmount: number;
  setErrorMessage: Dispatch<React.SetStateAction<string>>;
  setAnswers?: MySQLSetAnswer[];
  savedAnswer?: MySQLAnswer[];
  submitUrl: string;
}

const ManagersForm = ({
  answerAmount,
  setAnswers,
  setErrorMessage,
  savedAnswer,
  submitUrl,
}: Props): JSX.Element => {
  const [answer, setAnswer] = useState<any[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [loadedSavedAnswer, setLoadedSavedAnswer] = useState(false);

  useEffect(() => {
    if (savedAnswer && !loadedSavedAnswer) {
      setAnswer(savedAnswer);
      setLoadedSavedAnswer(true);
    }
  });

  const handleFormChange = (
    index: number,
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const answers = answer.slice();
    answers[index] = e.target.value;

    setAnswer(answers);
  };

  const handleSubmit = () => {
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

  if (!setAnswers || !setAnswers.length) {
    return (
      <div className="text-center alert alert-danger">
        There was an error, please reload and try again.
      </div>
    );
  }

  const inputs = [];
  for (let i = 0; i < answerAmount; i++) {
    inputs.push(
      <select
        className="form-select form-select-lg mb-3"
        aria-label="Select a manager"
        onChange={handleFormChange.bind(this, i)}
      >
        <option selected value="">
          Select a manager
        </option>
        {setAnswers.map((setAnswer) => {
          return (
            <option
              value={setAnswer.id}
              selected={answer[i] && answer[i] === setAnswer.id.toString()}
            >
              {setAnswer.answer}
            </option>
          );
        })}
      </select>
    );
  }

  return (
    <div>
      {success && (
        <div className="alert alert-success text-center" role="alert">
          Answer Saved.
        </div>
      )}
      {inputs}
      {answer.length === answerAmount && answer.every((a) => a !== "") && (
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

export default ManagersForm;
