import React, { useState } from "react";
import { AnswerSet, Question } from "../../../../types";
import { formatDateToEnglish } from "../utils";

interface FormProps {
  answerSets: AnswerSet[];
}

interface Props extends FormProps {
  questions: {
    activeQuestions: Question[];
    pastQuestions: Question[];
  };
}

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

const QuestionsAdmin = ({ answerSets, questions }: Props): JSX.Element => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {showForm && <QuestionForm answerSets={answerSets} />}
      {!showForm && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          New Question
        </button>
      )}
      <h2>Active Questions</h2>
      <div>
        <div className="row">
          <div className="col">Question</div>
          <div className="col">Deadline</div>
          <div className="col">Type</div>
          <div className="col">Points</div>
        </div>

        {questions.activeQuestions.map((question) => {
          const deadline = formatDateToEnglish(question.deadline);

          const type =
            question.answer_type ??
            answerSets.find(
              (set: any) => set && set.id === question.answer_set_id
            )?.name;

          return (
            <div className="row">
              <div className="col">{question.question}</div>
              <div className="col">{deadline}</div>
              <div className="col">{type}</div>
              <div className="col">{question.points}</div>
            </div>
          );
        })}
      </div>

      <h2>Previous Questions</h2>
      <div>
        <div className="row">
          <div className="col">Question</div>
          <div className="col">Answer</div>
          <div className="col">Deadline</div>
          <div className="col">Type</div>
          <div className="col">Points</div>
        </div>

        {questions.pastQuestions.map((question) => {
          const deadline = formatDateToEnglish(question.deadline);

          const type =
            question.answer_type ??
            answerSets.find(
              (set: any) => set && set.id === question.answer_set_id
            )?.name;

          return (
            <div className="row">
              <div className="col">{question.question}</div>
              <div className="col">{question.correct_answer}</div>
              <div className="col">{deadline}</div>
              <div className="col">{type}</div>
              <div className="col">{question.points}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const QuestionForm = ({ answerSets }: FormProps): JSX.Element => {
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

  const [resultState, setResultState] = useState<null | boolean>(null);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const {
      question,
      answerType,
      deadlineDay,
      deadlineMonth,
      deadlineYear,
      deadlineHour,
      deadlineMinute,
      points,
      answerAmount,
    } = formData;

    const result = await (
      await fetch("/admin/questions/add-question", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          answerType: isNaN(answerType as number) ? answerType : null,
          answerSetId: isNaN(answerType as number) ? null : +answerType,
          deadline: `${deadlineYear}-${deadlineMonth}-${deadlineDay} ${deadlineHour}:${deadlineMinute}:00`,
          points,
          answerAmount,
        }),
      })
    ).json();

    if (result.success) {
      setResultState(true);
    } else {
      setResultState(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {resultState === true && (
        <div className="alert alert-success">Question added successfully</div>
      )}
      {resultState === false && (
        <div className="alert alert-danger">
          Error adding question. Please try again.
        </div>
      )}
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
        <label htmlFor="answer-type" className="form-label">
          Answer Type
        </label>
        <select
          className="form-select"
          id="answer-type"
          aria-label="Select an answer type"
          name="answerType"
          onChange={handleFormChange}
          value={formData.answerType}
        >
          <option>Select an answer type</option>
          <optgroup label="From an answer set">
            {answerSets.map((set: AnswerSet) => (
              <option value={`${set.id}`}>{set.name}</option>
            ))}
          </optgroup>
          <optgroup label="Single Type">
            <option value="yesno">Yes/No</option>
            <option value="number">Number</option>
            <option value="score">Score</option>
            <option value="leaguetable">League Table</option>
          </optgroup>
        </select>
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
          <label htmlFor="answerAmount" className="col-sm-2 col-form-label">
            How many answers for this question?
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="answerAmount"
              name="answerAmount"
              onChange={handleFormChange}
              value={formData.answerAmount}
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
          Save Question
        </button>
      </div>
    </form>
  );
};
export default QuestionsAdmin;
