// @todo type these properly
export default (req: any, res: any, next: any): any => {
  if (!req.session.loggedIn || !req.session.isAdmin) {
    return res.redirect("/");
  }
  next();
};
