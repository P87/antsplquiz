import { Request, Response } from "express";
import * as mysql from "../../utils/mysql";
import logger from "../../utils/logger";

export default async (req: Request, res: Response) => {
  try {
    const date = mysql.convertDate(new Date());
    const questions = await mysql.query(
      "SELECT `q`.`id`, `q`.`question`, `q`.`answer_set_id`, `q`.`answer_type`, `q`.`answer_amount`, `q`.`deadline`, `q`.`points`, `a`.`answer`, `a`.`answer_set_id`, `a`.`correct`, `ans`.`answer` as `user_answer`, `ap`.`points` as `added_points` FROM `questions` `q` LEFT JOIN `answers` `a` ON `q`.id = `a`.`question_id` AND `a`.`user_id` = ? AND `a`.`final_answer` = true LEFT JOIN `answer_set_answers` `ans` ON `ans`.`id` = `a`.`answer_set_id` LEFT JOIN `added_points` `ap` ON `q`.`id` = `ap`.`question_id` AND `ap`.`user_id` = ? WHERE `q`.`deadline` < ?",
      [req.session.userId!, req.session.userId!, date]
    );
    if (!questions) {
      throw new Error("Error getting previous questions");
    }

    const correctAnswers = await mysql.query(
      "SELECT * FROM `questions_correct_answers` `q` LEFT JOIN `answer_set_answers` `set_ans` ON `q`.`answer_set_answers_id` = `set_ans`.`id`",
      []
    );

    if (!correctAnswers) {
      logger.error("Error getting correct answers for previous questions");
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
                    correct: question.correct,
                  },
                ]
              : []),
          ],
        };
      }, {}),
      correctAnswers: correctAnswers.reduce(
        (cas: { [key: string]: any[] }, correctAnswer) => {
          const questionId = correctAnswer.question_id;
          return {
            ...cas,
            [questionId]: [
              ...(cas[questionId] ? cas[questionId] : []),
              {
                correctAnswer: correctAnswer.answer_set_answers_id
                  ? correctAnswer.answer
                  : correctAnswer.correct_answer,
              },
            ],
          };
        },
        {}
      ),
    });
  } catch (err) {
    logger.error("Error getting previous questions", { err });
    res.json({ success: false });
  }
};
