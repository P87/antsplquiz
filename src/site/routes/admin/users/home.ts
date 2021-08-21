import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  return res.render("admin/users", {
    section: "admin",
    isAdmin: req.session.isAdmin,
  });
};
