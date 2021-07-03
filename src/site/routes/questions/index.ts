import { Router } from "express";
import active from "./active";
import previous from "./previous";

const routes = Router();

routes.post("/active", active);
routes.post("/previous", previous);

export default routes;
