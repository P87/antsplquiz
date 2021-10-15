import React, { useState } from "react";

interface Props {
  questionId: number;
}

const BonusPointsForm = ({ questionId }: Props): JSX.Element => {
  const [points, setPoints] = useState("");
  const [resultState, setResultState] = useState<null | boolean>();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPoints(e.target.value);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    const userId = window.location.pathname.split("/")[3];
    e.preventDefault();

    const result = await (
      await fetch(`/admin/questions/add-bonus-points/${questionId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          points,
          userId,
        }),
      })
    ).json();

    if (result.success) {
      setResultState(true);
    } else {
      setResultState(false);
    }
    return true;
  };

  return (
    <>
      {resultState && (
        <div className="alert alert-success">
          {points} bonus successfully added
        </div>
      )}
      {resultState === false && (
        <div className="alert alert-danger">
          There was an error adding the bonus points
        </div>
      )}
      {!resultState && (
        <div className="form-floating">
          <input
            type="number"
            className="form-control"
            id="number"
            name="number"
            placeholder="Add Bonus Points"
            value={points}
            onChange={handleFormChange}
          />
          <label htmlFor="number" className="form-label">
            Add bonus points
          </label>
        </div>
      )}
      {points && (
        <div className="mt-4">
          <button
            className="btn btn-success"
            type="button"
            onClick={handleSubmit}
          >
            Add Bonus Points
          </button>
        </div>
      )}
    </>
  );
};

export default BonusPointsForm;
