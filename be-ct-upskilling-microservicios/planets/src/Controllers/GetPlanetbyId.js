const axios = require("axios");
const { ClientError } = require("../utils/errors/index")


module.exports = async (req, res) => {
  const { id } = req.params

  const response = await axios.get(`http://52.90.6.97:8004/Planets/${id}`);
  //const response = await axios.get(`http://localhost:8004/Planets/${id}`);
  const result = response.data;
  if (result == null) throw new ClientError(" ..Not Found.. ", 404);
  res.status(200).json(result);
}

