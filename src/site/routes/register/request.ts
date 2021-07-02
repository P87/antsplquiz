import * as mysql from "../../utils/mysql";
import { MySQLCount } from "../../../types";
import crypto from "crypto";
import config from "../../../config.json";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
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
      csrfToken: req.csrfToken(),
    });
  }

  // Check the user doesn't already exist:
  try {
    const existingCount = await mysql.query<MySQLCount>(
      "SELECT COUNT(*) as count FROM `users` WHERE `username` = ? OR `email` = ? OR `display_name` = ?",
      [username, email, display_name]
    );

    if (existingCount === false) {
      return res.render("register", {
        errorMessage:
          "There was an error processing your request, please try again.",
        ...req.body,
        csrfToken: req.csrfToken(),
      });
    }

    if (existingCount[0].count !== 0) {
      return res.render("register", {
        errorMessage:
          "Some/all user details already registered. If you have not already registered maybe your username or display name are already taken.",
        ...req.body,
        csrfToken: req.csrfToken(),
      });
    }
  } catch (err) {
    console.error("Error checking against existing user", err);
    return res.render("register", {
      errorMessage:
        "An error occurred processing your request. Please try again.",
      ...req.body,
      csrfToken: req.csrfToken(),
    });
  }

  // Insert the new user
  const insertResult = await mysql.insertOne(
    "INSERT INTO `users` SET `username` = ?, password = ?, email = ?, display_name = ?",
    [
      username,
      crypto
        .createHash("sha256")
        .update(`${config.passwords.salt}${password}${config.passwords.pepper}`)
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
      ...req.body,
      csrfToken: req.csrfToken(),
    });
  }
};
