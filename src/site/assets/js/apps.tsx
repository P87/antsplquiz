import React from "react";
import ReactDOM from "react-dom";
import QuestionsAdmin from "../components/admin/questions";
import Questions from "../components/home/questions";
import AnswerQuestion from "../components/questions/answer";
import EditQuestion from "../components/admin/editQuestion";
import SetCorrectAnswer from "../components/admin/setCorrectAnswer";
import UsersAdmin from "../components/admin/users";

const adminQuestionsContainer = document.getElementById("admin-questions");
const questionsContainer = document.getElementById("questions-container");
const answerQuestionContainer = document.getElementById(
  "answer-question-container"
);
const adminEditQuestionContainer = document.getElementById(
  "admin-edit-question"
);
const adminSetCorrectAnswerContainer = document.getElementById(
  "admin-set-correct-answer"
);
const adminUsersContainer = document.getElementById("admin-users");

if (adminQuestionsContainer) {
  renderQuestionsAdmin();
}

if (adminEditQuestionContainer) {
  ReactDOM.render(<EditQuestion />, adminEditQuestionContainer);
}

if (questionsContainer) {
  ReactDOM.render(<Questions />, questionsContainer);
}

if (answerQuestionContainer) {
  ReactDOM.render(<AnswerQuestion />, answerQuestionContainer);
}

if (adminSetCorrectAnswerContainer) {
  ReactDOM.render(<SetCorrectAnswer />, adminSetCorrectAnswerContainer);
}

if (adminUsersContainer) {
  ReactDOM.render(<UsersAdmin />, adminUsersContainer);
}

async function renderQuestionsAdmin() {
  const answerSets = await (await fetch("/admin/questions/answer-sets")).json();
  const questions = await (
    await fetch("/admin/questions/get-questions")
  ).json();

  ReactDOM.render(
    <QuestionsAdmin answerSets={answerSets} questions={questions} />,
    adminQuestionsContainer
  );
}
