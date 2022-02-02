import { MySQLAnswer, MySQLSetAnswer, PowerToken } from "../../../../types";
import React, { Dispatch, useEffect, useState } from "react";
import PowerTokens from "./powerTokens";
import PowerTokenWarning from "./powerTokenWarning";

interface Props {
  answerAmount: number;
  setErrorMessage: Dispatch<React.SetStateAction<string>>;
  setAnswers?: MySQLSetAnswer[];
  savedAnswer?: MySQLAnswer[];
  submitUrl: string;
  questionId: number;
  powerTokens?: PowerToken[];
}

const ManagersForm = ({
  answerAmount,
  setAnswers,
  setErrorMessage,
  savedAnswer,
  submitUrl,
  powerTokens,
  questionId,
}: Props): JSX.Element => {
  const [answer, setAnswer] = useState<any[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [loadedSavedAnswer, setLoadedSavedAnswer] = useState(false);
  const [powerToken, setPowerToken] = useState<PowerToken>();

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
      {inputs}
      {answer.length === answerAmount && answer.every((a) => a !== "") && (
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

export default ManagersForm;
