import { Request, Response } from "express";
import * as mysql from "../../utils/mysql";

export default async (req: Request, res: Response) => {
  const questionId = req.params.questionId;
  const { answer } = req.body;

  if (!answer) {
    return res.json({ success: false, message: "No answer supplied" });
  }

  const question = await mysql.query(
    "SELECT `deadline` FROM `questions` WHERE `id` = ?",
    [+questionId]
  );

  if (!question) {
    return res.json({
      success: false,
      message: "There was an error, please try again",
    });
  }

  if (new Date(question[0].deadline) < new Date()) {
    return res.json({
      success: false,
      message: "The deadline for this question has passed.",
    });
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

  // @TODO Do this better
  answer.forEach(async (answer: string) => {
    const insert = await mysql.insertOne(
      "INSERT INTO `answers` SET `answer_set_id` = ?, `question_id` = ?, `user_id` = ?",
      [answer, questionId, req.session.userId!]
    );
    if (!insert) {
      return res.json({
        success: false,
        message: "Error saving answer",
      });
    }
  });

  return res.json({ success: true });
};
