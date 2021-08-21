import { Request, Response } from "express";
import * as mysql from "../../../utils/mysql";
import logger from "../../../utils/logger";

export default async (req: Request, res: Response) => {
  try {
    const user = await mysql.query(
      "SELECT `confirmed`, `display_name`, `email`, `id`, `paid`, `is_admin`, `username` FROM `users` WHERE id = ?",
      [+req.params.userId]
    );
    if (!user) {
      logger.error(`Error getting user with id ${req.params.userId}`);
      return res.json({ success: false });
    }
    return res.json({ success: true, user });
  } catch (err) {
    logger.error("Error getting user", err);
    throw new Error("Error getting user");
  }
};
