import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Error logging user out", err);
            throw new Error("Error logging user out");
        }
        res.redirect("/");
    });
});

export default routes;
