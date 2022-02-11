import React, { useEffect, useState } from "react";
import {
  ActiveQuestion,
  ActiveAnswer,
  CorrectAnswer,
  Dictionary,
} from "../../../../types";
import { formatDateToEnglish } from "../utils";
import UsedPowerToken from "./usedPowerToken";
import PreviousNav from "./previousNav";
import QuestionsNav from "./questionsNav";
import ActiveQuestionBox from "./activeQuestionBox";

export enum Tabs {
  UNANSWERED,
  ACTIVE,
  PREVIOUS,
  UNSETTLED,
  SETTLED,
}

const Questions = (): JSX.Element => {
  const [activeQuestions, setActiveQuestions] = useState<
    Dictionary<ActiveQuestion>
  >({});
  const [unansweredActiveQuestions, setUnansweredActiveQuestions] = useState<
    string[]
  >([]);
  const [activeAnswers, setActiveAnswers] = useState<
    Dictionary<ActiveAnswer[]>
  >({});
  const [previousQuestions, setPreviousQuestions] = useState<
    Dictionary<ActiveQuestion>
  >({});
  const [previousAnswers, setPreviousAnswers] = useState<
    Dictionary<ActiveAnswer[]>
  >({});
  const [correctAnswers, setCorrectAnswers] = useState<CorrectAnswer>();
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.ACTIVE);
  const [activePreviousTab, setActivePreviousTab] = useState<Tabs>(
    Tabs.SETTLED
  );

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

      const unansweredQuestions: string[] = Object.keys(
        activeQs.questions
      ).filter((key) => {
        return (
          activeQs.answers &&
          activeQs.answers[key] &&
          !activeQs.answers[key].length
        );
      });

      setActiveQuestions(activeQs.questions);
      setUnansweredActiveQuestions(unansweredQuestions);
      setActiveAnswers(activeQs.answers);

      if (unansweredQuestions.length) {
        setActiveTab(Tabs.UNANSWERED);
      }
    }
    getActiveQuestions();
  }, []);

  const showPreviousQuestions = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (Object.keys(previousQuestions).length) {
      setActiveTab(Tabs.PREVIOUS);
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
    setActiveTab(Tabs.PREVIOUS);
  };

  const showActiveQuestions = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setActiveTab(Tabs.ACTIVE);
  };

  const showUnansweredQuestions = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setActiveTab(Tabs.UNANSWERED);
  };

  const onPreviousTabClick = (tab: Tabs, event: React.SyntheticEvent) => {
    event.preventDefault();
    setActivePreviousTab(tab);
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
        onUnansweredQuestionsClick={showUnansweredQuestions}
        activeTab={activeTab}
        unansweredCount={unansweredActiveQuestions.length}
      />

      {hasUnansweredQuestions && (
        <div className="alert alert-danger text-center">
          You have questions that need answering!
        </div>
      )}

      {activeTab === Tabs.UNANSWERED &&
        (unansweredActiveQuestions.length ? (
          <div>
            {unansweredActiveQuestions.map((key: string) => {
              return (
                <ActiveQuestionBox
                  question={activeQuestions[key]}
                  hasAnswered={!!activeAnswers[key]?.length}
                  activeAnswer={activeAnswers[key]}
                />
              );
            })}
          </div>
        ) : (
          <div className="alert alert-success text-center">
            Nothing to see here. You have answered all the active questions.
          </div>
        ))}

      {activeTab === Tabs.ACTIVE &&
        (Object.keys(activeQuestions).length ? (
          <div>
            {Object.keys(activeQuestions).map((key) => {
              return (
                <ActiveQuestionBox
                  hasAnswered={!!activeAnswers[key]?.length}
                  question={activeQuestions[key]}
                  activeAnswer={activeAnswers[key]}
                />
              );
            })}
          </div>
        ) : (
          <div className="col">No Active Questions</div>
        ))}

      {activeTab === Tabs.PREVIOUS &&
        (Object.keys(previousQuestions).length ? (
          <div>
            <PreviousNav
              activeTab={activePreviousTab}
              onTabClick={onPreviousTabClick}
            />
            {Object.keys(previousQuestions)
              .filter((key) => {
                return activePreviousTab === Tabs.SETTLED
                  ? correctAnswers && !!correctAnswers[key]
                  : !correctAnswers || (correctAnswers && !correctAnswers[key]);
              })
              .map((key) => {
                const isSettled = correctAnswers && !!correctAnswers[key];
                const hasAnswered = !!previousAnswers[key]?.length;
                const question = previousQuestions[key];
                const addedPoints = question.added_points;
                const usersCorrectAnswers =
                  (hasAnswered &&
                    previousAnswers[key] &&
                    Object.values(previousAnswers[key]).filter(
                      (answer) => answer.correct
                    )) ||
                  [];
                const correct =
                  isSettled &&
                  usersCorrectAnswers.length === question.answer_amount;
                const lost = isSettled && !usersCorrectAnswers.length;

                return (
                  <div className="mb-3">
                    <div
                      className={`row p-2 border ${
                        correct ? "bg-success" : "bg-primary"
                      } ${lost && !addedPoints ? "bg-danger" : ""} ${
                        (!lost && !correct && isSettled) || addedPoints
                          ? "bg-warning"
                          : ""
                      } fw-bold text-light border-dark`}
                    >
                      <div className="col-10">{!isSettled && "Max"} Points</div>
                      <div className="col-2 text-end">
                        {!isSettled && question.points * question.answer_amount}
                        {isSettled &&
                          !addedPoints &&
                          question.points * usersCorrectAnswers.length}
                        {addedPoints && addedPoints}
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
                            <UsedPowerToken powerToken={question.power_token} />
                          </div>
                          {correct && (
                            <div className="col-12">
                              <div className="alert alert-success">
                                Nice one! You got this question right
                              </div>
                            </div>
                          )}
                          {!correct && correctAnswers && correctAnswers[key] && (
                            <div className="col-12">
                              <div className="alert alert-warning">
                                The correct answer was:
                                <ul>
                                  {correctAnswers[key].map((correctAnswer) => (
                                    <li>{correctAnswer.correctAnswer}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                          {addedPoints && (
                            <div className="col-12">
                              <div className="alert alert-success">
                                You were awarded {addedPoints} points for this
                                question
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
        ))}
    </div>
  );
};

export default Questions;
