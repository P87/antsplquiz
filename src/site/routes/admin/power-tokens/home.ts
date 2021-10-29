import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  return res.render("admin/adminPage", {
    section: "admin",
    isAdmin: req.session.isAdmin,
    title: "Power Tokens",
    divId: "admin-power-tokens",
  });
};
