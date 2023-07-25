const Router = require("express");
const controllers = require("../Controllers")
const middleware = require("../middlewares")


const router = Router();

router.get("/", controllers.getCharacter);
router.get("/:id", controllers.getCharacterId);

//router.post("/new", middleware.charactervalidation, controllers.newCharacter)
router.post("/", middleware.charactervalidation, controllers.newCharacter);
router.delete("/:id", controllers.deleteCharacter);



module.exports = router