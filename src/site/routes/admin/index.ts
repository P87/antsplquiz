import { Router } from "express";
import questions from "./questions";
import users from "./users";
import standings from "./standings";
import powerTokens from "./power-tokens";

const routes = Router();

routes.use("/questions", questions);
routes.use("/users", users);
routes.use("/standings", standings);
routes.use("/power-tokens", powerTokens);

export default routes;
