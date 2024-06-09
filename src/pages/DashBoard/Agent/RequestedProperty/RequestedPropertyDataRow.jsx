/* eslint-disable react/prop-types */
const RequestedPropertyDataRow = ({
  property,
  handleAcceptOrRejectPropertyRequest,
}) => {
  return (
    <tr>
      <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
        <div className="">
          <p className="text-gray-900 whitespace-no-wrap">
            {property?.property_title}
          </p>
        </div>
      </td>
      <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{property?.location}</p>
      </td>
      <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {property?.buyer_name}
        </p>
      </td>
      <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {property?.buyer_email}
        </p>
      </td>

      <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap font-open-sans text-[16px]">
          ${property?.offered_price}
        </p>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <p
          className={`rounded text-center text-[12px] py-2 text-white uppercase whitespace-no-wrap ${
            property?.status === "pending" && "bg-orange-400"
          } ${
            (property?.status === "accepted" ||
              property?.status === "bought") &&
            "bg-green-400"
          } ${property?.status === "rejected" && "bg-red-400"}`}
        >
          {property?.status}
        </p>
      </td>

      {property?.status === "accepted" ||
        property?.status === "rejected" ||
        property?.status === "bought" || (
          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
            <button
              onClick={() =>
                handleAcceptOrRejectPropertyRequest(property?._id, "accepted")
              }
              className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
              ></span>
              <span className="relative">Accept</span>
            </button>
          </td>
        )}
      {property?.status === "accepted" ||
        property?.status === "rejected" ||
        property?.status === "bought" || (
          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
            <button
              onClick={() =>
                handleAcceptOrRejectPropertyRequest(property?._id, "rejected")
              }
              className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
              ></span>
              <span className="relative">Reject</span>
            </button>
          </td>
        )}
    </tr>
  );
};

export default RequestedPropertyDataRow;
