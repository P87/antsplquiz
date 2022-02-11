import { Tabs } from "./questions";
import React from "react";

interface NavProps {
  onPreviousQuestionsClick: (e: React.SyntheticEvent) => Promise<void>;
  onActiveQuestionsClick: (e: React.SyntheticEvent) => void;
  onUnansweredQuestionsClick: (e: React.SyntheticEvent) => void;
  activeTab: Tabs;
  unansweredCount: number;
}

export default ({
  onPreviousQuestionsClick,
  onActiveQuestionsClick,
  onUnansweredQuestionsClick,
  activeTab,
  unansweredCount,
}: NavProps): JSX.Element => {
  return (
    <div className="row mt-4">
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <a
            className={
              activeTab === Tabs.UNANSWERED ? "nav-link active" : "nav-link"
            }
            href="/"
            onClick={onUnansweredQuestionsClick}
          >
            Unanswered
            {unansweredCount > 0 && (
              <span className="badge bg-danger ms-1 rounded-pill">
                {unansweredCount}
              </span>
            )}
          </a>
        </li>
        <li className="nav-item">
          <a
            className={
              activeTab === Tabs.ACTIVE ? "nav-link active" : "nav-link"
            }
            href="/"
            onClick={onActiveQuestionsClick}
          >
            Active
          </a>
        </li>
        <li className="nav-item">
          <a
            className={
              activeTab === Tabs.PREVIOUS ? "nav-link active" : "nav-link"
            }
            href="#"
            onClick={onPreviousQuestionsClick}
          >
            Previous
          </a>
        </li>
      </ul>
    </div>
  );
};
