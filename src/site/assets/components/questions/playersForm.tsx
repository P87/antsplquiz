import { MySQLSetAnswer, PowerToken } from "../../../../types";
import React, { Dispatch, useEffect, useState } from "react";
import PowerTokens from "./powerTokens";
import PowerTokenWarning from "./powerTokenWarning";

interface Props {
  setErrorMessage: Dispatch<React.SetStateAction<string>>;
  setAnswers?: MySQLSetAnswer[];
  savedAnswer?: MySQLSetAnswer[];
  submitUrl: string;
  answerAmount: number;
  questionId: number;
  powerTokens?: PowerToken[];
}

const searchTimeoutLength = 1500;

let searchTimeout: NodeJS.Timeout;

const PlayersForm = ({
  answerAmount,
  setErrorMessage,
  savedAnswer,
  setAnswers,
  submitUrl,
  powerTokens,
  questionId,
}: Props): JSX.Element => {
  const [answer, setAnswer] = useState<MySQLSetAnswer[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [loadedSavedAnswer, setLoadedSavedAnswer] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [foundPlayers, setFoundPlayers] = useState<MySQLSetAnswer[]>([]);
  const [powerToken, setPowerToken] = useState<PowerToken>();

  useEffect(() => {
    if (savedAnswer && setAnswers && !loadedSavedAnswer) {
      setAnswer(setAnswers);
      setLoadedSavedAnswer(true);
    }
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(e.target.value);

    clearTimeout(searchTimeout);

    if (value.length > 2) {
      searchTimeout = setTimeout(() => {
        playerSearch(value);
      }, searchTimeoutLength);
    }
  };

  const playerSearch = (value: string) => {
    fetch("/questions/player-search", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search: value,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setFoundPlayers(result.players);
        } else {
          setErrorMessage(
            "There was an error searching for your player, please refresh and try again"
          );
        }
      });
  };

  const handlePlayerSelected = (player: MySQLSetAnswer) => {
    setAnswer(answer.filter((p) => p.id !== player.id).concat([player]));
    setFoundPlayers([]);
    setSearchText("");
  };

  const removeSelectedPlayer = (player: MySQLSetAnswer) => {
    setAnswer(answer.filter((p) => p.id !== player.id));
  };

  const handleSubmit = () => {
    fetch(submitUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer,
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
      <div className="alert alert-warning text-center" role="alert">
        Start typing the name of the player you want and select them from the
        list. Please bear in mind that the search only returns 10 names so you
        might have to be specific with your search. Eg. Instead of "Son" search
        for "Son Heung"
        <br />
        <br />
        <strong>
          If you can't find the player you want please inform Ant ASAP so he can
          get them added!
        </strong>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="player"
          name="player"
          placeholder="Player"
          onChange={handleSearchChange}
          value={searchText}
        />
        <label htmlFor="username" className="form-label">
          Player
        </label>
      </div>
      <div id="players-list">
        <div className="list-group">
          {foundPlayers.length !== 0 &&
            foundPlayers.map((player) => (
              <a
                href="#"
                className="list-group-item list-group-item-action"
                onClick={() => handlePlayerSelected(player)}
              >
                {player.answer}
              </a>
            ))}
        </div>
      </div>
      {answer.length !== 0 && (
        <ul className="nav nav-tabs">
          <li className="nav-item mt-3">
            <a className="nav-link active" aria-current="page" href="#">
              Your Answer(s)
            </a>
          </li>
        </ul>
      )}
      <ul id="selected-players" className="list-group list-group-flush">
        {answer.map((player) => (
          <li className="list-group-item">
            <div className="row">
              <div className="col-10 fw-bold">{player.answer}</div>
              <div className="col-2 text-end">
                <button
                  className="btn btn-sm btn-danger pl-2"
                  onClick={() => removeSelectedPlayer(player)}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {answer.length === answerAmount && (
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

export default PlayersForm;
