import PropTypes from "prop-types";

const PostForm = ({ setShowForm }) => {
  const handleCloseFrom = (e) => {
    if (e.target === e.currentTarget) {
      setShowForm(false);
    }
  };

  return (
    <div
      onClick={handleCloseFrom}
      className="fixed inset-0 bg-[rgba(0,0,0,0.75)] flex items-center justify-center"
    >
      <div className="relative mx-auto w-full max-w-lg p-4 bg-white  rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-center text-black mb-4">
          Create a Post
        </h1>
        <form className="bg-white rounded-xl p-3 shadow-lg">
          {/* Title Field */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700 sm:text-base"
              placeholder="Enter the title"
            />
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700 sm:text-base"
              placeholder="Enter the description"
            ></textarea>
          </div>

          {/* File Upload */}
          <div className="mb-4">
            <label
              htmlFor="postImage"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="postImage"
              name="postImage"
              accept="image/*"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700 sm:text-base"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className=" w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-base rounded-lg shadow-lg hover:from-pink-500 hover:to-purple-500 focus:outline-none focus:ring-4 focus:ring-pink-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Prop types validation
PostForm.propTypes = {
  setShowForm: PropTypes.func.isRequired,
};

export default PostForm;
