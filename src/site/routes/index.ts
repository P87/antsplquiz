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
import cookiesPolicy from "./cookies-policy";
import privacyPolicy from "./privacy-policy";
import introduction from "./introduction";

const routes = Router();
const csrfProtection = csurf();

routes.get("/", csrfProtection as any, home);

routes.post("/", csrfProtection as any, login);

routes.get("/cookie-policy", cookiesPolicy);

routes.get("/privacy-policy", privacyPolicy);

routes.use("/register", register);

routes.use("/admin", isAdmin, admin);

routes.use("/questions", isLoggedIn, questions);

routes.get("/logout", isLoggedIn, logout);

routes.get("/introduction", isLoggedIn, introduction);

export default routes;
