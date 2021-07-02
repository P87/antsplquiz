import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error logging user out", err);
      throw new Error("Error logging user out");
    }
    res.redirect("/");
  });
};
