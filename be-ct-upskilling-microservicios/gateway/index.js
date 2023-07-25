require("dotenv").config()
const express = require ("express");
const cors = require('cors')
const morgan = require("morgan");

const {createProxyMiddleware} = require("http-proxy-middleware")
const {PORT, PORT01, PORT02, PORT03} = process.env

const server = express();
const bodyParser = require('body-parser')
server.use(morgan("dev"));
server.name = "starWars"

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
server.use(bodyParser.json({ limit: '50mb' }))
server.use(cors({
  origin: ['http://http://localhost:4200'],
    methods: [ 'GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'], 
  }))


server.use("/character", createProxyMiddleware({
    target:PORT01,
    changueOrigin: true,
}));

server.use("/films", createProxyMiddleware({
    target:PORT02,
    changueOrigin: true,
}));

server.use("/planets", createProxyMiddleware({
    target:PORT03,
    changueOrigin: true,
}));



server.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
