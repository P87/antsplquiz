import { Router } from "express";
import questions from "./questions";
import users from "./users";
import standings from "./standings";

const routes = Router();

routes.use("/questions", questions);
routes.use("/users", users);
routes.use("/standings", standings);

export default routes;
