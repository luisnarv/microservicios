const axios = require("axios");
const { ClientError } = require("../utils/errors/index")

module.exports = async (req, res) => {
    const { id } = req.params

    const response = await axios.delete(`http://52.90.6.97:8004/Films/${id}`);
    //const response = await axios.delete(`http://localhost:8004/Films/${id}`);
    const result = response.data;
    console.log(result, "------------------------------------------------------------------------------------------------------->")
    if (result.response == null) throw new ClientError(" ..Not Found.. ", 404);
    res.status(200).json(result);
}
