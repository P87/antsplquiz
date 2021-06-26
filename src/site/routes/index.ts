import { Router } from "express";
import register from "./register";
import admin from "./admin";
import csurf from "csurf";
import config from "../../config.json";
import crypto from "crypto";
import isAdmin from "../middleware/isAdmin";
import * as mysql from "../utils/mysql";
import { MySQLUser } from "../../types";

const routes = Router();
const csrfProtection = csurf();

routes.get("/", csrfProtection as any, (req, res) => {
  const successfulRegistration = req.query["register-success"];

  req.session.loggedIn
    ? res.render("home", { display_name: req.session.displayName })
    : res.render("login", {
        csrfToken: req.csrfToken(),
        ...(successfulRegistration
          ? {
              successfulRegistration: true,
            }
          : {}),
      });
});

routes.post("/", csrfProtection as any, async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.render("login", {
      errorMessage: "All fields are required",
      csrfToken: req.csrfToken(),
      ...req.body,
    });
  }

  try {
    const check = await mysql.query<MySQLUser>(
      "SELECT id, display_name, is_admin FROM users WHERE username = ? AND password = ? LIMIT 1",
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
        csrfToken: req.csrfToken(),
        ...req.body,
      });
    }

    if (check.length !== 1 || !check[0].id || !check[0].display_name) {
      return res.render("login", {
        errorMessage: "Username and/or password not recognised",
        csrfToken: req.csrfToken(),
        ...req.body,
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
    res.render("login", {
      errorMessage: "Something went wrong, please try again",
      csrfToken: req.csrfToken(),
      ...req.body,
    });
    req.session.loggedIn = false;
    req.session.userId = undefined;
    req.session.displayName = undefined;
    req.session.isAdmin = undefined;
  }
});

routes.use("/register", register);

routes.use("/admin", isAdmin, admin);

export default routes;
