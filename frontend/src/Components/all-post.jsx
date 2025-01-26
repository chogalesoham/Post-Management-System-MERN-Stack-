import { useEffect, useState } from "react";

import {
  DeletePostApiColl,
  GetPostApiColl,
  GetSinglePostApiColl,
} from "../api";
import PostTable from "../Components/post-table";
import Pagination from "../Components/pagination";
import PostForm from "../Components/post-from";
import PostCard from "../Components/post-card";
import { ToastContainer } from "react-toastify";
import { Toast } from "../toast";

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
  const [updatePostObj, setUpdatePostObj] = useState(null);
  const [singlePostData, setSinglePostData] = useState(null);

  // Fetch post data
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

  const GetSinglePost = async (id) => {
    try {
      const response = await GetSinglePostApiColl(id);
      setSinglePostData(response?.SinglePost);
    } catch (error) {
      console.error("Error fetching post:", error.message);
    }
  };

  useEffect(() => {
    GetPostData(1, 5);
  }, []);

  // Handle page change in pagination
  const handlePageChange = (page) => {
    GetPostData(page, pagination.pageSize);
  };

  // Handle post update
  const handelUpdatePost = (postObj) => {
    setUpdatePostObj(postObj);
    setShowForm(true); // Open the form explicitly for updating
  };

  // Handle Delete
  const handelDeletePost = async (postObj) => {
    try {
      const { success, message } = await DeletePostApiColl(postObj?._id);
      if (success) {
        Toast(message, "error");
      }
      GetPostData();
    } catch (error) {
      Toast(error, "error");
    }
  };

  // Close the form and reset updatePostObj
  const handleCloseForm = () => {
    setShowForm(false);
    setUpdatePostObj(null);
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
              onClick={() => {
                setShowForm(!showForm);
                setUpdatePostObj(null); // Ensure no post data is set during a new post
              }}
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
            handelUpdatePost={handelUpdatePost}
            handelDeletePost={handelDeletePost}
            GetSinglePost={GetSinglePost}
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
            <PostForm
              GetPostData={GetPostData}
              setShowForm={handleCloseForm} // Ensure proper closure
              updatePostObj={updatePostObj}
            />
          )}
          {showPostCard && (
            <PostCard
              setShowPostCard={setShowPostCard}
              SinglePostData={singlePostData}
            />
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AllPost;
