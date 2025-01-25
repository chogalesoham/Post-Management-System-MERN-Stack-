import PropTypes from "prop-types";

const PostCard = ({ setShowPostCard }) => {
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      setShowPostCard(false);
    }
  };

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-[rgba(0,0,0,0.75)] flex items-center justify-center"
    >
      <div className="max-w-sm mx-auto p-2 bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="relative">
          <img
            src="https://preview.redd.it/some-images-generated-using-the-new-bing-image-creator-v0-zfohxnf8t3pa1.jpg?width=1024&format=pjpg&auto=webp&s=33274aadae0e0332e60dd15c87617ea6652365b5"
            alt="Post Image"
            className="w-full h-64 object-cover rounded-2xl transform transition-all duration-300 hover:opacity-90"
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
        </div>

        <div className="p-6 bg-white">
          {/* User Name */}
          <div className="flex items-center space-x-3">
            <span className="text-xl font-semibold text-gray-900 hover:text-purple-600 transition-all duration-200">
              John Doe
            </span>
          </div>

          <p className="mt-3 text-gray-700 text-base leading-relaxed line-clamp-2">
            This is a description of the post. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec vel sapien felis.
          </p>
        </div>
      </div>
    </div>
  );
};

// Prop types validation
PostCard.propTypes = {
  setShowPostCard: PropTypes.func.isRequired,
};

export default PostCard;
