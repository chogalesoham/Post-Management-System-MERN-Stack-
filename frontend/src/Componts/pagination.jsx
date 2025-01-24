const Pagination = () => {
  return (
    <div className="flex items-center justify-between py-3 px-4">
      <div>
        <p className="text-lg font-semibold text-gray-800">Page 1 of 5</p>
      </div>
      <ul className="flex justify-center items-center gap-4 mt-4 border border-gray-400 shadow-md py-1 px-2">
        <li>
          <button
            className="flex items-center justify-center py-2 px-4 rounded-lg bg-gray-200 text-gray-600  shadow-lg"
            title="Previous"
          >
            Previous
          </button>
        </li>
        <div className="flex items-center justify-center gap-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <li key={page}>
              <button
                className={`px-3 py-1 rounded-full text-xl font-semibold transition-all duration-300 ease-in-out transform ${
                  page === 2
                    ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-110 shadow-xl"
                    : "bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-600 hover:scale-105 shadow-md"
                }`}
              >
                {page}
              </button>
            </li>
          ))}
        </div>

        <li>
          <button
            className="flex items-center justify-center py-2 px-4 rounded-lg bg-gray-200 text-gray-600 "
            title="Next"
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
