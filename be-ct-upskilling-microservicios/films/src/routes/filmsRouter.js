const { Router } = require("express");
const films = require("../Controllers");
const filmsRouter = Router();

filmsRouter.get("/", films.getFilms);
filmsRouter.get("/:id", films.getFilmsbyId);
filmsRouter.post("/New", films.newFilms );
filmsRouter.delete("/:id", films.deleteFilm)

module.exports = filmsRouter;
