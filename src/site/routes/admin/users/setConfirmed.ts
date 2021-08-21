import { Request, Response } from "express";
import * as mysql from "../../../utils/mysql";
import logger from "../../../utils/logger";

export default async (req: Request, res: Response) => {
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
};
