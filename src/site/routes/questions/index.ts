import { Router } from "express";
import active from "./active";
import previous from "./previous";
import getQuestion from "./get-question";
import answer from "./answer";
import SetTeamsAnswer from "./set-teams-asnwer";
import PlayerSearch from "./player-search";
import SetPlayersAnswer from "./set-players-answer";
import SetManagersAnswer from "./set-managers-answer";
import GetCorrectAnswers from "./get-correct-answers";
import SetTextAnswer from "./set-text-answer";

const routes = Router();

routes.post("/active", active);
routes.post("/previous", previous);
routes.post("/get/:questionId", getQuestion);
routes.post("/get-correct-answers/:questionId", GetCorrectAnswers);
routes.get("/answer/:questionId", answer);
routes.post("/set-teams-answer/:questionId", SetTeamsAnswer);
routes.post("/player-search", PlayerSearch);
routes.post("/set-players-answer/:questionId", SetPlayersAnswer);
routes.post("/set-managers-answer/:questionId", SetManagersAnswer);
routes.post("/set-text-answer/:questionId", SetTextAnswer);

export default routes;
