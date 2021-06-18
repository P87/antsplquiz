// @todo type these properly
export const requireAuth = (req: any, res: any, next: any): any => {
  if (!req.session.loggedIn) {
    return res.redirect("/");
  }
  next();
};
