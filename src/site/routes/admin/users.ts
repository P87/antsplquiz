import { Router, Request, Response } from "express";
import * as mysql from "../../utils/mysql";
import logger from "../../utils/logger";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.render("admin/users", {
    section: "admin",
    isAdmin: req.session.isAdmin,
  });
});

routes.post("/get", async (req: Request, res: Response) => {
  try {
    const users = await mysql.query(
      "SELECT `confirmed`, `display_name`, `email`, `id`, `paid`, `is_admin`, `username` FROM `users`",
      []
    );
    if (!users) {
      logger.error("Error getting list of users");
      return res.json({ success: false });
    }
    return res.json({ success: true, users });
  } catch (err) {
    logger.error("Error getting questions", err);
    throw new Error("Error getting questions");
  }
});

routes.post("/set-paid/:userId", async (req: Request, res: Response) => {
  try {
    if (
      !(await mysql.query("UPDATE `users` SET `paid` = true WHERE `id` = ?", [
        +req.params.userId,
      ]))
    ) {
      logger.error("Error setting user as paid");
      return res.json({ success: false });
    }
    const users = await mysql.query(
      "SELECT `confirmed`, `display_name`, `email`, `id`, `paid`, `is_admin`, `username` FROM `users`",
      []
    );
    return res.json({ success: true, users });
  } catch (err) {
    logger.error("Error setting user as paid", err);
    throw new Error("Error setting user as paid");
  }
});

routes.post("/set-confirmed/:userId", async (req: Request, res: Response) => {
  try {
    if (
      !(await mysql.query(
        "UPDATE `users` SET `confirmed` = true WHERE `id` = ?",
        [+req.params.userId]
      ))
    ) {
      logger.error("Error setting user as confirmed");
      return res.json({ success: false });
    }
    const users = await mysql.query(
      "SELECT `confirmed`, `display_name`, `email`, `id`, `paid`, `is_admin`, `username` FROM `users`",
      []
    );
    return res.json({ success: true, users });
  } catch (err) {
    logger.error("Error setting user as confirmed", err);
    throw new Error("Error setting user as confirmed");
  }
});

export default routes;
