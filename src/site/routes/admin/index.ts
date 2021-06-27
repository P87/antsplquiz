import { Router } from "express";
import home from "./home";
import questions from "./questions";

const routes = Router();

routes.get("/", home);

routes.use("/questions", questions);

export default routes;
