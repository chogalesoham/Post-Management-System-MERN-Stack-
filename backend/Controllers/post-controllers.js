const PostModel = require("../Models/post-model");

const CreateNewPost = async (req, res) => {
  try {
    const body = req.body;
    body.postImage = req.file ? req.file?.path : null;
    const post = new PostModel(body);
    await post.save();
    res.status(201).json({
      message: "Post Create",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error,
    });
  }
};

const GetAllPost = async (req, res) => {
  res.json("Get All Post");
};

module.exports = {
  CreateNewPost,
  GetAllPost,
};
