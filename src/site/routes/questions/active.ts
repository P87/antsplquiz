import { Request, Response } from "express";
import * as mysql from "../../utils/mysql";

export default async (req: Request, res: Response) => {
  try {
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
    const questions = await mysql.query(`SELECT * FROM \`questions\` WHERE \`deadline\` > "${date}"`, []);
    if (!questions) {
      throw new Error("Error getting active questions");
    }
    return res.json(questions);
  } catch (err) {
    console.error("Error getting active questions", err);
    res.json({ success: false });
  }
}