const { Router } = require("express");
const planets = require("../Controllers");

const planetsRouter = Router();

planetsRouter.get("/", planets.getPlanets);
planetsRouter.get("/:id", planets.getPlanebyId);
planetsRouter.post("/new", planets.newPlanet);
planetsRouter.delete("/:id", planets.deletePlanet);


module.exports = planetsRouter;
