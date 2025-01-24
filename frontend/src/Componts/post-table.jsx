import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const PostTable = () => {
  const items = [1, 2, 3, 4, 5];
  return (
    <table className="table-auto border-collapse border border-gray-200 w-full text-sm bg-white rounded-lg shadow container mx-auto">
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
        {items.map(() => (
          <>
            {" "}
            <tr className="hover:bg-gray-50 transition duration-300 ease-in-out">
              <td className="border border-gray-200 px-6 text-center">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.IhGijgoVTEs0_4rPuUXboQHaE8&pid=Api&P=0&h=180"
                  alt="Profile"
                  className="w-15 h-15 object-cover rounded-full border-4 border-purple-300 shadow-lg m-1"
                />
              </td>
              <td className="border border-gray-200 px-6  text-gray-700 font-medium">
                Sample Title
              </td>
              <td className="border border-gray-200 px-6  text-gray-600">
                This is a sample description for the table item. Add any
                relevant details here.
              </td>
              <td className="border border-gray-200 px-6  text-center">
                <div className="flex justify-center gap-6">
                  <button
                    className="text-blue-500 hover:text-blue-700 bg-blue-100 hover:bg-blue-200 p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
                    title="View"
                  >
                    <AiOutlineEye className="w-5 h-5" />
                  </button>
                  <button
                    className="text-yellow-500 hover:text-yellow-700 bg-yellow-100 hover:bg-yellow-200 p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
                    title="Edit"
                  >
                    <AiOutlineEdit className="w-5 h-5" />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700 bg-red-100 hover:bg-red-200 p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
                    title="Delete"
                  >
                    <AiOutlineDelete className="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default PostTable;
