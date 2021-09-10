import React, { useEffect, useState } from "react";
import {
  ActiveQuestion,
  ActiveAnswer,
  Dictionary,
  MySQLUser,
} from "../../../../types";

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
    return (
      <div className="d-flex align-items-center pt-5 pb-5">
        <strong>Loading...</strong>
        <div
          className="spinner-border ms-auto text-warning"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    );
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
                      <li>{ans.name || ans.answer}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserAdmin;
