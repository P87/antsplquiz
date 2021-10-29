import React, { useEffect, useState } from "react";
import BonusPointsForm from "./bonusPointsForm";
import {
  ActiveQuestion,
  ActiveAnswer,
  Dictionary,
  MySQLUser,
} from "../../../../types";
import Loading from "../loading";

const UserAdmin = (): JSX.Element => {
  const [user, setUser] = useState<MySQLUser>();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState<Dictionary<ActiveQuestion>>({});
  const [answers, setAnswers] = useState<Dictionary<ActiveAnswer[]>>({});

  useEffect(() => {
    const userId = window.location.pathname.split("/")[3];
    fetch(`/admin/users/get/${userId}`, {
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
          setUser(result.user[0]);
          setQuestions(result.questions);
          setAnswers(result.answers);
        }
      })
      .catch(() => {
        setErrorMessage("There was an error, please refresh and try again");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if ((isLoading || !user) && !errorMessage) {
    return <Loading />;
  }

  if (!user) {
    return <></>;
  }

  return (
    <div>
      {errorMessage && (
        <div className="alert alert-danger text-center" role="alert">
          {errorMessage}
        </div>
      )}
      <h2>
        {user.display_name} ({user.username})
      </h2>
      <div>
        {Object.keys(questions).map((questionId) => {
          const question = questions[questionId];
          const answer = answers && answers[questionId];

          return (
            <div className="m-3 p-3 border border-dark">
              <div className="fw-bold">{question.question}</div>
              <div>
                {answer && (
                  <ul>
                    {answer.map((ans) => (
                      <li>
                        {ans.name || ans.answer}
                        {!!ans.correct && (
                          <>
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-check-circle-fill text-success"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {question.added_points === null && (
                <BonusPointsForm questionId={+questionId} />
              )}
              {question.added_points && (
                <div className="alert alert-warning">
                  {question.added_points} bonus points have been added for this
                  question
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserAdmin;
