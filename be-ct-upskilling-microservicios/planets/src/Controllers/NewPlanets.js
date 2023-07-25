const axios = require("axios");
const { ClientError } = require("../utils/errors/index")

module.exports = async (req, res) => {
  const { _id, name, rotation_period, orbital_period, diameter, climate, gravity, terrain } = req.body

  const character = { _id, name, rotation_period, orbital_period, diameter, climate, gravity, terrain };

  try {
    await axios.post('http://52.90.6.97:8004/Planets', character)
    // await axios.post('http://localhost:8004/Planets', character)
    if (response.data.response = "ya existe") throw new ClientError("ID Duplicate", 404)
    res.status(200).send((response.data))
  } catch (error) {
    throw new ClientError("ID Duplicate", 404)
  }
}
