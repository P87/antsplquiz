import { Router } from "express";
import home from "./home";
import questions from "./questions";
import users from "./users";

const routes = Router();

routes.get("/", home);

routes.use("/questions", questions);
routes.use("/users", users);

export default routes;
