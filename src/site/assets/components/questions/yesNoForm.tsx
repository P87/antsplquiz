import { MySQLAnswer } from "../../../../types";
import React, { Dispatch, useEffect, useState } from "react";

interface Props {
  setErrorMessage: Dispatch<React.SetStateAction<string>>;
  savedAnswer?: MySQLAnswer[];
  submitUrl: string;
}

const YesNoForm = ({
  setErrorMessage,
  savedAnswer,
  submitUrl,
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

export default YesNoForm;
