const character = require("./characters.json")

module.exports = {
    list: async()=>{
        return character;
    },
}