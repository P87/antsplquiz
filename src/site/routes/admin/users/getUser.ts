import { Request, Response } from "express";
import * as mysql from "../../../utils/mysql";
import logger from "../../../utils/logger";

export default async (req: Request, res: Response) => {
  try {
    const user = await mysql.query(
      "SELECT `confirmed`, `display_name`, `email`, `id`, `paid`, `is_admin`, `username` FROM `users` WHERE id = ?",
      [+req.params.userId]
    );
    if (!user) {
      logger.error(`Error getting user with id ${req.params.userId}`);
      return res.json({ success: false });
    }

    const questions = await mysql.query(
      "SELECT `q`.`id`, `q`.`question`, `q`.`answer_set_id`, `q`.`answer_type`, `q`.`answer_amount`, `q`.`deadline`, `q`.`points`, `a`.`answer`, `a`.`answer_set_id`, `ans`.`answer` as `user_answer`, `a`.`correct`, ap.`points` as `added_points` " +
        "FROM `questions` `q` LEFT JOIN `answers` `a` ON `q`.id = `a`.`question_id` AND `a`.`user_id` = ? AND `a`.`final_answer` = true " +
        "LEFT JOIN `answer_set_answers` `ans` ON `ans`.`id` = `a`.`answer_set_id` LEFT JOIN `added_points` ap ON ap.`question_id` = q.`id` AND ap.`user_id` = a.`user_id`",
      [req.params.userId]
    );
    if (!questions) {
      logger.error("Failed to get user's questions", {
        userId: req.params.userId,
      });
      return res.json({ success: false });
    }

    return res.json({
      success: true,
      user,
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
                    correct: question.correct,
                  },
                ]
              : []),
          ],
        };
      }, {}),
    });
  } catch (err) {
    logger.error("Error getting user", err);
    throw new Error("Error getting user");
  }
};
