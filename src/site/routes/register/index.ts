import { Router } from "express";
import register from "./register";

const routes = Router();

routes.use("/", register);

export default routes;
