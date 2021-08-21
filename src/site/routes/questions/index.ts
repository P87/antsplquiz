import { Router } from "express";
import active from "./active";
import previous from "./previous";
import getQuestion from "./get-question";
import answer from "./answer";
import setTeamsAnswer from "./set-teams-asnwer";
import playerSearch from "./player-search";
import setPlayersAnswer from "./set-players-answer";
import setManagersAnswer from "./set-managers-answer";
import getCorrectAnswers from "./get-correct-answers";
import getTextAnswer from "./set-text-answer";

const routes = Router();

routes.post("/active", active);
routes.post("/previous", previous);
routes.post("/get/:questionId", getQuestion);
routes.post("/get-correct-answers/:questionId", getCorrectAnswers);
routes.get("/answer/:questionId", answer);
routes.post("/set-teams-answer/:questionId", setTeamsAnswer);
routes.post("/player-search", playerSearch);
routes.post("/set-players-answer/:questionId", setPlayersAnswer);
routes.post("/set-managers-answer/:questionId", setManagersAnswer);
routes.post("/set-text-answer/:questionId", getTextAnswer);

export default routes;
