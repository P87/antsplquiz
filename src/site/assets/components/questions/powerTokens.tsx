import React, { useEffect, useState } from "react";
import { PowerToken } from "../../../../types";
import DoubleChevron from "../icons/doubleChevron";
import ShieldLock from "../icons/shieldLock";

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
    powerTokens.forEach((token) => {
      if (token.type === "double") {
        setDoubleToken(token);
      } else {
        setSafeToken(token);
      }

      if (token.question_id === questionId) {
        setPowerToken && setPowerToken(token);
        setUsingToken(token);
      }
    });
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

  if (!safeToken && !doubleToken) {
    return null;
  }

  return (
    <div className="row mt-5 mb-5">
      {(!doubleToken?.question_id || !safeToken?.question_id) && (
        <span>You have power tokens available to use:</span>
      )}
      { doubleToken &&
        <div className="col-6 text-center">
          <div
            className={`border border-1 border-dark pt-3 pb-3 power-token bg-primary text-white ${
              (doubleToken.question_id === questionId &&
                usingToken?.id !== safeToken?.id) ||
              usingToken?.id === doubleToken.id
                ? "bg-success"
                : ""
            }`}
            onClick={onTokenClick.bind(this, doubleToken)}
          >
            <DoubleChevron />
            <br />
            <span className="fw-bold">Go big or go home</span>
            <br />
            (Double points)
          </div>
        </div>
      }

      { safeToken &&
        <div className="col-6 text-center">
          <div
            className={`border border-1 border-dark pt-3 pb-3 power-token bg-primary text-white ${
              (safeToken.question_id && usingToken?.id !== doubleToken?.id) ||
              usingToken?.id === safeToken.id
                ? "bg-success"
                : ""
            }`}
            onClick={onTokenClick.bind(this, safeToken)}
          >
            <ShieldLock />
            <br />
            <span className="fw-bold">Play it safe</span>
            <br />
            (Cannot score less than 0)
          </div>
        </div>
      }
    </div>
  );
};

export default PowerTokens;
