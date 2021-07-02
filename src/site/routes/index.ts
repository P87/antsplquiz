import { Router } from "express";
import register from "./register";
import admin from "./admin";
import csurf from "csurf";
import isAdmin from "../middleware/isAdmin";
import isLoggedIn from "../middleware/loggedIn";
import logout from "./logout";
import home from "./home";
import login from "./login";
import questions from "./questions";

const routes = Router();
const csrfProtection = csurf();

routes.get("/", csrfProtection as any, home);

routes.post("/", csrfProtection as any, login);

routes.use("/register", register);

routes.use("/admin", isAdmin, admin);

routes.use("/questions", isLoggedIn, questions);

routes.get("/logout", isLoggedIn, logout);

export default routes;
