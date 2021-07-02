import { Router } from "express";
import csurf from "csurf";
import landing from "./landing";
import request from "./request";

const routes = Router();
const csrfProtection = csurf();

routes.get("/", csrfProtection as any, landing);

routes.post("/", csrfProtection as any, request);

export default routes;
