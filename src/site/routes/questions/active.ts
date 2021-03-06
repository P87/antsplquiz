import { Request, Response } from "express";
import * as mysql from "../../utils/mysql";
import logger from "../../utils/logger";

export default async (req: Request, res: Response) => {
  const date = mysql.convertDate(new Date());
  const questions = await mysql.query(
    "SELECT `q`.`id`, `q`.`question`, `q`.`answer_set_id`, `q`.`answer_type`, `q`.`answer_amount`, `q`.`deadline`, `q`.`points`, `a`.`answer`, " +
      "`a`.`answer_set_id`, `ans`.`answer` as `user_answer`, " +
      "pt.`type` as power_token " +
      "FROM `questions` `q` " +
      "LEFT JOIN `answers` `a` ON `q`.id = `a`.`question_id` AND `a`.`user_id` = ? AND `a`.`final_answer` = true " +
      "LEFT JOIN `answer_set_answers` `ans` ON `ans`.`id` = `a`.`answer_set_id` " +
      "LEFT JOIN `power_tokens` pt ON pt.`user_id` = a.`user_id` AND pt.`question_id` = q.`id`" +
      "WHERE `q`.`deadline` > ?",
    [req.session.userId!, date]
  );

  if (!questions) {
    logger.error("Failed to get active questions");
    return res.json({ success: false });
  }

  return res.json({
    questions: questions.reduce((qs, question) => {
      return {
        ...qs,
        [question.id]: question,
      };
    }, {}),
    answers: questions.reduce((as: { [key: string]: number[] }, question) => {
      return {
        ...as,
        [question.id]: [
          ...(as[question.id] ? as[question.id] : []),
          ...(question.answer_set_id || question.answer
            ? [
                {
                  set_id: question.answer_set_id,
                  name: question.user_answer,
                  answer: question.answer,
                },
              ]
            : []),
        ],
      };
    }, {}),
  });
};
