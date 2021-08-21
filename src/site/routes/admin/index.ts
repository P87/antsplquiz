import { Router } from "express";
import home from "./home";
import questions from "./questions";
import users from "./users";
import standings from "./standings";

const routes = Router();

routes.get("/", home);

routes.use("/questions", questions);
routes.use("/users", users);
routes.use("/standings", standings);

export default routes;
