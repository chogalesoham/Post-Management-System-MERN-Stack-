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
    let { limit, page } = req.query;

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 5;

    const skip = (page - 1) * limit;
    const totalCount = await PostModel.countDocuments();
    const AllPost = await PostModel.find({})
      .skip(skip)
      .limit(limit)
      .sort({ updatedAt: -1 });

    const TotalPages = Math.ceil(totalCount / limit);
    res.status(200).json({
      message: "Get All Post",
      success: true,
      data: {
        AllPost: AllPost,
        pagination: {
          TotalPost: totalCount,
          TotalPages: TotalPages,
          currentPage: page,
          pageSize: limit,
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};

const GetSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    const SinglePost = await PostModel.findById({ _id: id });
    res.status(200).json({
      message: "Get Single Post",
      success: true,
      SinglePost,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error,
    });
  }
};

const UpdateSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    let updateData = { title, description, updatedAt: new Date() };
    if (req.file) {
      updateData.postImage = req.file.path;
    }
    const UpdatePost = await PostModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!UpdatePost) {
      return res.status(404).json({ message: "Post Not Found" });
    }
    res.status(201).json({
      message: "Post Updated",
      success: true,
      UpdatePost,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error,
    });
  }
};

const DeleteSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    await PostModel.findByIdAndDelete({ _id: id });
    res.status(200).json({
      message: "Delete Single Post",
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

module.exports = {
  CreateNewPost,
  GetAllPost,
  GetSinglePost,
  DeleteSinglePost,
  UpdateSinglePost,
};
