const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

const server = express();

mongoose.connect('mongodb+srv://semana:semana@cluster0-a4th6.mongodb.net/semana3?retryWrites=true&w=majority',{
    useNewUrlParser:true
});
server.use(cors());
server.use(express.json());//configura o Express para trabalhar com json
server.use(routes);//configura o Express para trabalhar com rotas em outro aquivo

server.listen(3333);
console.log("server rodando");
