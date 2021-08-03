import { Request, Response } from "express";
import * as mysql from "../../utils/mysql";
import logger from "../../utils/logger";

export default async (req: Request, res: Response) => {
  try {
    const question = await mysql.query(
      "SELECT `q`.`question`, `q`.`answer_set_id`, `q`.`answer_type`, `q`.`answer_amount`, `q`.`points`, `ca`.`answer_set_answers_id`, `ca`.`correct_answer` FROM `questions` `q` LEFT JOIN `questions_correct_answers` `ca` ON `question_id` = `id` WHERE `id` = ?",
      [+req.params.questionId]
    );

    if (!question || !question.length) {
      return res.json({ success: false });
    }

    return res.json({
      success: true,
      question: question,
    });
  } catch (err) {
    logger.error("Error getting active questions", { err });
    res.json({ success: false });
  }
};
