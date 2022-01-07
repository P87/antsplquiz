import { MySQLAnswer, PowerToken } from "../../../../types";
import React, { Dispatch, useEffect, useState } from "react";
import PowerTokens from "./powerTokens";

interface Props {
  setErrorMessage: Dispatch<React.SetStateAction<string>>;
  savedAnswer?: MySQLAnswer[];
  submitUrl: string;
  questionId: number;
  powerTokens?: PowerToken[];
}

const NumberForm = ({
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

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const isChangingTokenValue =
    powerToken &&
    powerTokens?.some(
      (token) =>
        token.question_id === questionId && token.type !== powerToken.type
    );

  return (
    <div>
      {success && (
        <div className="alert alert-success text-center" role="alert">
          Answer Saved.
        </div>
      )}
      {!!powerTokens && !!powerTokens.length && (
        <PowerTokens
          powerTokens={powerTokens}
          setPowerToken={setPowerToken}
          questionId={questionId}
        />
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
        <div
          className={`mt-4 text-center ${
            isChangingTokenValue ? "alert alert-warning" : ""
          }`}
        >
          {powerToken && isChangingTokenValue && (
            <>
              <span>
                You are about to use your{" "}
                {powerToken.type === "double"
                  ? `"Go big or go home"`
                  : `"Play it safe"`}{" "}
                power token
              </span>
              <br />
            </>
          )}
          <button
            className={`btn btn-success ${isChangingTokenValue ? "mt-4" : ""}`}
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
