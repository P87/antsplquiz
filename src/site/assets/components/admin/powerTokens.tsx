import React, { useEffect, useState } from "react";
import Loading from "../loading";
import { formatDateToEnglish } from "../utils";

interface Token {
  id: number;
  user_id: number;
  display_name: string;
  username: string;
  question_id: number;
  date_added: string;
  date_applied: string;
  points: number;
  type: "safe" | "double";
}

const PowerTokens = (): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [tokens, setTokens] = useState<Token[]>([]);

  useEffect(() => {
    fetch(`/admin/power-tokens/get-all`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (!result.success) {
          setErrorMessage(result.message);
          return;
        } else {
          setTokens(result.tokens);
        }
      })
      .catch(() => {
        setErrorMessage("There was an error, please refresh and try again");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onGenerateClicked = (e: React.SyntheticEvent) => {
    setIsLoading(true);
    e.preventDefault();
    fetch(`/admin/power-tokens/generate`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (!result.success) {
          setErrorMessage(result.message);
          return;
        } else {
          setSuccess(true);
          setTokens(result.tokens);
        }
      })
      .catch(() => {
        setErrorMessage("There was an error, please refresh and try again");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading && !errorMessage) {
    return <Loading />;
  }

  return (
    <div>
      {errorMessage && (
        <div className="alert alert-danger text-center mt-4" role="alert">
          {errorMessage}
        </div>
      )}

      {success && (
        <div className="alert alert-success text-center mt-4" role="alert">
          Power Tokens Generated and gifted to all users
        </div>
      )}

      {!tokens.length && (
        <div className="alert alert-warning text-center mt-4">
          No Power Tokens Found
        </div>
      )}

      {!!tokens.length && (
        <div className="row bg-secondary fw-bold p-1 text-white">
          <div className="col-4">Display Name (Username)</div>
          <div className="col text-center">Token Type</div>
          <div className="col text-center">Question ID</div>
          <div className="col text-center">Date Applied</div>
          <div className="col text-center">Points</div>
        </div>
      )}

      {tokens.map((token) => (
        <div className="row p-1 border-start border-end border-dark border-bottom">
          <div className="col-4">
            <a href={`/admin/users/${token.user_id}`}>
              {token.display_name} ({token.username})
            </a>
          </div>
          <div className="col text-center">{token.type}</div>
          <div className="col text-center">
            {token.question_id ? (
              <a href={`/admin/questions/edit/${token.question_id}`}>
                {token.question_id}
              </a>
            ) : null}
          </div>
          <div className="col text-center">
            {token.date_applied
              ? formatDateToEnglish(token.date_applied)
              : null}
          </div>
          <div className="col text-center">{token.points}</div>
        </div>
      ))}

      {!errorMessage && (
        <div className="text-center">
          {!!tokens.length && (
            <div className="alert alert-warning text-center mt-5">
              Tokens have been previously generated. If for some reason some
              users are missing tokens you can try and regenerate the tokens:
            </div>
          )}
          <button className="btn btn-primary mt-5" onClick={onGenerateClicked}>
            Generate Tokens For All Players
          </button>
        </div>
      )}
    </div>
  );
};

export default PowerTokens;
