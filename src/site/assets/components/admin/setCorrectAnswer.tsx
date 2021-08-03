import React, { useEffect, useState } from "react";
import { CorrectAnswer, MySQLCorrectAnswer } from "../../../../types";
import NumberForm from "../questions/numberForm";
import { CORRECT_SCORE_TYPE, NUMBER_TYPE } from "../../../constants";
import CorrectScoreForm from "../questions/correctScoreForm";

interface FormState {
  question: string;
  answerType: string | number;
  deadlineDay: undefined | number;
  deadlineMonth: undefined | number;
  deadlineYear: undefined | number;
  deadlineHour: undefined | number;
  deadlineMinute: undefined | number;
  points: undefined | number;
  answerAmount: number;
}

const questionId = window.location.pathname.split("/")[4];

const SetCorrectAnswer: React.FunctionComponent = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState<MySQLCorrectAnswer[]>();
  const [formData, setFormData] = useState<FormState>({
    question: "",
    answerType: "",
    deadlineDay: undefined,
    deadlineMonth: undefined,
    deadlineYear: undefined,
    deadlineHour: undefined,
    deadlineMinute: undefined,
    points: undefined,
    answerAmount: 1,
  });

  useEffect(() => {
    fetch(`/questions/get-correct-answers/${questionId}`, {
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
          setQuestion(result.question);
          const deadline = new Date(result.question.deadline);
          setFormData({
            ...formData,
            question: result.question.question,
            deadlineDay: deadline.getDate(),
            deadlineMonth: deadline.getMonth() + 1,
            deadlineYear: deadline.getFullYear(),
            deadlineHour: deadline.getHours(),
            deadlineMinute: deadline.getMinutes(),
            points: result.question.points,
          });
        }
      })
      .catch(() => {
        setErrorMessage("There was an error, please refresh and try again");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading || !question) {
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

  if (question[0].correct_answer) {
    return (
      <div className="alert alert-warning text-center mt-5" role="alert">
        This question has already had it's answer set.
      </div>
    );
  }

  return (
    <>
      <h2 className="mb-4">Q: {question[0].question}</h2>
      {errorMessage && (
        <div className="alert alert-danger text-center" role="alert">
          {errorMessage}
        </div>
      )}
      {question[0].answer_type === CORRECT_SCORE_TYPE && (
        <CorrectScoreForm
          submitUrl={`/admin/questions/set-correct-text-answer/${questionId}`}
          setErrorMessage={setErrorMessage}
        />
      )}
      {question[0].answer_type === NUMBER_TYPE && (
        <NumberForm
          setErrorMessage={setErrorMessage}
          submitUrl={`/admin/questions/set-correct-text-answer/${questionId}`}
        />
      )}
    </>
  );
};

export default SetCorrectAnswer;
