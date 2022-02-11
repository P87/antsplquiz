import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  return res.render("admin/adminPage", {
    section: "admin",
    isAdmin: req.session.isAdmin,
    title: "Users",
    divId: "admin-users",
  });
};
