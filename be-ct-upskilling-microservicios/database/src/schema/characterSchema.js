const { Schema } = require("mongoose");

const CharacterSchema = new Schema({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: { type: String, ref: "Planets" },
    films: [{ type: String, ref: "Films" }]
})

CharacterSchema.statics.list = async function () {
    return await this.find().populate("homeworld", ["id", "name"]).populate("films", ["id", "title"])
}
CharacterSchema.statics.getID = async function (id) {
    return await this.findById(id).populate("homeworld", ["id", "name"]).populate("films", ["id", "title"])
}
CharacterSchema.statics.insert = async function (character) {
 const {_id, name, height, hair_color, skin_color, birth_year, gender} = character
    const check = await this.findById(character._id)
    if (check) return ("ya existe")
    return await this.create({_id, name, height, hair_color, skin_color, birth_year, gender});
}
CharacterSchema.statics.Delete = async function (id) {
    return await this.findByIdAndRemove(id);
}

module.exports = CharacterSchema;