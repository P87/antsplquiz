import React, { useEffect, useState } from "react";
import { Question } from "../../../../types";
import { formatDateToEnglish } from "../utils";

interface NavProps {
  onPreviousQuestionsClick: (e: React.SyntheticEvent) => Promise<void>;
  onActiveQuestionsClick: (e: React.SyntheticEvent) => void;
  displayActiveQuestions: boolean;
}

const Questions = (): JSX.Element | null => {
  const [hasInitialised, setInitialised] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [previousQuestions, setPreviousQuestions] = useState<Question[]>([]);
  const [displayActiveQuestions, setDisplayActiveQuestions] = useState(true);

  useEffect(() => {
    setInitialised(true);
    async function getActiveQuestions() {
      const questions = await fetch("/questions/active", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setActiveQuestions(await questions.json());
    }
    if (!hasInitialised) {
      getActiveQuestions();
    }
  });

  const showPreviousQuestions = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (previousQuestions.length) {
      setDisplayActiveQuestions(false);
      return;
    }
    const questions = await fetch("/questions/previous", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    setPreviousQuestions(await questions.json());
    setDisplayActiveQuestions(false);
  };

  const showActiveQuestions = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setDisplayActiveQuestions(true);
  };

  return (
    <div>
      <QuestionsNav
        onPreviousQuestionsClick={showPreviousQuestions}
        onActiveQuestionsClick={showActiveQuestions}
        displayActiveQuestions={displayActiveQuestions}
      />
      {displayActiveQuestions ? (
        activeQuestions.length ? (
          <div>
            <div className="row bg-primary p-1 pt-2 pb-2 border border-dark text-light mb-2">
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
            {activeQuestions.map((question) => (
              <div className="row p-1 mt-1 mb-1 pt-2 border-bottom border-dark">
                <div className="col-5">{question.question}</div>
                <div className="col">{question.points}</div>
                <div className="col">
                  {formatDateToEnglish(question.deadline)}
                </div>
                <div className="col">
                  <button type="button" className="btn btn-primary">
                    Answer
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="col">No Active Questions</div>
        )
      ) : previousQuestions.length ? (
        <div>
          <div className="row bg-primary p-1 pt-2 pb-2 border border-dark text-light mb-2">
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
          {previousQuestions.map((question) => (
            <div className="row p-1 mt-1 mb-1 pt-2 border-bottom border-dark">
              <div className="col-5">{question.question}</div>
              <div className="col">{question.points}</div>
              <div className="col">
                {formatDateToEnglish(question.deadline)}
              </div>
              <div className="col">
                <button type="button" className="btn btn-primary">
                  Answer
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="col">No Previous Questions</div>
      )}
    </div>
  );
};

export const QuestionsNav = ({
  onPreviousQuestionsClick,
  onActiveQuestionsClick,
  displayActiveQuestions,
}: NavProps): JSX.Element => {
  return (
    <div className="row">
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <a
            className={displayActiveQuestions ? "nav-link active" : "nav-link"}
            href="/"
            onClick={onActiveQuestionsClick}
          >
            Active Questions
          </a>
        </li>
        <li className="nav-item">
          <a
            className={displayActiveQuestions ? "nav-link" : "nav-link active"}
            href="#"
            onClick={onPreviousQuestionsClick}
          >
            Previous Questions
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Questions;
