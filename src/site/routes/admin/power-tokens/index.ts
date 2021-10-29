import { Router } from "express";
import home from "./home";
import getAll from "./get-all";
import generate from "./generate";

const routes = Router();

routes.get("/", home);

routes.post("/get-all", getAll);
routes.post("/generate", generate);

export default routes;
