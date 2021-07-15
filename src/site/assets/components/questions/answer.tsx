import React, { Dispatch, useEffect, useState } from "react";
import { Question, MySQLSetAnswer, MySQLAnswer } from "../../../../types";
import { formatDateToEnglish } from "../utils";

interface FormProps {
  question: Question;
  setErrorState: Dispatch<React.SetStateAction<boolean>>;
  setAnswers: MySQLSetAnswer[] | undefined;
  savedAnswer: MySQLAnswer[] | undefined;
}

const ALL_TEAMS_TYPE = 1;

const AnswerQuestion = (): JSX.Element => {
  const [question, setQuestion] = useState<undefined | Question>();
  const [errorState, setErrorState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [setAnswers, setSetAnswers] = useState<undefined | MySQLSetAnswer[]>();
  const [answer, setAnswer] = useState<undefined | MySQLAnswer[]>();

  useEffect(() => {
    const questionId = window.location.pathname.split("/")[3];
    fetch(`/questions/get/${questionId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (!result.success) {
          setErrorState(true);
          return;
        } else {
          setIsLoading(false);
          setQuestion(result.question);
          setSetAnswers(result.setAnswers);
          setAnswer(
            result.answers.map(
              (answer: MySQLAnswer) => `${answer.answer_set_id}`
            )
          );
        }
      })
      .catch(() => {
        setErrorState(true);
      });
  }, []);

  return (
    <div className="p-1">
      {isLoading && <p>Loading...</p>}
      {errorState && (
        <div className="alert alert-danger text-center" role="alert">
          There was an error, please refresh the page and try again.
        </div>
      )}
      {question && (
        <div>
          <div className="row border-bottom border-dark mb-4 pb-4 text-center">
            <h1 className="col-12">Q: {question.question}</h1>
          </div>
          <div className="row text-center">
            <div className="col-6 border-end">Max Points:</div>
            <div className="col-6">Deadline:</div>
          </div>
          <div className="row text-center fw-bold border-bottom pb-4 mb-4">
            <div className="col-6 border-end">
              {question.points * question.answer_amount}
            </div>
            <div className="col-6">
              {formatDateToEnglish(question.deadline)}
            </div>
          </div>
          <AnswerForm
            question={question}
            setErrorState={setErrorState}
            setAnswers={setAnswers}
            savedAnswer={answer}
          />
        </div>
      )}
    </div>
  );
};

const AnswerForm = ({
  question,
  setErrorState,
  setAnswers,
  savedAnswer,
}: FormProps): JSX.Element => {
  const toReturn = [];

  const [answer, setAnswer] = useState<any[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [loadedSavedAnswer, setLoadedSavedAnswer] = useState(false);
  const [showSaveButton, setShowSaveButton] = useState(true);

  useEffect(() => {
    if (savedAnswer && !loadedSavedAnswer) {
      setAnswer(savedAnswer);
      setShowSaveButton(false);
      setLoadedSavedAnswer(true);
    }
  });

  const handleFormChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const answers = answer.slice();
    answers[index] = e.target.value;
    setShowSaveButton(true);

    setAnswer(answers);
  };

  const handleSubmit = () => {
    setSubmitting(true);
    console.log("submitting", answer);
    fetch(`/questions/set-answer/${question.id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answers: answer,
        question: question,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          console.log("submitted");
        } else {
          setErrorState(true);
        }
      })
      .catch(() => {
        setErrorState(true);
      })
      .finally(() => setSubmitting(false));
  };

  if (submitting) {
    return <div className="text-center">Submitting...</div>;
  }

  switch (question.answer_type) {
    case "number":
      for (let i = 0; i < question.answer_amount; i++) {
        toReturn.push(
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="number"
              name="number[]"
              placeholder="Your Answer"
              value={answer[i]}
              onChange={handleFormChange.bind(this, i)}
            />
            <label htmlFor="number" className="form-label">
              Your Answer
            </label>
          </div>
        );
      }
      break;
    case null:
      if (question.answer_set_id === ALL_TEAMS_TYPE && setAnswers) {
        for (let i = 0; i < question.answer_amount; i++) {
          toReturn.push(
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              onChange={handleFormChange.bind(this, i)}
            >
              <option selected>Select a team</option>
              {setAnswers.map((setAnswer) => {
                return (
                  <option
                    value={setAnswer.id}
                    selected={
                      answer[i] && answer[i] === setAnswer.id.toString()
                    }
                  >
                    {setAnswer.answer}
                  </option>
                );
              })}
            </select>
          );
        }
      }
      break;
  }

  return (
    <div>
      {toReturn}
      {showSaveButton && (
        <div className="mt-4 text-center">
          <button
            className="btn btn-success"
            type="button"
            onClick={handleSubmit}
          >
            {savedAnswer?.length ? "Update" : "Submit"} Answer
          </button>
        </div>
      )}
    </div>
  );
};

export default AnswerQuestion;
