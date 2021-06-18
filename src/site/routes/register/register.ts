import { Router } from "express";
import MySQL from "../../utils/mysql";
import config from "../../../config.json";
import crypto from "crypto";
import csurf from "csurf";

const routes = Router();
const csrfProtection = csurf();

routes.get("/", csrfProtection as any, (req, res) => {
  res.render("register", { csrfToken: req.csrfToken() });
});

routes.post("/", csrfProtection as any, async (req, res) => {
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
      csrfToken: req.csrfToken(),
      ...req.body,
    });
  }

  const connection = new MySQL(config.mysql);

  // Check the user doesn't already exist:
  try {
    const existingCount = await connection.select(
      "SELECT COUNT(*) as count FROM `users` WHERE `username` = ? OR `email` = ? OR `display_name` = ?",
      [username, email, display_name]
    );

    if (existingCount[0].count !== 0) {
      connection.end();
      return res.render("register", {
        errorMessage:
          "Some/all user details already registered. If you have not already registered maybe your username or display name are already taken.",
        csrfToken: req.csrfToken(),
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
          csrfToken: req.csrfToken(),
          ...req.body,
        });
      }
    );
  }

  // Insert the new user
  try {
    const insertResult = await connection.insertOne(
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
      ]
    );

    if (insertResult) {
      return res.redirect("/?register-success=1");
    } else {
      return res.render("register", {
        errorMessage:
          "Something went wrong creating your account. Please try again.",
        csrfToken: req.csrfToken(),
        ...req.body,
      });
    }
  } catch (err) {
    return handleError(err, "Error inserting new user", connection, () => {
      return res.render("register", {
        errorMessage:
          "Something went wrong creating your account. Please try again.",
        csrfToken: req.csrfToken(),
        ...req.body,
      });
    });
  }
});

function handleError(
  error: Error,
  message: string,
  mysqlConnection: MySQL,
  callback: () => void
) {
  mysqlConnection.end();

  console.error(message, error);
  return callback();
}

export default routes;
