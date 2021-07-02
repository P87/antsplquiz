import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  const successfulRegistration = req.query["register-success"];

  req.session.loggedIn
    ? res.render("home", {
        display_name: req.session.displayName,
        isAdmin: req.session.isAdmin,
      })
    : res.render("login", {
        csrfToken: req.csrfToken(),
        ...(successfulRegistration
          ? {
              successfulRegistration: true,
            }
          : {}),
      });
};
