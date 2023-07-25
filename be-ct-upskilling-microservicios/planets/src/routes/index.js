const { Router } = require("express");

const planets = require("./planetsRouter");

const router = Router();
router.get("/", (req, res) => res.status(200).send("Hello World"));

router.use("/planets", planets );

module.exports = router;
