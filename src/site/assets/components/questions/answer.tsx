import React, { useEffect, useState } from "react";
import {
  Question,
  MySQLSetAnswer,
  MySQLAnswer,
  PowerToken,
} from "../../../../types";
import { formatDateToEnglish } from "../utils";
import * as Constants from "../../../constants";
import { AnswerForm } from "./answerForm";
import Loading from "../loading";

const AnswerQuestion = (): JSX.Element => {
  const [question, setQuestion] = useState<undefined | Question>();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [setAnswers, setSetAnswers] = useState<undefined | MySQLSetAnswer[]>();
  const [answer, setAnswer] = useState<undefined | MySQLAnswer[]>();
  const [deadline, setDeadline] = useState<Date>();
  const [powerTokens, setPowerTokens] = useState<PowerToken[]>([]);

  useEffect(() => {
    const questionId = window.location.pathname.split("/")[3];
    fetch(`/questions/get/${questionId}`, {
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
          const question = result.question;

          setQuestion(question);
          setSetAnswers(result.setAnswers);
          setDeadline(new Date(question.deadline));
          setPowerTokens(result.powerTokens);

          if (question.answer_set_id === Constants.ALL_PLAYERS_TYPE) {
            setAnswer(result.answers);
          } else {
            setAnswer(
              result.answers.map((a: MySQLAnswer) =>
                question.answer_set_id ? `${a.answer_set_id}` : `${a.answer}`
              )
            );
          }
        }
      })
      .catch(() => {
        setErrorMessage("There was an error, please refresh and try again");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-1">
      {errorMessage && (
        <div className="alert alert-danger text-center" role="alert">
          {errorMessage}
        </div>
      )}
      {question && (
        <div>
          <div className="row border-bottom border-dark mb-4 pb-4 text-center">
            <h1 className="col-12">Q: {question.question}</h1>
          </div>
          <div className="row text-center">
            <div className="col-6 border-end">Max Points:</div>
            <div className="col-6">Deadline:</div>
          </div>
          <div className="row text-center fw-bold border-bottom pb-4 mb-4">
            <div className="col-6 border-end">
              {question.points * question.answer_amount}
            </div>
            <div className="col-6">
              {formatDateToEnglish(question.deadline)}
            </div>
          </div>
          {deadline && deadline > new Date() ? (
            <AnswerForm
              question={question}
              setErrorMessage={setErrorMessage}
              setAnswers={setAnswers}
              savedAnswer={answer}
              powerTokens={powerTokens}
            />
          ) : (
            <div className="alert alert-warning text-center" role="alert">
              The deadline for this question has passed.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AnswerQuestion;
