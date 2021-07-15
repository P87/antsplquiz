import { Request, Response } from "express";
import * as mysql from "../../utils/mysql";

export default async (req: Request, res: Response) => {
  const questionId = req.params.questionId;
  const { answers } = req.body;

  if (!answers) {
    return res.json({ success: false });
  }

  // @TODO Do this better (not as multiple individual inserts)
  const question = await mysql.query("SELECT * FROM `questions` WHERE id = ?", [
    questionId,
  ]);

  if (!question) {
    return res.json({ success: false });
  }

  const update = await mysql.query(
    "UPDATE `answers` SET `final_answer` = false WHERE `user_id` = ? AND `question_id` = ?",
    [req.session.userId!, questionId]
  );

  if (!update) {
    return res.json({ success: false });
  }

  if (question[0].answer_set_id) {
    answers.forEach(async (answer: string) => {
      const insert = await mysql.insertOne(
        "INSERT INTO `answers` SET `answer_set_id` = ?, `question_id` = ?, `user_id` = ?, `final_answer` = true",
        [answer, questionId, req.session.userId!]
      );
      if (!insert) {
        return res.json({ success: false });
      }
    });
  } else {
    answers.forEach(async (answer: string) => {
      const insert = await mysql.insertOne(
        "INSERT INTO `answers` SET `answer` = ?, `question_id` = ?, `user_id` = ?, `final_answer` = true",
        [answer, questionId, req.session.userId!]
      );
      if (!insert) {
        return res.json({ success: false });
      }
    });
  }

  return res.json({ success: true });
};
