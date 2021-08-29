import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  return res.render("leaderBoard", {
    loggedIn: req.session.loggedIn,
    isAdmin: req.session.isAdmin,
  });
};
