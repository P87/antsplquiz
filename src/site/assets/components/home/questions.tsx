import React, { useEffect, useState } from "react";
import { Question } from "../../../../types";
import { formatDateToEnglish } from "../utils";

const Questions = (): JSX.Element => {
  const [hasInitialised, setInitialised] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (!hasInitialised) {
      fetch("/questions/active", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }).then(async (result) => {
          setActiveQuestions(await result.json());
          setInitialised(true);
      })
    }
  });

  return (
    <div>
      <h2>Active Questions</h2>
      <div className="row">
        <div className="col-5">
          <strong>Question</strong>
        </div>
        <div className="col">
          <strong>Points</strong>
        </div>
        <div className="col">
          <strong>Deadline</strong>
        </div>
        <div className="col">
          <strong>Action</strong>
        </div>
      </div>
      {
        activeQuestions && activeQuestions.map((question) => {
          return <div>
            <div className="row">
              <div className="col-5">
                {question.question}
              </div>
              <div className="col">
                {question.points}
              </div>
              <div className="col">
                {formatDateToEnglish(question.deadline)}
              </div>
              <div className="col">
                <button type="button" className="btn btn-primary">Answer</button>
              </div>
            </div>
          </div>
        })
      }
    </div>
  );
}

export default Questions;