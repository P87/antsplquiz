import React from "react";
import { Tabs } from "./questions";

interface PreviousNavProps {
  activeTab: Tabs;
  onTabClick: (tab: Tabs, e: React.SyntheticEvent) => void;
}

export default ({ activeTab, onTabClick }: PreviousNavProps): JSX.Element => {
  return (
    <ul className="nav nav-tabs mb-3">
      <li className="nav-item">
        <a
          className={
            activeTab === Tabs.UNSETTLED ? "nav-link active" : "nav-link"
          }
          href="#"
          onClick={onTabClick.bind(this, Tabs.UNSETTLED)}
        >
          Unsettled
        </a>
      </li>
      <li className="nav-item">
        <a
          className={
            activeTab === Tabs.SETTLED ? "nav-link active" : "nav-link"
          }
          href="#"
          onClick={onTabClick.bind(this, Tabs.SETTLED)}
        >
          Settled
        </a>
      </li>
    </ul>
  );
};
