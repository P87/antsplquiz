import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  return res.render("introduction", {
    loggedIn: req.session.loggedIn,
    isAdmin: req.session.isAdmin,
  });
};
