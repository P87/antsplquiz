import { formatDateToEnglish } from "../utils";
import UsedPowerToken from "./usedPowerToken";
import React from "react";
import { ActiveAnswer, ActiveQuestion } from "../../../../types";

interface ActiveQuestionProps {
  hasAnswered: boolean;
  question: ActiveQuestion;
  activeAnswer: ActiveAnswer[];
}

export default ({
  hasAnswered,
  question,
  activeAnswer,
}: ActiveQuestionProps): JSX.Element => {
  return (
    <div className="mb-3">
      <div className="row p-2 border bg-primary fw-bold text-light border-dark">
        <div className="col-10">Max Points</div>
        <div className="col-2 text-end">
          {question.points * question.answer_amount}
        </div>
      </div>
      <div className="row p-2 border border-top-0 border-bottom-0 border-dark">
        <div className="col-12">{question.question}</div>
      </div>
      <div className="row p-2 border border-top-0 fw-bold border-bottom-0 border-dark">
        <div className="col-12">
          Deadline: {formatDateToEnglish(question.deadline)}
        </div>
      </div>
      {hasAnswered && (
        <div className="row p-2 border border-top-0 border-bottom-0 border-dark">
          <div className="col-12">
            Your Answer:
            <ul>
              {activeAnswer &&
                Object.values(activeAnswer).map((answer) => (
                  <li>{answer.name || answer.answer}</li>
                ))}
            </ul>
            <UsedPowerToken powerToken={question.power_token} />
          </div>
        </div>
      )}
      <div className="row p-2 border border-top-0 text-center border-dark">
        <div className="col-12">
          <div className="d-grid gap-2">
            <a
              href={`/questions/answer/${question.id}`}
              className="btn btn-success"
              role="button"
            >
              {hasAnswered && "Edit"} Answer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
