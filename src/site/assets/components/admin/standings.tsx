import React, { useEffect, useState } from "react";
import Loading from "../loading";

interface LeagueTable {
  userDisplayName: string;
  points: number;
}

const StandingsAdmin = (): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [leagueTable, setLeagueTable] = useState<LeagueTable[]>();
  const [lastUpdated, setLastUpdated] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch(`/admin/standings/get-league-table`, {
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

  const onGenerateClicked = (e: React.SyntheticEvent) => {
    setIsLoading(true);
    e.preventDefault();
    fetch(`/admin/standings/generate-league-table`, {
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
          setSuccess(true);
        }
      })
      .catch(() => {
        setErrorMessage("There was an error, please refresh and try again");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if ((isLoading || !leagueTable) && !errorMessage) {
    return <Loading />;
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

      {success && (
        <div className="alert alert-success text-center mt-4" role="alert">
          League Table Generated.
        </div>
      )}
      {leagueTable.length === 0 && (
        <div className="alert alert-warning text-center mt-5" role="alert">
          No league tables found
        </div>
      )}

      {!success && (
        <button className="btn btn-primary mt-5" onClick={onGenerateClicked}>
          Generate League Table
        </button>
      )}

      {lastUpdated && (
        <div className="col-12 p-2">Last Updated: {lastUpdated}</div>
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

export default StandingsAdmin;
