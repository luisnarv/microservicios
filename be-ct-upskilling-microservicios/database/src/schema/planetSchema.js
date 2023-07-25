const {Schema} = require("mongoose");

const planetSchema = new Schema ({
    _id: String,
    name: String,
    rotation_period:String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    res_idents: [{type: String, ref: "Characters"}],
    films: [{type: String, ref: "Films"}]
})



planetSchema.statics.list = async function () {
    return await this.find().populate("res_idents", ["id", "name"]).populate("films", ["id", "title"])
}
planetSchema.statics.getID = async function (id) {
    return await this.findById(id).populate("res_idents", ["id", "name"]).populate("films", ["id", "title"])
}
planetSchema.statics.insert = async function (planet) {

    const {_id, name, rotation_period, climate, gravity, terrain} = planet
    const check = await this.findById(planet._id)
    if (check) return ("ya existe")
    return await this.create({_id, name, rotation_period, climate, gravity, terrain});
}
planetSchema.statics.Delete = async function (id) {
    return await this.findByIdAndRemove(id);
}

module.exports = planetSchema;