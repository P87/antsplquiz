import { Request, Response } from "express";
import * as mysql from "../../utils/mysql";
import { MySQLAnswer, MySQLSetAnswer, QuestionAnswerSet } from "../../../types";
import { ALL_PLAYERS_TYPE } from "../../constants";

export default async (req: Request, res: Response) => {
  try {
    let setAnswers: any = null;

    const question = await mysql.query<QuestionAnswerSet>(
      "SELECT `q`.`id`, `q`.`question`, `q`.`answer_type`, `q`.`answer_set_id`, `q`.`deadline`, `q`.`points`, `a`.`name`, `q`.`answer_amount` FROM `questions` as `q` LEFT JOIN `answer_sets` AS `a` ON `q`.`answer_set_id` = `a`.`id` WHERE `q`.`id` = ?",
      [+req.params.questionId]
    );

    if (!question || !question.length) {
      return res.json({ success: false });
    }

    const answers = await mysql.query<MySQLAnswer>(
      "SELECT * FROM `answers` WHERE `question_id` = ? AND user_id = ? AND `final_answer` = true",
      [+question[0].id, req.session.userId!]
    );

    if (!answers) {
      return res.json({ success: false });
    }

    if (
      question[0].answer_set_id &&
      question[0].answer_set_id !== ALL_PLAYERS_TYPE
    ) {
      setAnswers = await mysql.query<MySQLSetAnswer>(
        "SELECT * FROM `answer_set_answers` WHERE `set_id` = ?",
        [question[0].answer_set_id]
      );
      if (!setAnswers || !setAnswers.length) {
        return res.json({ success: false });
      }
    } else if (
      question[0].answer_set_id &&
      question[0].answer_set_id === ALL_PLAYERS_TYPE &&
      answers.length
    ) {
      const inString = answers.map((answer) => answer.answer_set_id);
      setAnswers = await mysql.query<MySQLSetAnswer>(
        "SELECT * FROM `answer_set_answers` WHERE `id` IN  (?)",
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        [inString]
      );
    }

    return res.json({
      success: true,
      question: question[0],
      answers: answers,
      setAnswers,
    });
  } catch (err) {
    console.error("Error getting active questions", err);
    res.json({ success: false });
  }
};
