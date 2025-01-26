import PropTypes from "prop-types";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const PostTable = ({
  showPostCard,
  setShowPostCard,
  allPosts,
  handelUpdatePost,
  handelDeletePost,
  GetSinglePost,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-200 w-full text-sm bg-white rounded-lg shadow-lg container mx-auto">
        <thead>
          <tr className="bg-gradient-to-r from-purple-500 to-pink-500 text-white uppercase text-left">
            <th className="border border-gray-200 px-6 py-4 text-center font-semibold">
              Profile Image
            </th>
            <th className="border border-gray-200 px-6 py-4 font-semibold">
              Title
            </th>
            <th className="border border-gray-200 px-6 py-4 font-semibold">
              Description
            </th>
            <th className="border border-gray-200 px-6 py-4 text-center font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {allPosts.map((post) => (
            <tr
              key={post?._id}
              className="hover:bg-gray-50 transition duration-300 ease-in-out h-[70px]"
            >
              <td className="border border-gray-200 px-6 text-center h-[100%]">
                <img
                  src={post?.postImage}
                  alt="Profile"
                  className="w-16 h-16 object-cover rounded-full border-4 border-purple-300 shadow-lg m-1"
                />
              </td>
              <td className="border border-gray-200 px-6 text-gray-700 font-medium text-nowrap h-[100%]">
                {post?.title}
              </td>
              <td className="border border-gray-200 px-6 text-gray-600 max-w-xs text-wrap  py-1">
                {post?.description}
              </td>
              <td className="border border-gray-200 px-6 text-center h-[100%]">
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => {
                      setShowPostCard(!showPostCard);
                      GetSinglePost(post?._id);
                    }}
                    className="text-blue-500 hover:text-blue-700 bg-blue-100 hover:bg-blue-200 p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
                    title="View"
                  >
                    <AiOutlineEye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handelUpdatePost(post)}
                    className="text-yellow-500 hover:text-yellow-700 bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
                    title="Edit"
                  >
                    <AiOutlineEdit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handelDeletePost(post)}
                    className="text-red-500 hover:text-red-700 bg-red-100 hover:bg-red-200 p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
                    title="Delete"
                  >
                    <AiOutlineDelete className="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Prop types validation
PostTable.propTypes = {
  setShowPostCard: PropTypes.func.isRequired,
  showPostCard: PropTypes.bool.isRequired,
  allPosts: PropTypes.array.isRequired,
  handelUpdatePost: PropTypes.func.isRequired,
  handelDeletePost: PropTypes.func.isRequired,
  GetSinglePost: PropTypes.func.isRequired,
};

export default PostTable;
