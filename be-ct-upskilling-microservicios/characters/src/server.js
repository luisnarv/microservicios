const express = require("express");
const morgan = require("morgan")
const cors = require('cors')

const server = express()
const routes =  require("./Routes/index.js")
const character = require("../src/data/")
const bodyParser = require('body-parser')

server.use(morgan("dev"));

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
server.use(express.json());
server.use(cors({
    //origin: ['http://localhost:4200'],
    methods: [ 'GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'], 
  }))

server.use("/", routes)

server.use((err, req, res, next) => {
    console.log(err.message)
    res.status(err.statuscode ? 500 : err.statusCode).send({
        error: true,
        message: err.message
    })
})

module.exports = server;
