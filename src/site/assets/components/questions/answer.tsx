import React, { Dispatch, useEffect, useState } from "react";
import { Question, MySQLSetAnswer, MySQLAnswer } from "../../../../types";
import { formatDateToEnglish } from "../utils";
import CorrectScoreForm from "./correctScoreForm";
import YesNoForm from "./yesNoForm";
import NumberForm from "./numberForm";
import TeamsForm from "./teamsForm";
import PlayersForm from "./playersForm";
import * as Constants from "../../../constants";
import { ALL_PLAYERS_TYPE } from "../../../constants";
import ManagersForm from "./managersForm";

interface FormProps {
  question: Question;
  setErrorMessage: Dispatch<React.SetStateAction<string>>;
  setAnswers?: MySQLSetAnswer[];
  savedAnswer?: MySQLAnswer[] | MySQLSetAnswer[];
}

const AnswerQuestion = (): JSX.Element => {
  const [question, setQuestion] = useState<undefined | Question>();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [setAnswers, setSetAnswers] = useState<undefined | MySQLSetAnswer[]>();
  const [answer, setAnswer] = useState<undefined | MySQLAnswer[]>();
  const [deadline, setDeadline] = useState<Date>();

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
          setQuestion(result.question);
          setSetAnswers(result.setAnswers);
          setDeadline(new Date(result.question.deadline));
          if (result.question.answer_set_id === ALL_PLAYERS_TYPE) {
            setAnswer(result.answers);
          } else {
            setAnswer(
              result.answers.map((a: MySQLAnswer) =>
                result.question.answer_set_id
                  ? `${a.answer_set_id}`
                  : `${a.answer}`
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
          {deadline && deadline > new Date() ? (
            <AnswerForm
              question={question}
              setErrorMessage={setErrorMessage}
              setAnswers={setAnswers}
              savedAnswer={answer}
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

export const AnswerForm = ({
  question,
  setErrorMessage,
  setAnswers,
  savedAnswer,
}: FormProps): JSX.Element => {
  switch (question.answer_type) {
    case "number":
      return (
        <NumberForm
          setErrorMessage={setErrorMessage}
          savedAnswer={savedAnswer as MySQLAnswer[]}
          submitUrl={`/questions/set-number-answer/${question.id}`}
        />
      );
    case "yesno":
      return (
        <YesNoForm
          question={question}
          setErrorMessage={setErrorMessage}
          savedAnswer={savedAnswer as MySQLAnswer[]}
        />
      );
    case "score":
      return (
        <CorrectScoreForm
          setErrorMessage={setErrorMessage}
          savedAnswer={savedAnswer as MySQLAnswer[]}
          submitUrl={`/questions/set-correct-score-answer/${question.id}`}
        />
      );
    case null:
      if (question.answer_set_id === Constants.ALL_TEAMS_TYPE && setAnswers) {
        return (
          <TeamsForm
            question={question}
            setErrorMessage={setErrorMessage}
            savedAnswer={savedAnswer as MySQLAnswer[]}
            setAnswers={setAnswers}
          />
        );
      } else if (question.answer_set_id === Constants.ALL_PLAYERS_TYPE) {
        return (
          <PlayersForm
            question={question}
            setErrorMessage={setErrorMessage}
            setAnswers={setAnswers}
            savedAnswer={savedAnswer as MySQLSetAnswer[]}
          />
        );
      } else if (question.answer_set_id === Constants.ALL_MANAGERS_TYPE) {
        return (
          <ManagersForm
            question={question}
            setErrorMessage={setErrorMessage}
            setAnswers={setAnswers}
            savedAnswer={savedAnswer as MySQLAnswer[]}
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
