import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  return res.render("admin/adminPage", {
    section: "admin",
    isAdmin: req.session.isAdmin,
    title: "User",
    divId: "admin-user",
  });
};
