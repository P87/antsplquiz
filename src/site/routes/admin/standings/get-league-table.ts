import { Request, Response } from "express";
import * as mysql from "../../../utils/mysql";
import { MySQLStanding } from "../../../../types";

export default async (req: Request, res: Response) => {
  const standings = await mysql.query<MySQLStanding>(
    "SELECT * FROM `standings` ORDER BY id DESC LIMIT 1",
    []
  );

  if (!standings) {
    return res.json({
      success: false,
      message: "Error getting latest standings",
    });
  }

  return res.json({
    success: true,
    dateAdded:
      standings.length && mysql.convertDate(new Date(standings[0].date_added)),
    standings: standings.length ? JSON.parse(standings[0].standings) : [],
  });
};
