import { Request, Response } from "express";
import * as mysql from "../../../utils/mysql";
import { Dictionary } from "../../../../types";

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

  const addedPoints = await mysql.query(
    "SELECT `user_id`, SUM(`points`) as points FROM `added_points` GROUP BY `user_id`",
    []
  );

  if (!addedPoints) {
    return res.json({ success: false, message: "Error getting added points" });
  }

  const addedPointsMap: Dictionary<number> = addedPoints.reduce((acc, ap) => {
    return {
      ...acc,
      [ap.user_id]: +ap.points,
    };
  }, {});

  const table = standings
    .map((standing) => {
      const userId = standing.user_id;
      const user = users.find((user) => user.id === userId);
      const bonusPoints = addedPointsMap[userId] ? addedPointsMap[userId] : 0;
      return {
        userId,
        userDisplayName: user && user.display_name,
        points: parseInt(standing.total_points) + bonusPoints,
      };
    })
    .sort((first, second) => second.points - first.points);

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
