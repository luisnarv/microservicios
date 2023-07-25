const Router = require("express");
const character = require("./CharacterRouter")


const router = Router();

router.use("/character", character);

module.exports = router;