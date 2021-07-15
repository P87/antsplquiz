import React from "react";
import ReactDOM from "react-dom";
import QuestionsAdmin from "../components/admin/questions";
import Questions from "../components/home/questions";
import AnswerQuestion from "../components/questions/answer";

const adminQuestionsContainer = document.getElementById("admin-questions");
const questionsContainer = document.getElementById("questions-container");
const answerQuestionContainer = document.getElementById(
  "answer-question-container"
);

if (adminQuestionsContainer) {
  renderQuestionsAdmin();
}

if (questionsContainer) {
  ReactDOM.render(<Questions />, questionsContainer);
}

if (answerQuestionContainer) {
  ReactDOM.render(<AnswerQuestion />, answerQuestionContainer);
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
