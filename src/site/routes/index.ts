import { Router } from "express";
import register from "./register";

const routes = Router();

routes.get("/", (req, res) => {
  if (!req.session.views) {
    req.session.views = 1;
  } else {
    req.session.views++;
  }
  const loggedin = false;
  loggedin ? res.render("home") : res.render("login");
});

routes.use("/register", register);

export default routes;
