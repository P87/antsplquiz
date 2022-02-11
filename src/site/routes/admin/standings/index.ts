import { Router } from "express";
import home from "./home";
import generateLeagueTable from "./generate-league-table";
import getLeagueTable from "./get-league-table";

const routes = Router();

routes.get("/", home);

routes.post("/generate-league-table", generateLeagueTable);
routes.post("/get-league-table", getLeagueTable);

export default routes;
