import React, { useEffect, useState } from "react";
import { Question } from "../../../../types";
import NumberForm from "../questions/numberForm";

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

const SetCorrectAnswer: React.FunctionComponent = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState<Question>();
  const [resultState, setResultState] = useState<null | boolean>(null);
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
  const [savedAnswer, setSavedAnswer] = useState();

  useEffect(() => {
    const questionId = window.location.pathname.split("/")[4];
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
          setErrorMessage("There was an error, please refresh and try again.");
          return;
        } else {
          setIsLoading(false);
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
      });
  }, []);

  const handleFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const {
      question: formQuestion,
      deadlineDay,
      deadlineMonth,
      deadlineYear,
      deadlineHour,
      deadlineMinute,
      points,
    } = formData;

    const result = await (
      await fetch(`/admin/questions/edit/${question!.id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: formQuestion,
          deadline: `${deadlineYear}-${deadlineMonth}-${deadlineDay} ${deadlineHour}:${deadlineMinute}:00`,
          points,
        }),
      })
    ).json();

    if (result.success) {
      setResultState(true);
    } else {
      setResultState(false);
    }
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  return (
    <NumberForm
      setErrorMessage={setErrorMessage}
      savedAnswer={savedAnswer}
      submitUrl={`/admin/questions/set-correct-number-answer/${question.id}`}
    />
  );
};

export default SetCorrectAnswer;
