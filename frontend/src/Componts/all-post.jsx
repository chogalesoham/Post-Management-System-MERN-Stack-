import Pagination from "./pagination";
import PostTable from "./post-table";

const AllPost = () => {
  return (
    <div className="py-10 px-12">
      <div className=" shadow-lg border border-amber-100 p-5 container mx-auto">
        <div className="flex items-center justify-between py-4 px-6 bg-white rounded-lg ">
          <h2 className="text-2xl font-bold text-gray-700">
            Post Management App
          </h2>
          <button className="bg-purple-500 text-white py-2 px-4 rounded-lg shadow hover:bg-purple-600 transition duration-300 ease-in-out">
            Add New Post
          </button>
        </div>
        <PostTable />

        <Pagination />
      </div>
    </div>
  );
};

export default AllPost;
