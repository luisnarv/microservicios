const express = require("express");
const morgan = require("morgan");
const cors = require('cors')

const server = express();
const bodyParser = require('body-parser')

server.use(morgan("dev"));

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
server.use(express.json());
server.use(cors({
    //origin: ['http://localhost:4200'],
    methods: [ 'GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'], 
  }))

server.use(require("./routes"));



server.use((err, req, res, next) => {
    res.status(err.statusCode? 500:err.statusCode).send({
        error: true,
        message: err.message
    })
})



module.exports = server;
