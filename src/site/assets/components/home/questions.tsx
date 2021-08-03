import React, { useEffect, useState } from "react";
import { ActiveQuestion, ActiveAnswer, CorrectAnswer } from "../../../../types";
import { formatDateToEnglish } from "../utils";

interface NavProps {
  onPreviousQuestionsClick: (e: React.SyntheticEvent) => Promise<void>;
  onActiveQuestionsClick: (e: React.SyntheticEvent) => void;
  displayActiveQuestions: boolean;
}

const Questions = (): JSX.Element => {
  const [activeQuestions, setActiveQuestions] = useState<ActiveQuestion>({});
  const [activeAnswers, setActiveAnswers] = useState<ActiveAnswer>({});
  const [previousQuestions, setPreviousQuestions] = useState<ActiveQuestion>(
    {}
  );
  const [previousAnswers, setPreviousAnswers] = useState<ActiveAnswer>({});
  const [displayActiveQuestions, setDisplayActiveQuestions] = useState(true);
  const [correctAnswers, setCorrectAnswers] = useState<CorrectAnswer>();

  useEffect(() => {
    async function getActiveQuestions() {
      const activeQs = await (
        await fetch("/questions/active", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
      ).json();

      setActiveQuestions(activeQs.questions);
      setActiveAnswers(activeQs.answers);
    }
    getActiveQuestions();
  }, []);

  const showPreviousQuestions = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (Object.keys(previousQuestions).length) {
      setDisplayActiveQuestions(false);
      return;
    }
    const previousQs = await (
      await fetch("/questions/previous", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
    ).json();
    setPreviousQuestions(previousQs.questions);
    setPreviousAnswers(previousQs.answers);
    setCorrectAnswers(previousQs.correctAnswers);
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
      ) : Object.keys(previousQuestions).length ? (
        <div>
          {Object.keys(previousQuestions).map((key) => {
            const isSettled = correctAnswers && !!correctAnswers[key];
            const hasAnswered = !!previousAnswers[key]?.length;
            const question = previousQuestions[key];
            const correct =
              hasAnswered &&
              previousAnswers[key] &&
              Object.values(previousAnswers[key]).every(
                (answer) => answer.correct
              );
            const wrongAnswerCount =
              hasAnswered &&
              isSettled &&
              Object.values(previousAnswers[key]).filter(
                (answer) =>
                  !correctAnswers![key].some(
                    (correctAnswer) =>
                      correctAnswer.correctAnswer === answer.answer
                  )
              ).length;
            const lost = wrongAnswerCount === question.answer_amount;

            return (
              <div className="mb-3">
                <div
                  className={`row p-2 border ${
                    correct ? "bg-success" : "bg-primary"
                  } ${lost ? "bg-danger" : ""} fw-bold text-light border-dark`}
                >
                  <div className="col-10">{!isSettled && "Max"} Points</div>
                  <div className="col-2 text-end">
                    {!isSettled && question.points * question.answer_amount}
                    {isSettled &&
                      wrongAnswerCount !== false &&
                      question.points *
                        (question.answer_amount - wrongAnswerCount!)}
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
                <div className="row p-2 border border-top-0 border-dark">
                  {hasAnswered ? (
                    <>
                      <div className="col-12">
                        Your Answer:
                        <ul>
                          {previousAnswers[key] &&
                            Object.values(previousAnswers[key]).map(
                              (answer) => (
                                <li>{answer.name || answer.answer}</li>
                              )
                            )}
                        </ul>
                      </div>
                      {correct && (
                        <div className="col-12">
                          <div className="alert alert-success">
                            Nice one! You got this question right
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="alert alert-danger">
                      We don't have an answer from you for this question
                    </div>
                  )}
                </div>
              </div>
            );
          })}
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
