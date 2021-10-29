import React from "react";

const Loading = (): JSX.Element => (
  <div className="d-flex align-items-center pt-5 pb-5">
    <strong>Loading...</strong>
    <div
      className="spinner-border ms-auto text-warning"
      role="status"
      aria-hidden="true"
    ></div>
  </div>
);

export default Loading;
