import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction): any => {
  if (!req.session.loggedIn || !req.session.isAdmin) {
    return res.redirect("/");
  }
  next();
};
