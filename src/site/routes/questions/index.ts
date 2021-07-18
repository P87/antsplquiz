import { Router } from "express";
import active from "./active";
import previous from "./previous";
import getQuestion from "./getQuestion";
import answer from "./answer";
import setCorrectScoreAnswer from "./set-correct-score-answer";
import setYesNopAnswer from "./set-yes-no-answer";
import setNumberAnswer from "./set-number-answer";
import SetTeamsAnswer from "./set-teams-asnwer";

const routes = Router();

routes.post("/active", active);
routes.post("/previous", previous);
routes.post("/get/:questionId", getQuestion);
routes.get("/answer/:questionId", answer);
routes.post("/set-correct-score-answer/:questionId", setCorrectScoreAnswer);
routes.post("/set-yes-no-answer/:questionId", setYesNopAnswer);
routes.post("/set-number-answer/:questionId", setNumberAnswer);
routes.post("/set-teams-answer/:questionId", SetTeamsAnswer);

export default routes;
