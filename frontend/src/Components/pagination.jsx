const Pagination = ({ pagination, onPageChange }) => {
  const { TotalPages, currentPage } = pagination;

  const pageNumber = Array.from(
    { length: TotalPages },
    (_, index) => index + 1
  );

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between py-3 px-4 mt-4">
      <div>
        <p className="text-lg font-semibold text-gray-800">
          Page {currentPage} of {TotalPages}
        </p>
      </div>
      <ul className="flex flex-wrap justify-center items-center gap-4 mt-4 sm:mt-0 border border-gray-400 shadow-md py-1 px-2 rounded-lg">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            className="flex items-center justify-center py-2 px-4 rounded-lg bg-gray-200 text-gray-600 shadow-lg"
            title="Previous"
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        <div className="flex items-center justify-center gap-2">
          {pageNumber.map((page) => (
            <li key={page}>
              <button
                onClick={() => onPageChange(page)}
                className={`px-3 py-1 rounded-full text-xl font-semibold transition-all duration-300 ease-in-out transform ${
                  page === currentPage
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
            onClick={() => onPageChange(currentPage + 1)}
            className="flex items-center justify-center py-2 px-4 rounded-lg bg-gray-200 text-gray-600"
            title="Next"
            disabled={currentPage === TotalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
