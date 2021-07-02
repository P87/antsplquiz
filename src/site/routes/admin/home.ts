export default (req: any, res: any) => {
  res.render("admin/home", { section: "admin", isAdmin: req.session.isAdmin });
};
