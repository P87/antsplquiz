import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  return res.render("cookiesPolicy", {
    loggedIn: req.session.loggedIn,
  });
};
