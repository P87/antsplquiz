import React from "react";
import ReactDOM from "react-dom";
import QuestionsAdmin from "../components/admin/questions";
import Questions from "../components/home/questions";

const adminQuestionsContainer = document.getElementById("admin-questions");

if (adminQuestionsContainer) {
  renderQuestionsAdmin();
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

const questionsContainer = document.getElementById("questions-container");

if (questionsContainer) {
  renderActiveQuestions();
}

async function renderActiveQuestions() {
  ReactDOM.render(
    <Questions />,
    questionsContainer
  )
}
