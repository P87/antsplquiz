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

const YesNoForm = ({
  setErrorMessage,
  savedAnswer,
  submitUrl,
  powerTokens,
  questionId,
}: Props): JSX.Element => {
  const [answer, setAnswer] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [loadedSavedAnswer, setLoadedSavedAnswer] = useState(false);
  const [powerToken, setPowerToken] = useState<PowerToken>();

  useEffect(() => {
    if (savedAnswer && !loadedSavedAnswer) {
      setAnswer(savedAnswer[0] as unknown as string);
      setLoadedSavedAnswer(true);
    }
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAnswer(e.target.value);
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
      <select
        className="form-select form-select-lg mb-3"
        aria-label="Select Yes or No"
        onChange={handleFormChange}
      >
        <option value="" selected>
          Select an Answer
        </option>
        <option value="yes" selected={answer === "yes"}>
          Yes
        </option>
        <option value="no" selected={answer === "no"}>
          No
        </option>
      </select>
      {answer && answer !== "" && (
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

export default YesNoForm;
