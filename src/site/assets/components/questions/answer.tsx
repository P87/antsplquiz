import React, { Dispatch, useEffect, useState } from "react";
import { Question, MySQLSetAnswer, MySQLAnswer } from "../../../../types";
import { formatDateToEnglish } from "../utils";
import CorrectScoreForm from "./correctScoreForm";
import YesNoForm from "./yesNoForm";
import NumberForm from "./numberForm";
import TeamsForm from "./teamsForm";

interface FormProps {
  question: Question;
  setErrorMessage: Dispatch<React.SetStateAction<string>>;
  setAnswers: MySQLSetAnswer[] | undefined;
  savedAnswer: MySQLAnswer[] | undefined;
}

const ALL_TEAMS_TYPE = 1;

const AnswerQuestion = (): JSX.Element => {
  const [question, setQuestion] = useState<undefined | Question>();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [setAnswers, setSetAnswers] = useState<undefined | MySQLSetAnswer[]>();
  const [answer, setAnswer] = useState<undefined | MySQLAnswer[]>();

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
          setIsLoading(false);
          setQuestion(result.question);
          setSetAnswers(result.setAnswers);
          setAnswer(
            result.answers.map((answer: MySQLAnswer) =>
              result.question.answer_set_id
                ? `${answer.answer_set_id}`
                : `${answer.answer}`
            )
          );
        }
      })
      .catch(() => {
        setErrorMessage("There was an error, please refresh and try again");
      });
  }, []);

  return (
    <div className="p-1">
      {isLoading && <p>Loading...</p>}
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
          <AnswerForm
            question={question}
            setErrorMessage={setErrorMessage}
            setAnswers={setAnswers}
            savedAnswer={answer}
          />
        </div>
      )}
    </div>
  );
};

const AnswerForm = ({
  question,
  setErrorMessage,
  setAnswers,
  savedAnswer,
}: FormProps): JSX.Element => {
  switch (question.answer_type) {
    case "number":
      return (
        <NumberForm
          question={question}
          setErrorMessage={setErrorMessage}
          savedAnswer={savedAnswer}
        />
      );
    case "yesno":
      return (
        <YesNoForm
          question={question}
          setErrorMessage={setErrorMessage}
          savedAnswer={savedAnswer}
        />
      );
    case "score":
      return (
        <CorrectScoreForm
          question={question}
          setErrorMessage={setErrorMessage}
          savedAnswer={savedAnswer}
        />
      );
    case null:
      if (question.answer_set_id === ALL_TEAMS_TYPE && setAnswers) {
        return (
          <TeamsForm
            question={question}
            setErrorMessage={setErrorMessage}
            savedAnswer={savedAnswer}
            setAnswers={setAnswers}
          />
        );
      }
      break;
  }

  return (
    <div className="text-center">
      It appears this type of question isn't ready to answer yet
    </div>
  );
};

export default AnswerQuestion;
