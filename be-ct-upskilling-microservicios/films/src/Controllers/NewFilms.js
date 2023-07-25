const axios = require("axios");
const { ClientError } = require("../utils/errors/index")

module.exports = async (req, res) => {
  const { _id, title, opening_crawl, director, producer } = req.body

  const character = { _id, title, opening_crawl, director, producer };

  try {
    await axios.post('http://52.90.6.97:8004/Films', character)
    //await axios.post('http://localhost:8004/Films', character)
    if (response.data.response = "ya existe") throw new ClientError("ID Duplicate", 404)
    res.status(200).send((response.data))
  } catch (error) {
    throw new ClientError("ID Duplicate", 404)
  }
}  