const Router = require("express");
const store = require("../schema/index");
const {validateModel} = require("../middlewares")


const router = Router();

router.get("/:model",validateModel, async (req, res) => {
    const { model } = req.params;
    const response = await store[model].list()
    res.status(200).json(response)
})

router.get("/:model/:id",validateModel, async (req, res) => {
    const { model, id } = req.params;
    const response = await store[model].getID(id)
    res.status(200).json(response)
})

router.post("/:model",validateModel, async (req, res) => {
    const { model } = req.params;
    const response = await store[model].insert(req.body)
    const status = "succesfull";
    res.status(200).json({status, response})
})

router.delete("/:model/:id",validateModel, async (req, res) => {
    const { model, id } = req.params;
    const response = await store[model].Delete(id)
    res.status(200).json({status:"succesfull", response})
})


module.exports = router;
