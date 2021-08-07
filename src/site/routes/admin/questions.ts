import { Request, Response, Router } from "express";
import * as mysql from "../../utils/mysql";
import logger from "../../utils/logger";

const routes = Router();

routes.get("/", (req, res) => {
  res.render("admin/questions", {
    section: "admin",
    isAdmin: req.session.isAdmin,
  });
});

routes.get("/edit/:questionId", (req: Request, res: Response) => {
  res.render("admin/editQuestion", {
    section: "admin",
    isAdmin: req.session.isAdmin,
  });
});

routes.get("/set-correct-answer/:questionId", (req: Request, res: Response) => {
  res.render("admin/setCorrectAnswer", {
    section: "admin",
    isAdmin: req.session.isAdmin,
  });
});

routes.post("/edit/:questionId", async (req: Request, res: Response) => {
  const { question, deadline, points } = req.body;
  try {
    const update = await mysql.query(
      "UPDATE`questions` SET `question` = ?, `deadline` = ?, `points` = ? WHERE `id` = ? LIMIT 1",
      [question, deadline, points, req.params.questionId]
    );

    if (!update) {
      return res.json({ success: false });
    }

    res.json({ success: true });
  } catch (err) {
    logger.error("Error updating question", err);
    res.json({ success: false });
  }
});

routes.get("/answer-sets", async (req: Request, res: Response) => {
  try {
    const sets = await mysql.query("SELECT * FROM `answer_sets`", []);
    if (!sets) {
      throw new Error("Answer sets query failed");
    }
    res.json(sets);
  } catch (err) {
    logger.error("Error getting asnwer sets", err);
    throw new Error("Error getting answer sets");
  }
});

routes.get("/get-questions", async (req: Request, res: Response) => {
  const date = mysql.convertDate(new Date());

  try {
    // @todo some pagination
    const activeQuestions = await mysql.query(
      `SELECT * FROM \`questions\` WHERE \`deadline\` > "${date}"`,
      []
    );
    if (!activeQuestions) {
      throw new Error("Error getting active questions");
    }
    const pastQuestions = await mysql.query(
      `SELECT * FROM \`questions\` WHERE \`deadline\` < "${date}"`,
      []
    );
    if (!pastQuestions) {
      throw new Error("Error getting past questions");
    }
    return res.json({ activeQuestions, pastQuestions });
  } catch (err) {
    logger.error("Error getting questions", err);
    throw new Error("Error getting questions");
  }
});

routes.post("/add-question", async (req: Request, res: Response) => {
  const { question, answerType, answerSetId, deadline, points, answerAmount } =
    req.body;

  try {
    const insert = await mysql.insertOne(
      "INSERT INTO `questions` SET `league_id` = 1, `question` = ?, `answer_set_id` = ?, `answer_type` = ?, `deadline` = ?, `points` = ?, `answer_amount` = ?",
      [question, answerSetId, answerType, deadline, points, answerAmount]
    );

    if (!insert) {
      return res.json({ success: false });
    }

    res.json({ success: true });
  } catch (err) {
    logger.error("Error adding new question", err);
    res.json({ success: false });
  }
});

routes.post(
  "/set-correct-text-answer/:questionId",
  async (req: Request, res: Response) => {
    const { answer } = req.body;
    const questionId = +req.params.questionId;

    try {
      if (
        !(await mysql.query(
          "UPDATE `answers` SET `correct` = true WHERE `question_id` = ? AND `final_answer` = 1 AND answer = ?",
          [questionId, answer]
        ))
      ) {
        return res.json({ success: false });
      }

      if (
        !(await mysql.insertOne(
          "INSERT INTO `questions_correct_answers` SET `question_id` = ?, `correct_answer` = ?",
          [questionId, answer]
        ))
      ) {
        return res.json({ success: false });
      }

      return res.json({ success: true });
    } catch (err) {
      logger.error("Error adding correct text answer");
      res.json({ success: false });
    }
  }
);

routes.post(
  "/set-correct-teams-answer/:questionId",
  async (req: Request, res: Response) => {
    const { answer } = req.body;
    const questionId = +req.params.questionId;

    const answerIds = answer.map((a: string) => +a);

    if (
      !(await mysql.query(
        "UPDATE `answers` SET `correct` = true WHERE `question_id` = ? AND `final_answer` = 1 AND `answer_set_id` IN (?)",
        [questionId, answerIds]
      ))
    ) {
      return res.json({ success: false, message: "Error updating answers" });
    }
    try {
      answerIds.forEach(async (answer: number) => {
        const insert = await mysql.insertOne(
          "INSERT INTO `questions_correct_answers` SET `question_id` = ?, `answer_set_answers_id` = ?",
          [questionId, answer]
        );
        if (!insert) {
          throw new Error("Error inserting correct answer");
        }
      });
    } catch (err) {
      return res.json({ success: false, message: err.message });
    }

    return res.json({ success: true });
  }
);

export default routes;
