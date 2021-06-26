import { Router } from "express";
import * as mysql from "../../utils/mysql";

const routes = Router();

routes.get("/", (req, res) => {
  res.render("admin/questions");
});

routes.get("/answer-sets", async (req, res) => {
  try {
    const sets = await mysql.query("SELECT * FROM `answer_sets`", []);
    if (!sets) {
      throw new Error("Answer sets query failed");
    }
    res.json(sets);
  } catch (err) {
    console.error("Error getting asnwer sets", err);
    throw new Error("Error getting answer sets");
  }
});

routes.get("/get-questions", async (req, res) => {
  try {
    // @todo some pagination and transaction to do multiple selects
    const questions = await mysql.query("SELECT * FROM `questions`", []);
    if (!questions) {
      throw new Error("Error with questions query");
    }
    return res.json(questions);
  } catch (err) {
    console.error("Error getting questions", err);
    throw new Error("Error getting questions");
  }
});

routes.post("/add-question", async (req, res) => {
  const { question, answerType, answerSetId, deadline, points } = req.body;
  try {
    const insert = await mysql.insertOne(
      "INSERT INTO `questions` SET `league_id` = 1, `question` = ?, `answer_set_id` = ?, `answer_type` = ?, `deadline` = ?, `points` = ?",
      [question, answerSetId, answerType, deadline, points]
    );

    if (!insert) {
      return res.json({ success: false });
    }

    res.json({ success: true });
  } catch (err) {
    console.error("Error adding new question", err);
    res.json({ success: false });
  }
});

export default routes;
