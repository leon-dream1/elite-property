/* eslint-disable react/prop-types */
const AllUserDataRow = ({
  user,
  index,
  handleUserRole,
  handleUserDelete,
  handleFraud,
}) => {
  const blankSpace = (
    <>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <button
          // onClick={() => handleVerifyOrRejectUser(property?._id, "rejected")}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            //   className="absolute inset-0 bg-red-200 opacity-80 rounded-full"
          ></span>
          {/* <span className="relative">Mark as Fraud</span> */}
        </button>
      </td>
    </>
  );
  return (
    <tr>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <div className="">
          <p className="text-gray-900 whitespace-no-wrap">{index + 1}</p>
        </div>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <div className="">
          <p className="text-gray-900 whitespace-no-wrap font-open-sans font-bold">
            {user?.name}
          </p>
        </div>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.email}</p>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap font-semibold">
          {user?.role?.toUpperCase()}
        </p>
      </td>
      {user?.role !== "admin" && user?.status !== "fraud" ? (
        <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
          <button
            onClick={() => handleUserRole(user?._id, "admin")}
            className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-white leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-black opacity-80 rounded-full"
            ></span>
            <span className="relative">Make Admin</span>
          </button>
        </td>
      ) : user?.status === "fraud" ? (
        <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
          <button className="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-red-800 rounded-full"
            ></span>
            <span className="relative uppercase">{user?.status}</span>
          </button>
        </td>
      ) : (
        blankSpace
      )}

      {user?.role !== "agent" && user?.role !== "admin" ? (
        <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
          <button
            onClick={() => handleUserRole(user?._id, "agent")}
            className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-white leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-black opacity-80 rounded-full"
            ></span>
            <span className="relative">Make Agent</span>
          </button>
        </td>
      ) : (
        blankSpace
      )}
      {user.role === "agent" && user?.status !== "fraud" ? (
        <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
          <button
            onClick={() => handleFraud(user?.email, "fraud")}
            className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-red-200 opacity-80 rounded-full"
            ></span>
            <span className="relative">Mark as Fraud</span>
          </button>
        </td>
      ) : (
        blankSpace
      )}
      {user.role !== "admin" ? (
        <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
          <button
            onClick={() => handleUserDelete(user?._id)}
            className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-red-200 opacity-80 rounded-full"
            ></span>
            <span className="relative">Delete</span>
          </button>
        </td>
      ) : (
        blankSpace
      )}
    </tr>
  );
};

export default AllUserDataRow;
