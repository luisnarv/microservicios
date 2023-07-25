const { Router } = require("express");

const films = require("./filmsRouter");

const router = Router();

router.get("/", (req, res) => res.status(200).send("Hello World"));

router.use("/films", films);

module.exports = router;
