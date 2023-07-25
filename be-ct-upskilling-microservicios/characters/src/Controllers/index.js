const {catchAsync} = require("../utils")
module.exports={
    getCharacter: catchAsync( require("./GetCharacters")),
    getCharacterId: catchAsync( require("./GetCharacterId")),
    newCharacter: catchAsync( require("./NewCharacter")),
    deleteCharacter: catchAsync( require("./DeleteCharacter"))
}