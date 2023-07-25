module.exports = (req, res, next) => {
    const { model } = req.params;
    if (["Films","Planets", "characters"].includes(model)){
        return next();
    }else {
        res.status(400).send("Model error")
    }
}

