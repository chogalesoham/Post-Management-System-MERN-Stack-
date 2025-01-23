const Router = require("express").Router();
const { CloudinaryFileUploder } = require("../Middlwares/file-uploder");
const {
  CreateNewPost,
  GetAllPost,
  GetSinglePost,
} = require("../Controllers/post-controllers");

Router.post("/", CloudinaryFileUploder.single("postImage"), CreateNewPost);

Router.get("/", GetAllPost);

Router.get("/:id", GetSinglePost);

module.exports = Router;
