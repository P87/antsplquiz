import React, { useEffect, useState } from "react";
import { PowerToken } from "../../../../types";

interface Props {
  powerTokens: PowerToken[];
  questionId: number;
  setPowerToken?: (token: PowerToken | undefined) => void;
}

const PowerTokens = ({
  powerTokens,
  setPowerToken,
  questionId,
}: Props): JSX.Element | null => {
  const [usingToken, setUsingToken] = useState<PowerToken>();
  const [doubleToken, setDoubleToken] = useState<PowerToken>();
  const [safeToken, setSafeToken] = useState<PowerToken>();

  useEffect(() => {
    if (powerTokens[0].type === "double") {
      setDoubleToken(powerTokens[0]);
      setSafeToken(powerTokens[1]);
    } else {
      setDoubleToken(powerTokens[1]);
      setSafeToken(powerTokens[0]);
    }

    if (powerTokens[0].question_id === questionId) {
      setPowerToken && setPowerToken(powerTokens[0]);
      setUsingToken(powerTokens[0]);
    }

    if (powerTokens[1].question_id === questionId) {
      setPowerToken && setPowerToken(powerTokens[1]);
      setUsingToken(powerTokens[1]);
    }
  }, []);

  const onTokenClick = (token: PowerToken, e: React.SyntheticEvent) => {
    e.preventDefault();
    let newValue: PowerToken | undefined = token;
    if (token.id === usingToken?.id) {
      // They've clicked the same token again to un-use it
      newValue = undefined;
      powerTokens.forEach((token) => (token.question_id = undefined));
    }

    if (newValue) {
      newValue.question_id = questionId;
      powerTokens?.forEach((token) => {
        token.question_id = undefined;
      });
    }

    setUsingToken(newValue);
    setPowerToken && setPowerToken(newValue);
  };

  if (!safeToken || !doubleToken) {
    return null;
  }

  return (
    <div className="row mt-5 mb-5">
      {(!doubleToken.question_id || !safeToken.question_id) && (
        <span>You have power tokens available to use:</span>
      )}
      <div className="col-6 text-center">
        <div
          className={`border border-1 border-dark pt-3 pb-3 power-token bg-primary text-white ${
            (doubleToken.question_id === questionId &&
              usingToken?.id !== safeToken.id) ||
            usingToken?.id === doubleToken.id
              ? "bg-success"
              : ""
          }`}
          onClick={onTokenClick.bind(this, doubleToken)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-chevron-double-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
            />
            <path
              fill-rule="evenodd"
              d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
          <br />
          <span className="fw-bold">Go big or go home</span>
          <br />
          (Double points)
        </div>
      </div>

      <div className="col-6 text-center">
        <div
          className={`border border-1 border-dark pt-3 pb-3 power-token bg-primary text-white ${
            (safeToken.question_id && usingToken?.id !== doubleToken.id) ||
            usingToken?.id === safeToken.id
              ? "bg-success"
              : ""
          }`}
          onClick={onTokenClick.bind(this, safeToken)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-shield-lock-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"
            />
          </svg>
          <br />
          <span className="fw-bold">Play it safe</span>
          <br />
          (Cannot score less than 0)
        </div>
      </div>
    </div>
  );
};

export default PowerTokens;
