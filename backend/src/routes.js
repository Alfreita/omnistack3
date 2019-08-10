const express = require("express");
const devcontroller = require("./controller/devController");
const likeContoller = require("./controller/likeController");
const dislikeContoller = require("./controller/dislikes");
const routes = express.Router();

routes.get("/devs",devcontroller.index);
routes.post("/devs",devcontroller.store);

routes.post("/devs/:devid/likes",likeContoller.store);
routes.post("/devs/:devid/dislikes",dislikeContoller.store);

module.exports = routes;