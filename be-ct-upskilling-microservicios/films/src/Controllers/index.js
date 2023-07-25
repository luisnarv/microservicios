
const {catchAsync} = require("../utils")

module.exports= {
    getFilms: catchAsync( require("./GetFilms")),
    getFilmsbyId: catchAsync( require("./GetfilmsbyId")),
    newFilms: catchAsync(require("./NewFilms")),
    deleteFilm: catchAsync(require("./Deletefilm"))
}