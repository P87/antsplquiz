import { Router } from "express";
import active from "./active";

const routes = Router();

routes.post("/active", active);

export default routes;
