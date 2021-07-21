import { Request, Response } from "express";
import * as mysql from "../../utils/mysql";

export default async (req: Request, res: Response) => {
  try {
    const players = await mysql.query(
      "SELECT * FROM `answer_set_answers` WHERE set_id = 2 AND answer LIKE ? LIMIT 10",
      [`%${req.body.search}%`]
    );
    if (!players) {
      throw new Error("Error getting active questions");
    }
    return res.json({ success: true, players });
  } catch (err) {
    console.error("Error getting active questions", err);
    res.json({ success: false });
  }
};
