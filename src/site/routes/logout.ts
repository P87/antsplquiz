import { Request, Response } from "express";
import logger from "../utils/logger";

export default (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      logger.error("Error logging user out", err);
      throw new Error("Error logging user out");
    }
    return res.redirect("/");
  });
};
