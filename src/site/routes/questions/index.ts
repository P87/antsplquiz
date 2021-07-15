import { Router } from "express";
import active from "./active";
import previous from "./previous";
import getQuestion from "./getQuestion";
import answer from "./answer";
import setAnswer from "./set-answer";

const routes = Router();

routes.post("/active", active);
routes.post("/previous", previous);
routes.post("/get/:questionId", getQuestion);
routes.get("/answer/:questionId", answer);
routes.post("/set-answer/:questionId", setAnswer);

export default routes;
