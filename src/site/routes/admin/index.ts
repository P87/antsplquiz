import { Router } from "express";
import home from "./home";
import questions from "./questions";
import requireAuth from "../../middleware/loggedIn";

const routes = Router();

routes.get("/", requireAuth, home);

routes.use("/questions", requireAuth, questions);

export default routes;
