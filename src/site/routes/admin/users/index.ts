import { Router } from "express";
import home from "./home";
import getAllUsers from "./getAllUsers";
import setPaid from "./setPaid";
import setConfirmed from "./setConfirmed";
import user from "./user";
import getUser from "./getUser";

const routes = Router();

routes.get("/", home);
routes.get("/:userId", user);

routes.post("/get-all", getAllUsers);
routes.post("/set-paid/:userId", setPaid);
routes.post("/set-confirmed/:userId", setConfirmed);
routes.post("/get/:userId", getUser);

export default routes;
