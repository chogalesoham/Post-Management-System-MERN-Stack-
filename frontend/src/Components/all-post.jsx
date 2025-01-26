import { useEffect, useState } from "react";

import { GetPostApiColl } from "../api";
import PostTable from "../Components/post-table";
import Pagination from "../Components/pagination";
import PostForm from "../Components/post-from";
import PostCard from "../Components/post-card";
import { ToastContainer } from "react-toastify";

const AllPost = () => {
  const [showForm, setShowForm] = useState(false);
  const [showPostCard, setShowPostCard] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [pagination, setPagination] = useState({
    TotalPost: 0,
    TotalPages: 1,
    currentPage: 1,
    pageSize: 5,
  });

  const GetPostData = async (page = 1, limit = 5) => {
    try {
      const response = await GetPostApiColl(page, limit);

      if (response?.data) {
        setAllPosts(response?.data?.AllPost || []);
        setPagination(response.data.pagination || {});
      } else {
        setAllPosts([]);
        setPagination({
          TotalPost: 0,
          TotalPages: 1,
          currentPage: 1,
          pageSize: 5,
        });
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      setAllPosts([]);
      setPagination({
        TotalPost: 0,
        TotalPages: 1,
        currentPage: 1,
        pageSize: 5,
      });
    }
  };

  useEffect(() => {
    GetPostData(1, 5);
  }, []);

  const handlePageChange = (page) => {
    GetPostData(page, pagination.pageSize);
  };

  return (
    <>
      <div className="py-10 px-12">
        <div className="shadow-lg border border-amber-100 p-5 container mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between py-4 px-6 bg-white rounded-lg">
            <h2 className="text-2xl font-bold text-gray-700 mb-4 sm:mb-0 text-center md:text-left">
              Post Management App
            </h2>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-purple-500 text-white py-2 px-4 rounded-lg shadow hover:bg-purple-600 transition duration-300 ease-in-out"
            >
              Add New Post
            </button>
          </div>

          {/* Post Table */}
          <PostTable
            allPosts={allPosts}
            showPostCard={showPostCard}
            setShowPostCard={setShowPostCard}
          />

          {/* Pagination */}
          {pagination.TotalPages > 1 && (
            <Pagination
              pagination={pagination}
              onPageChange={handlePageChange}
            />
          )}

          {/* Conditional Rendering */}
          {showForm && (
            <PostForm GetPostData={GetPostData} setShowForm={setShowForm} />
          )}
          {showPostCard && <PostCard setShowPostCard={setShowPostCard} />}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AllPost;
