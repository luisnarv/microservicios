const mongoose = require("mongoose");
const { MONGO_URI } = require("../../config/envs");

const conect = mongoose.createConnection(MONGO_URI);


// characters.find().populate("homeworld", ["id", "name"]).then((res) => console.log(res[0]));

module.exports = {
    characters: conect.model("Characters", require("../schema/characterSchema")),
    Planets: conect.model("Planets", require("../schema/planetSchema")),
    Films: conect.model("Films", require("../schema/filmSchema")) 
};