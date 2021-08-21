import { Request, Response } from "express";
import * as mysql from "../../../utils/mysql";

export default async (req: Request, res: Response) => {
  const users = await mysql.query(
    "SELECT * FROM `users` WHERE confirmed = 1",
    []
  );

  if (!users) {
    return res.json({ success: false, message: "Error getting users list" });
  }

  const standings = await mysql.query(
    "SELECT `answers`.`user_id`, SUM(`points`) as total_points FROM `answers` LEFT JOIN questions ON `answers`.`question_id` = `questions`.`id` WHERE `correct` = 1 GROUP BY `answers`.`user_id` ORDER BY total_points DESC",
    []
  );

  if (!standings) {
    return res.json({ success: false, message: "Error getting standings" });
  }

  const table = standings.map((standing) => {
    const user = users.find((user) => user.id === standing.user_id);
    return {
      userId: standing.user_id,
      userDisplayName: user && user.display_name,
      points: standing.total_points,
    };
  });

  const insert = mysql.insertOne("INSERT INTO `standings` SET standings = ?", [
    JSON.stringify(table),
  ]);

  if (!insert) {
    return res.json({
      success: false,
      message:
        "There was an error saving new League standings. Please refresh and try again.",
    });
  }

  return res.json({ success: true, standings: table });
};
