import { Request, Response } from "express";
import { MySQLUser } from "../../types";
import config from "../utils/config";
import crypto from "crypto";
import * as mysql from "../utils/mysql";

export default async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.render("login", {
      errorMessage: "All fields are required",
      ...req.body,
      csrfToken: req.csrfToken(),
    });
  }

  try {
    const check = await mysql.query<MySQLUser>(
      "SELECT id, display_name, is_admin, confirmed FROM users WHERE username = ? AND password = ? LIMIT 1",
      [
        username,
        crypto
          .createHash("sha256")
          .update(
            `${config.passwords.salt}${password}${config.passwords.pepper}`
          )
          .digest("base64"),
      ]
    );

    if (!check) {
      return res.render("login", {
        errorMessage: "Error processing login. Please try again.",
        ...req.body,
        csrfToken: req.csrfToken(),
      });
    }

    if (check.length !== 1 || !check[0].id || !check[0].display_name) {
      return res.render("login", {
        errorMessage: "Username and/or password not recognised",
        ...req.body,
        csrfToken: req.csrfToken(),
      });
    } else if (!check[0].confirmed) {
      return res.render("login", {
        errorMessage:
          "Still waiting for Ant to confirm your account before you can login",
        ...req.body,
        csrfToken: req.csrfToken(),
      });
    } else {
      const user = check[0];
      req.session.loggedIn = true;
      req.session.userId = user.id;
      req.session.displayName = user.display_name;
      req.session.isAdmin = user.is_admin;
      return res.redirect("/");
    }
  } catch (err) {
    return res.render("login", {
      errorMessage: "Something went wrong, please try again",
      ...req.body,
      csrfToken: req.csrfToken(),
    });
    req.session.loggedIn = false;
    req.session.userId = undefined;
    req.session.displayName = undefined;
    req.session.isAdmin = undefined;
  }
};
