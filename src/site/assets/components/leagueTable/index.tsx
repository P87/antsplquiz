import React, { useEffect, useState } from "react";
import { formatDateToEnglish } from "../utils";

interface LeagueTable {
  userDisplayName: string;
  points: number;
}

const LeagueTable = (): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [leagueTable, setLeagueTable] = useState<LeagueTable[]>();
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    fetch(`/leader-board/get-table`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (!result.success) {
          setErrorMessage(result.message);
          return;
        } else {
          setLeagueTable(result.standings);
          setLastUpdated(result.dateAdded);
        }
      })
      .catch(() => {
        setErrorMessage("There was an error, please refresh and try again");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if ((isLoading || !leagueTable) && !errorMessage) {
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

  if (!leagueTable) {
    return <></>;
  }

  return (
    <div>
      {errorMessage && (
        <div className="alert alert-danger text-center" role="alert">
          {errorMessage}
        </div>
      )}

      {leagueTable.length === 0 && (
        <div className="alert alert-warning text-center mt-5" role="alert">
          No league tables found
        </div>
      )}

      {lastUpdated && (
        <div className="col-12 p-2">
          Last Updated: {formatDateToEnglish(lastUpdated)}
        </div>
      )}

      {Object.keys(leagueTable).length !== 0 && (
        <>
          <div className="row border border-dark p-2 mt-4">
            <div className="col-1">Pos.</div>
            <div className="col-9">Name</div>
            <div className="col-2">Points</div>
          </div>
          {leagueTable.map((row, i) => (
            <div className="row border border-dark border-top-0 p-2">
              <div className="col-1">{i + 1}</div>
              <div className="col-9">{row.userDisplayName}</div>
              <div className="col-2">{row.points}</div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default LeagueTable;
