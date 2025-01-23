const Router = require("express").Router();
const { CloudinaryFileUploder } = require("../Middlwares/file-uploder");
const {
  CreateNewPost,
  GetAllPost,
  GetSinglePost,
  DeleteSinglePost,
} = require("../Controllers/post-controllers");

Router.post("/", CloudinaryFileUploder.single("postImage"), CreateNewPost);

Router.get("/", GetAllPost);

Router.get("/:id", GetSinglePost);

Router.delete("/:id", DeleteSinglePost);

module.exports = Router;
