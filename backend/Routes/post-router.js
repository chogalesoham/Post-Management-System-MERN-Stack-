const Router = require("express").Router();
const { CloudinaryFileUploder } = require("../Middlwares/file-uploder");
const {
  CreateNewPost,
  GetAllPost,
  GetSinglePost,
  DeleteSinglePost,
  UpdateSinglePost,
} = require("../Controllers/post-controllers");

Router.post("/", CloudinaryFileUploder.single("postImage"), CreateNewPost);

Router.put("/:id", CloudinaryFileUploder.single("postImage"), UpdateSinglePost);

Router.get("/", GetAllPost);

Router.get("/:id", GetSinglePost);

Router.delete("/:id", DeleteSinglePost);

module.exports = Router;
