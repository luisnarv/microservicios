const {catchAsync} = require("../utils")

module.exports = {
    getPlanets :catchAsync( require("./GetPlanets")),
    getPlanebyId : catchAsync( require("./GetPlanetbyId")),
    newPlanet: catchAsync(require("./NewPlanets")),
    deletePlanet: catchAsync( require("./DeletePlanet"))
}