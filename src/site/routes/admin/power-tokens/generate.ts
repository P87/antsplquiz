import { Request, Response } from "express";
import * as mysql from "../../../utils/mysql";

export default async (req: Request, res: Response) => {
  const users = await mysql.query("SELECT * FROM `users`", []);

  if (!users) {
    return res.json({
      success: false,
      message: "Error getting user list",
    });
  }

  let query = "INSERT IGNORE INTO `power_tokens` (`user_id`, `type`) VALUES ";
  users.forEach((user) => {
    query += `(${+user.id}, 'safe'),(${+user.id}, 'double'),`;
  });

  const insert = await mysql.query(query.slice(0, -1), []);

  if (!insert) {
    return res.json({
      success: false,
      message: "Failed inserting tokens",
    });
  }

  const tokens = await mysql.query(
    "SELECT pt.`id`, pt.`user_id`, pt.`date_applied`, pt.`type`, pt.`question_id`, pt.`points`, u.`username`, u.`display_name` " +
      "FROM `power_tokens` pt LEFT JOIN `users` u ON u.`id` = pt.`user_id`",
    []
  );

  if (!tokens) {
    return res.json({
      success: false,
      message:
        "Inserted new tokens successfully but errored retrieving the newly inserted tokens",
    });
  }

  return res.json({ success: true, tokens });
};
