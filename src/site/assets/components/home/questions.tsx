import React, { useEffect, useState } from "react";
import { Question, ActiveQuestion, ActiveAnswer } from "../../../../types";
import { formatDateToEnglish } from "../utils";

interface NavProps {
  onPreviousQuestionsClick: (e: React.SyntheticEvent) => Promise<void>;
  onActiveQuestionsClick: (e: React.SyntheticEvent) => void;
  displayActiveQuestions: boolean;
}

const Questions = (): JSX.Element => {
  const [activeQuestions, setActiveQuestions] = useState<ActiveQuestion>({});
  const [activeAnswers, setActiveAnswers] = useState<ActiveAnswer>({});
  const [previousQuestions, setPreviousQuestions] = useState<Question[]>([]);
  const [displayActiveQuestions, setDisplayActiveQuestions] = useState(true);

  useEffect(() => {
    async function getActiveQuestions() {
      const activeQuestions = await (
        await fetch("/questions/active", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
      ).json();

      setActiveQuestions(activeQuestions.questions);
      setActiveAnswers(activeQuestions.answers);
    }
    getActiveQuestions();
  }, []);

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

  const hasUnansweredQuestions = Object.values(activeQuestions).some(
    (question) => {
      return (
        (activeAnswers && !activeAnswers[question.id]) ||
        !activeAnswers[question.id].length
      );
    }
  );

  return (
    <div className="p-1">
      <QuestionsNav
        onPreviousQuestionsClick={showPreviousQuestions}
        onActiveQuestionsClick={showActiveQuestions}
        displayActiveQuestions={displayActiveQuestions}
      />
      {hasUnansweredQuestions && (
        <div className="alert alert-warning text-center">
          You have questions that need answering!
        </div>
      )}
      {displayActiveQuestions ? (
        Object.keys(activeQuestions).length ? (
          <div>
            {Object.keys(activeQuestions).map((key) => {
              const hasAnswered = !!activeAnswers[key]?.length;
              const question = activeQuestions[key];

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
                          {activeAnswers[key] &&
                            Object.values(activeAnswers[key]).map((answer) => (
                              <li>{answer.name || answer.answer}</li>
                            ))}
                        </ul>
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
            })}
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
