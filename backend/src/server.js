const express = require("express");
const routes = require("./routes");

const server = express();


server.use(express.json());//configura o Express para trabalhar com json
server.use(routes);//configura o Express para trabalhar com rotas em outro aquivo

server.listen(3333);
console.log("server rodando");
