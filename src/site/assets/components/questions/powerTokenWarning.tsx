import React from "react";
import { PowerToken } from "../../../../types";

interface Props {
  powerToken?: PowerToken;
  savedAnswer: boolean;
}

export default ({ powerToken, savedAnswer }: Props): JSX.Element => {
  return (
    <>
      {powerToken && (
        <>
          <span>
            {savedAnswer
              ? "If you update your answer you will be using your"
              : "You are about to use your"}{" "}
            {powerToken.type === "double"
              ? `"Go big or go home"`
              : `"Play it safe"`}{" "}
            power token
          </span>
          <br />
        </>
      )}
    </>
  );
};
