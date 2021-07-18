import { Request, Response } from "express";
import * as mysql from "../../utils/mysql";

export default async (req: Request, res: Response) => {
  const questionId = req.params.questionId;
  const { answer } = req.body;

  if (!answer) {
    return res.json({ success: false, message: "No answer supplied" });
  }

  const update = await mysql.query(
    "UPDATE `answers` SET `final_answer` = false WHERE `user_id` = ? AND `question_id` = ?",
    [req.session.userId!, questionId]
  );

  if (!update) {
    return res.json({
      success: false,
      message: "Something went wrong saving your answer, please try again",
    });
  }

  const insert = mysql.insertOne(
    "INSERT INTO `answers` SET answer = ?, question_id = ?, user_id = ?",
    [answer, questionId, req.session.userId!]
  );

  if (!insert) {
    res.json({
      success: false,
      message: "Error saving answer",
    });
  }

  return res.json({ success: true });
};
