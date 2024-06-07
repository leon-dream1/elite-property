// import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const PropertyBoughtDataRow = ({ property }) => {
  //   const navigate = useNavigate();
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
        <p className="text-gray-900 whitespace-no-wrap font-open-sans text-[16px]">
          ${property?.offered_price}
        </p>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <p
          className={`rounded text-center text-[12px] py-2 text-white uppercase whitespace-no-wrap ${
            property?.status === "pending" && "bg-orange-400"
          } ${property?.status === "accepted" && "bg-green-400"} ${
            property?.status === "rejected" && "bg-red-400"
          }`}
        >
          {property?.status}
        </p>
      </td>
      {property?.status === "accepted" ? (
        <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
          <button
            // onClick={() => navigate(`offer/${property?._id}`)}
            className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight font-open-sans"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-green-200 opacity-80"
            ></span>
            <span className="relative">PAY</span>
          </button>
        </td>
      ) : (
        ""
      )}
    </tr>
  );
};

export default PropertyBoughtDataRow;
