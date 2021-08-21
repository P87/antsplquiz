import { Router } from "express";
import home from "./home";
import generateLeageTable from "./generateLeageTable";
import getLeagueTable from "./getLeagueTable";

const routes = Router();

routes.get("/", home);

routes.post("/generate-league-table", generateLeageTable);
routes.post("/get-league-table", getLeagueTable);

export default routes;
