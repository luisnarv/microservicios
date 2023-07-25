const axios = require("axios");
const { ClientError } = require("../utils/errors/index")

module.exports = async (req, res) => {
    const response = await axios.get(`http://52.90.6.97:8004/Planets`);
    //const response = await axios.get('http://database:8004/Planets');
    //const response = await axios.get(`http://localhost:8004/Planets`);
    const result = response.data;
    if (result.length < 1) throw new ClientError(" ..Not Found.. ", 404);
    res.status(200).json(result);

}