import React, { useEffect, useState } from "react";
import { Question } from "../../../../types";

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

const EditQuestion: React.FunctionComponent = () => {
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

  if (isLoading) {
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
    <form onSubmit={handleFormSubmit}>
      {resultState === true && (
        <div className="alert alert-success">Question updated successfully</div>
      )}
      {resultState === false && (
        <div className="alert alert-danger">
          Error updating question. Please try again.
        </div>
      )}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <div className="mb-3">
        <label htmlFor="question" className="form-label">
          Question
        </label>
        <input
          type="text"
          className="form-control"
          id="question"
          name="question"
          onChange={handleFormChange}
          value={formData.question}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Deadline</label>
        <div className="row">
          <div className="col">
            <input
              type="number"
              name="deadlineDay"
              className="form-control"
              placeholder="DD"
              onChange={handleFormChange}
              value={formData.deadlineDay}
            />
          </div>
          <div className="col">
            <input
              type="number"
              name="deadlineMonth"
              className="form-control"
              placeholder="MM"
              onChange={handleFormChange}
              value={formData.deadlineMonth}
            />
          </div>
          <div className="col">
            <input
              type="number"
              name="deadlineYear"
              className="form-control"
              placeholder="YYYY"
              onChange={handleFormChange}
              value={formData.deadlineYear}
            />
          </div>
          <div className="col">
            <input
              type="number"
              name="deadlineHour"
              className="form-control"
              placeholder="HH (24 hour)"
              onChange={handleFormChange}
              value={formData.deadlineHour}
            />
          </div>
          <div className="col">
            <input
              type="number"
              name="deadlineMinute"
              className="form-control"
              placeholder="MM"
              onChange={handleFormChange}
              value={formData.deadlineMinute}
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="row">
          <label htmlFor="points" className="col-sm-2 col-form-label">
            Points
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="points"
              name="points"
              onChange={handleFormChange}
              value={formData.points}
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          Update Question
        </button>
      </div>
    </form>
  );
};

export default EditQuestion;
