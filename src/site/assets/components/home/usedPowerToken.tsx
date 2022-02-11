import React from "react";
import DoubleChevron from "../icons/doubleChevron";
import ShieldLock from "../icons/shieldLock";

export enum PowerTokenType {
  DOUBLE = "double",
  SAFE = "safe",
}

interface Props {
  powerToken: null | PowerTokenType;
}

export default ({ powerToken }: Props): JSX.Element | null => {
  return powerToken ? (
    <div className="mt-3 alert alert-warning">
      {powerToken === PowerTokenType.DOUBLE ? (
        <DoubleChevron />
      ) : (
        <ShieldLock />
      )}{" "}
      Using{" "}
      {powerToken === PowerTokenType.DOUBLE
        ? "Go big or go home"
        : "Play it safe"}{" "}
      token
    </div>
  ) : null;
};
