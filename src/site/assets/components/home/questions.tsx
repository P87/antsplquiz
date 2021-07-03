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
    <div className="p-1">
      <QuestionsNav
        onPreviousQuestionsClick={showPreviousQuestions}
        onActiveQuestionsClick={showActiveQuestions}
        displayActiveQuestions={displayActiveQuestions}
      />
      {displayActiveQuestions ? (
        activeQuestions.length ? (
          <div>
            {activeQuestions.map((question) => (
              <div className="mb-3">
                <div className="row p-2 border bg-primary fw-bold text-light border-dark">
                  <div className="col-10">Max Points</div>
                  <div className="col-2 text-end">{question.points}</div>
                </div>
                <div className="row p-2 border border-top-0 border-bottom-0 border-dark">
                  <div className="col-12">{question.question}</div>
                </div>
                <div className="row p-2 border border-top-0 fw-bold border-bottom-0 border-dark">
                  <div className="col-12">
                    Deadline: {formatDateToEnglish(question.deadline)}
                  </div>
                </div>
                <div className="row p-2 border border-top-0 text-center border-dark">
                  <div className="col-12">
                    <div className="d-grid gap-2">
                      <button className="btn btn-success" type="button">
                        Answer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="col">No Active Questions</div>
        )
      ) : previousQuestions.length ? (
        <div>
          {previousQuestions.map((question) => (
            <div className="mb-3">
              <div className="row p-2 border bg-primary fw-bold text-light border-dark">
                <div className="col-10">Max Points</div>
                <div className="col-2 text-end">{question.points}</div>
              </div>
              <div className="row p-2 border border-top-0 border-bottom-0 border-dark">
                <div className="col-12">{question.question}</div>
              </div>
              <div className="row p-2 border border-top-0 fw-bold border-bottom-0 border-dark">
                <div className="col-12">
                  Deadline: {formatDateToEnglish(question.deadline)}
                </div>
              </div>
              <div className="row p-2 border border-top-0 text-center border-dark">
                <div className="col-12">
                  <div className="d-grid gap-2">
                    <button className="btn btn-success" type="button">
                      Answer
                    </button>
                  </div>
                </div>
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
