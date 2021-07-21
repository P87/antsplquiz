import { MySQLSetAnswer, Question } from "../../../../types";
import React, { Dispatch, useEffect, useState } from "react";

interface Props {
  question: Question;
  setErrorMessage: Dispatch<React.SetStateAction<string>>;
  setAnswers?: MySQLSetAnswer[];
  savedAnswer?: MySQLSetAnswer[];
}

const searchTimeoutLength = 1500;

let searchTimeout: NodeJS.Timeout;

const PlayersForm = ({
  question,
  setErrorMessage,
  savedAnswer,
  setAnswers,
}: Props): JSX.Element => {
  const [answer, setAnswer] = useState<MySQLSetAnswer[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [loadedSavedAnswer, setLoadedSavedAnswer] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [foundPlayers, setFoundPlayers] = useState<MySQLSetAnswer[]>([]);

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

    if (value.length > 3) {
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
    fetch(`/questions/set-players-answer/${question.id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer,
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
      <div className="alert alert-warning text-center" role="alert">
        Start typing the name of the player you want and select them from the
        list.
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
      {answer.length === question.answer_amount && (
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

export default PlayersForm;
