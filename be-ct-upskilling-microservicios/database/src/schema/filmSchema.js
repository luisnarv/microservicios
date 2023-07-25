const { Schema } = require("mongoose");

const FilmSchema = new Schema({
        _id: String,
        title: String,
        opening_crawl: String,
        director: String,
        producer: String,
        release_date: Date,
        characters: [{ type: String, ref: "Characters" }],
        planets: [{ type: String, ref: "Planets" }]
})


FilmSchema.statics.list = async function () {
        return await this.find().populate("characters", ["id", "name"]).populate("planets", ["id", "title"])
}
FilmSchema.statics.getID = async function (id) {
        return await this.findById(id).populate("characters", ["id", "name"]).populate("planets", ["id", "title"])
}
FilmSchema.statics.insert = async function (film) {
        const { _id, title, opening_crawl, director, producer, release_date} = film
        const check = await this.findById(_id)
        if (check) return ("ya existe")
        return await this.create({_id, title, opening_crawl, director, producer, release_date});
}
FilmSchema.statics.Delete = async function (id) {
        return await this.findByIdAndRemove(id);
}

module.exports = FilmSchema;