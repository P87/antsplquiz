import { Request, Response } from "express";
import * as mysql from "../../utils/mysql";

export default async (req: Request, res: Response) => {
  try {
    const date = mysql.convertDate(new Date());
    const questions = await mysql.query(
      "SELECT * FROM `questions` WHERE `deadline` < ?",
      [date]
    );
    if (!questions) {
      throw new Error("Error getting active questions");
    }
    const answers = await mysql.query(
      "SELECT * FROM `answers` WHERE `question_id` = ? AND `user_id` = ? ORDER BY `date_added` DESC LIMIT 1",
      []
    );
    return res.json(questions);
  } catch (err) {
    console.error("Error getting active questions", err);
    res.json({ success: false });
  }
};
