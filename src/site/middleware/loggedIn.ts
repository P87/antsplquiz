// @todo type these properly
export default (req: any, res: any, next: any): any => {
  if (!req.session.loggedIn) {
    return res.redirect("/");
  }
  next();
};
