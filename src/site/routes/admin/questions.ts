import { Router } from "express";
import * as mysql from "../../utils/mysql";

const routes = Router();

routes.get("/", (req, res) => {
  res.render("admin/questions", {
    section: "admin",
    isAdmin: req.session.isAdmin,
  });
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
  const now = new Date();
  const [month, day, year, hour, minutes, seconds] = [
    now.getMonth(),
    now.getDate(),
    now.getFullYear(),
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
  ];
  const date = `${year}-${month + 1}-${day} ${hour}:${minutes}:${seconds}`;

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
