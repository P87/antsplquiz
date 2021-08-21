import React, { useEffect, useState } from "react";
import { MySQLUser } from "../../../../types";

const UsersAdmin = (): JSX.Element => {
  const [users, setUsers] = useState<MySQLUser[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/admin/users/get-all`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (!result.success) {
          setErrorMessage("There was an error, please refresh and try again.");
          return;
        } else {
          setUsers(result.users);
        }
      })
      .catch(() => {
        setErrorMessage("There was an error, please refresh and try again");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onSetPaidClicked = (userId: number, e: React.SyntheticEvent) => {
    e.preventDefault();
    fetch(`/admin/users/set-paid/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (!result.success) {
          setErrorMessage("There was an error, please refresh and try again.");
          return;
        } else {
          setUsers(result.users);
        }
      })
      .catch(() => {
        setErrorMessage("There was an error, please refresh and try again");
      });
  };

  const onSetConfirmedClicked = (userId: number, e: React.SyntheticEvent) => {
    e.preventDefault();
    fetch(`/admin/users/set-confirmed/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (!result.success) {
          setErrorMessage("There was an error, please refresh and try again.");
          return;
        } else {
          setUsers(result.users);
        }
      })
      .catch(() => {
        setErrorMessage("There was an error, please refresh and try again");
      });
  };

  if (isLoading) {
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

  return (
    <div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <div className="row bg-secondary fw-bold p-1 text-white">
        <div className="col-3">Display Name (Username)</div>
        <div className="col-3">Email</div>
        <div className="col text-center">Confirmed</div>
        <div className="col text-center">Paid</div>
        <div className="col text-center">Is Admin</div>
        <div className="col text-center">Action</div>
      </div>
      {users.map((user) => (
        <div className="row p-1 border-start border-end border-dark border-bottom">
          <div className="col-3">
            <a href={`/admin/users/${user.id}`}>
              {user.display_name} ({user.username})
            </a>
          </div>
          <div className="col-3">{user.email}</div>
          <div className="col text-center">{user.confirmed ? "Yes" : "No"}</div>
          <div className="col text-center">{user.paid ? "Yes" : "No"}</div>
          <div className="col text-center">{user.is_admin ? "Yes" : "No"}</div>
          <div className="col text-center">
            {!user.paid && (
              <button
                className="btn btn-sm btn-primary mb-1"
                onClick={onSetPaidClicked.bind(this, user.id)}
              >
                Set Paid
              </button>
            )}
            {!user.confirmed && (
              <button
                className="btn btn-sm btn-secondary"
                onClick={onSetConfirmedClicked.bind(this, user.id)}
              >
                Set Confirmed
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersAdmin;
