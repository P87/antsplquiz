import { Request, Response } from "express";
import * as mysql from "../../utils/mysql";
import { ALL_MANAGERS_TYPE, ALL_TEAMS_TYPE } from "../../constants";
import { MySQLSetAnswer } from "../../../types";

export default async (req: Request, res: Response) => {
  let setAnswers: MySQLSetAnswer[] | false = false;

  const question = await mysql.query(
    "SELECT `q`.`question`, `q`.`answer_set_id`, `q`.`answer_type`, `q`.`answer_amount`, `q`.`points`, `ca`.`answer_set_answers_id`, `ca`.`correct_answer` " +
      "FROM `questions` `q` LEFT JOIN `questions_correct_answers` `ca` ON `question_id` = `id` WHERE `id` = ?",
    [+req.params.questionId]
  );

  if (!question || !question.length) {
    return res.json({ success: false });
  }

  if (
    question[0].answer_set_id === ALL_TEAMS_TYPE ||
    question[0].answer_set_id === ALL_MANAGERS_TYPE
  ) {
    setAnswers = await mysql.query<MySQLSetAnswer>(
      "SELECT * FROM `answer_set_answers` WHERE `set_id` = ?",
      [question[0].answer_set_id]
    );
    if (!setAnswers) {
      return res.json({ success: false });
    }
  }

  return res.json({
    success: true,
    question: question,
    setAnswers: setAnswers ? setAnswers : [],
  });
};
