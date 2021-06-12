import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.render("register");
});

routes.post("/", (req, res) => {
  const { username, email, password, leagueCode } = req.body;
  console.log(req.body);

  if ([username, email, password, leagueCode].some((field) => !field)) {
    return res.render("register", {
      errorMessage: "All fields are required",
      ...req.body,
    });
  }
  return res.render("register");
});

export default routes;
