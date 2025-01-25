import { useState } from "react";
import Pagination from "./pagination";
import PostTable from "./post-table";
import PostFrom from "./post-from";
import PostCard from "./post-card";

const AllPost = () => {
  const [showForm, setShowFrom] = useState(false);
  const [showPostCard, setShowPostCard] = useState(false);

  return (
    <div className="py-10 px-12">
      <div className=" shadow-lg border border-amber-100 p-5 container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 px-6 bg-white rounded-lg">
          <h2 className="text-2xl font-bold text-gray-700 mb-4 sm:mb-0 text-center md:text-left">
            Post Management App
          </h2>
          <button
            onClick={() => setShowFrom(!showForm)}
            className="bg-purple-500 text-white py-2 px-4 rounded-lg shadow hover:bg-purple-600 transition duration-300 ease-in-out"
          >
            Add New Post
          </button>
        </div>

        <PostTable
          showPostCard={showPostCard}
          setShowPostCard={setShowPostCard}
        />
        <Pagination />
        {showForm ? <PostFrom setShowFrom={setShowFrom} /> : <></>}
        {showPostCard ? <PostCard setShowPostCard={setShowPostCard} /> : <></>}
      </div>
    </div>
  );
};

export default AllPost;
