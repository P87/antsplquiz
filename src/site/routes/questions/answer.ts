import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  return res.render("questions/answer", { isAdmin: req.session.isAdmin });
};
