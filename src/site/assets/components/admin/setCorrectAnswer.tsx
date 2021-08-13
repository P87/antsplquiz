import React, { useEffect, useState } from "react";
import { MySQLCorrectAnswer, MySQLSetAnswer } from "../../../../types";
import NumberForm from "../questions/numberForm";
import {
  ALL_PLAYERS_TYPE,
  ALL_TEAMS_TYPE,
  CORRECT_SCORE_TYPE,
  NUMBER_TYPE,
} from "../../../constants";
import CorrectScoreForm from "../questions/correctScoreForm";
import PlayersForm from "../questions/playersForm";
import TeamsForm from "../questions/teamsForm";

const questionId = window.location.pathname.split("/")[4];

const SetCorrectAnswer: React.FunctionComponent = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState<MySQLCorrectAnswer[]>();
  const [setAnswers, setSetAnswers] = useState<MySQLSetAnswer[]>();

  useEffect(() => {
    fetch(`/questions/get-correct-answers/${questionId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (!result.success) {
          setErrorMessage("There was an error, please refresh and try again.");
          return;
        } else {
          setQuestion(result.question);
          setSetAnswers(result.setAnswers);
        }
      })
      .catch(() => {
        setErrorMessage("There was an error, please refresh and try again");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading || !question) {
    return (
      <div className="d-flex align-items-center pt-5 pb-5">
        <strong>Loading...</strong>
        <div
          className="spinner-border ms-auto text-warning"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    );
  }

  if (question[0].correct_answer) {
    return (
      <div className="alert alert-warning text-center mt-5" role="alert">
        This question has already had it's answer set.
      </div>
    );
  }

  return (
    <>
      <h2 className="mb-4">Q: {question[0].question}</h2>
      {errorMessage && (
        <div className="alert alert-danger text-center" role="alert">
          {errorMessage}
        </div>
      )}
      {question[0].answer_type === CORRECT_SCORE_TYPE && (
        <CorrectScoreForm
          submitUrl={`/admin/questions/set-correct-text-answer/${questionId}`}
          setErrorMessage={setErrorMessage}
        />
      )}
      {question[0].answer_type === NUMBER_TYPE && (
        <NumberForm
          setErrorMessage={setErrorMessage}
          submitUrl={`/admin/questions/set-correct-text-answer/${questionId}`}
        />
      )}
      {question[0].answer_set_id === ALL_PLAYERS_TYPE && (
        <PlayersForm
          answerAmount={question[0].answer_amount}
          setErrorMessage={setErrorMessage}
          submitUrl={`/admin/questions/set-correct-players-answer/${questionId}`}
        />
      )}
      {question[0].answer_set_id === ALL_TEAMS_TYPE && (
        <TeamsForm
          answerAmount={question[0].answer_amount}
          setErrorMessage={setErrorMessage}
          submitUrl={`/admin/questions/set-correct-teams-answer/${questionId}`}
          setAnswers={setAnswers}
        />
      )}
    </>
  );
};

export default SetCorrectAnswer;
