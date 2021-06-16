import { Router } from "express";
import mysql from "mysql";
import config from "../../../config.json";
import crypto from "crypto";

const routes = Router();

routes.get("/", (req, res) => {
  res.render("register");
});

routes.post("/", async (req, res, next) => {
  const {
    username,
    display_name,
    email,
    password,
    confirm_password,
    leagueCode,
  } = req.body;

  if (
    [
      username,
      display_name,
      email,
      password,
      confirm_password,
      leagueCode,
    ].some((field) => !field)
  ) {
    return res.render("register", {
      errorMessage: "All fields are required",
      ...req.body,
    });
  }

  const connection = mysql.createConnection(config.mysql);
  console.log(`[MySQL] Connecting to ${config.mysql.host}`);
  connection.connect(function (err) {
    if (err) {
      console.error("[MySQL] Error connecting: ", err.stack);
      return next(err);
    }

    console.log("[MySQL] Connected as id ", connection.threadId);
  });

  // Check the user doesn't already exist:
  try {
    const existingCount = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT COUNT(*) as count FROM `users` WHERE `username` = ? OR `email` = ? OR `display_name` = ?",
        [username, email, display_name],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results[0].count);
        }
      );
    });

    if (existingCount !== 0) {
      return res.render("register", {
        errorMessage:
          "Some/all user details already registered. If you have not already registered maybe your username or display name are already taken.",
        ...req.body,
      });
    }
  } catch (err) {
    return handleError(
      err,
      "Error checking against existing user",
      connection,
      () => {
        return res.render("register", {
          errorMessage:
            "An error occurred processing your request. Please try again.",
          ...req.body,
        });
      }
    );
  }

  // Insert the new user
  try {
    const insertCount = await new Promise<mysql.MysqlError | number>(
      (resolve, reject) => {
        connection.query(
          "INSERT INTO `users` SET `username` = ?, password = ?, email = ?, display_name = ?",
          [
            username,
            crypto
              .createHash("sha256")
              .update(
                `${config.passwords.salt}${password}${config.passwords.pepper}`
              )
              .digest("base64"),
            email,
            display_name,
          ],
          (err, result) => {
            if (err) {
              return reject(err);
            }
            console.log(`[MySQL] User ${display_name} inserted`);
            resolve(result.affectedRows);
          }
        );
      }
    );

    if (insertCount === 1) {
      return res.redirect("/?register-success=1");
    }
  } catch (err) {
    return handleError(
      err,
      "[MySQL] Error inserting new user",
      connection,
      () => {
        return res.render("register", {
          errorMessage:
            "Something went wrong creating your account. Please try again.",
          ...req.body,
        });
      }
    );
  }

  console.log("[MySQL] Closing connection " + connection.threadId);
  connection.end();

  return res.render("register");
});

function handleError(
  error: Error,
  message: string,
  mysqlConnection: mysql.Connection,
  callback: () => void
) {
  console.log("[MySQL] Closing connection " + mysqlConnection.threadId);
  mysqlConnection.end();

  console.error(message, error);
  return callback();
}

export default routes;
