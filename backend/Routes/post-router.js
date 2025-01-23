const Router = require("express").Router();
const { CloudinaryFileUploder } = require("../Middlwares/file-uploder");
const {
  CreateNewPost,
  GetAllPost,
} = require("../Controllers/post-controllers");

Router.post("/", CloudinaryFileUploder.single("postImage"), CreateNewPost);

Router.get("/", GetAllPost);

module.exports = Router;
