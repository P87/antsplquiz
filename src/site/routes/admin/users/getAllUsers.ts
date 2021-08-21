import { Request, Response } from "express";
import * as mysql from "../../../utils/mysql";
import logger from "../../../utils/logger";

export default async (req: Request, res: Response) => {
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
};
