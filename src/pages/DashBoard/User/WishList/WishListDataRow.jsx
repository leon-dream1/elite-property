import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const WishListDataRow = ({ property, handleRemove }) => {
  const navigate = useNavigate();
  return (
    <tr>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={property?.property_image}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <div className="">
          <p className="text-gray-900 whitespace-no-wrap">
            {property?.property_title}
          </p>
        </div>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{property?.location}</p>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {property?.agent_name}
        </p>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={property?.agent_image}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap font-open-sans text-[16px]">
          ${property?.price_range.min} - ${property?.price_range.max}
        </p>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <p
          className={`rounded text-center text-[12px] py-2 text-white uppercase whitespace-no-wrap ${
            property?.status === "pending" && "bg-orange-400"
          } ${property?.status === "verified" && "bg-green-400"} ${
            property?.status === "rejected" && "bg-red-400"
          }`}
        >
          {property?.status}
        </p>
      </td>

      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => navigate(`offer/${property?._id}`)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Make an Offer</span>
        </button>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => handleRemove(property?._id)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Remove</span>
        </button>
      </td>
    </tr>
  );
};

export default WishListDataRow;
