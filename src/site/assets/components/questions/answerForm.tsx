import * as Constants from "../../../constants";
import NumberForm from "./numberForm";
import { MySQLAnswer, MySQLSetAnswer, Question } from "../../../../types";
import YesNoForm from "./yesNoForm";
import CorrectScoreForm from "./correctScoreForm";
import TeamsForm from "./teamsForm";
import PlayersForm from "./playersForm";
import ManagersForm from "./managersForm";
import React, { Dispatch } from "react";

interface FormProps {
  question: Question;
  setErrorMessage: Dispatch<React.SetStateAction<string>>;
  setAnswers?: MySQLSetAnswer[];
  savedAnswer?: MySQLAnswer[] | MySQLSetAnswer[];
}

export const AnswerForm = ({
  question,
  setErrorMessage,
  setAnswers,
  savedAnswer,
}: FormProps): JSX.Element => {
  switch (question.answer_type) {
    case Constants.NUMBER_TYPE:
      return (
        <NumberForm
          setErrorMessage={setErrorMessage}
          savedAnswer={savedAnswer as MySQLAnswer[]}
          submitUrl={`/questions/set-text-answer/${question.id}`}
        />
      );
    case Constants.YESNO_TYPE:
      return (
        <YesNoForm
          setErrorMessage={setErrorMessage}
          savedAnswer={savedAnswer as MySQLAnswer[]}
          submitUrl={`/questions/set-text-answer/${question.id}`}
        />
      );
    case Constants.CORRECT_SCORE_TYPE:
      return (
        <CorrectScoreForm
          setErrorMessage={setErrorMessage}
          savedAnswer={savedAnswer as MySQLAnswer[]}
          submitUrl={`/questions/set-text-answer/${question.id}`}
        />
      );
    case null:
      if (question.answer_set_id === Constants.ALL_TEAMS_TYPE && setAnswers) {
        return (
          <TeamsForm
            answerAmount={question.answer_amount}
            setErrorMessage={setErrorMessage}
            savedAnswer={savedAnswer as MySQLAnswer[]}
            setAnswers={setAnswers}
            submitUrl={`/questions/set-teams-answer/${question.id}`}
          />
        );
      } else if (question.answer_set_id === Constants.ALL_PLAYERS_TYPE) {
        return (
          <PlayersForm
            answerAmount={question.answer_amount}
            setErrorMessage={setErrorMessage}
            setAnswers={setAnswers}
            savedAnswer={savedAnswer as MySQLSetAnswer[]}
            submitUrl={`/questions/set-players-answer/${question.id}`}
          />
        );
      } else if (question.answer_set_id === Constants.ALL_MANAGERS_TYPE) {
        return (
          <ManagersForm
            answerAmount={question.answer_amount}
            setErrorMessage={setErrorMessage}
            setAnswers={setAnswers}
            savedAnswer={savedAnswer as MySQLAnswer[]}
            submitUrl={`/questions/set-managers-answer/${question.id}`}
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
