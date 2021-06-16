import { Router } from "express";
import register from "./register";

const routes = Router();

routes.get("/", (req, res) => {
  if (!req.session.views) {
    req.session.views = 1;
  } else {
    req.session.views++;
  }
  const successfulRegistration = req.query["register-success"];

  const loggedin = false;
  loggedin
    ? res.render("home")
    : res.render("login", {
        ...(successfulRegistration
          ? {
              successfulRegistration: true,
            }
          : {}),
      });
});

routes.use("/register", register);

export default routes;
