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
  try {
    const AllPost = await PostModel.find({});
    res.status(200).json({
      message: "Get All Post",
      success: true,
      AllPost,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error,
    });
  }
};

module.exports = {
  CreateNewPost,
  GetAllPost,
};
