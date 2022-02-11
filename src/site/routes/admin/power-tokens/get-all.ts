import { Request, Response } from "express";
import * as mysql from "../../../utils/mysql";

export default async (req: Request, res: Response) => {
  const tokens = await mysql.query(
    "SELECT pt.`id`, pt.`user_id`, pt.`date_applied`, pt.`type`, pt.`question_id`, pt.`points`, u.`username`, u.`display_name` " +
      "FROM `power_tokens` pt LEFT JOIN `users` u ON u.`id` = pt.`user_id`",
    []
  );

  if (!tokens) {
    return res.json({
      success: false,
      message: "Error getting current power tokens",
    });
  }

  return res.json({ success: true, tokens });
};
