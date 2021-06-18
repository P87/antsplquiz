import { Router } from "express";
import register from "./register";
import csurf from "csurf";
import config from "../../config.json";
import MySQL from "../utils/mysql";
import crypto from "crypto";

const routes = Router();
const csrfProtection = csurf();

routes.get("/", csrfProtection as any, (req, res) => {
  const successfulRegistration = req.query["register-success"];

  req.session.loggedIn
    ? res.render("home", { display_name: req.session.display_name })
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
    res.render("login", {
      errorMessage: "All fields are required",
      csrfToken: req.csrfToken(),
      ...req.body,
    });
  }

  try {
    const connection = new MySQL(config.mysql);
    const check = await connection.select(
      "SELECT id, display_name FROM users WHERE username = ? AND password = ? LIMIT 1",
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

    if (!check.length || !check[0].id || !check[0].display_name) {
      return res.render("login", {
        errorMessage: "Username and/or password not recognised",
        csrfToken: req.csrfToken(),
      });
    } else {
      const user = check[0];
      req.session.loggedIn = true;
      req.session.user_id = user.id;
      req.session.display_name = user.display_name;
      res.redirect("/");
    }

    res.render("login", {
      csrfToken: req.csrfToken(),
    });
  } catch (err) {
    res.render("login", {
      errorMessage: "Something went wrong, please try again",
      csrfToken: req.csrfToken(),
      ...req.body,
    });
    req.session.loggedIn = false;
    req.session.user_id = undefined;
    req.session.display_name = undefined;
  }
});

routes.use("/register", register);

export default routes;
