import { Router } from "express";
import home from "./home";
import getTable from "./get-table";

const routes = Router();

routes.get("/", home);

routes.post("/get-table", getTable);

export default routes;
