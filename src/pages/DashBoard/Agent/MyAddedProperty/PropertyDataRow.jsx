/* eslint-disable react/prop-types */
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const PropertyDataRow = ({ property, handleDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const closeModal = () => {
    setIsOpen(false);
  };

  // for update modal
  return (
    <tr>
      <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
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
          {property?.agent_name}
        </p>
      </td>
      <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
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
      <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap font-open-sans text-[16px]">
          ${property?.price_range.min} - ${property?.price_range.max}
        </p>
      </td>
      <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
        <p
          className={`rounded text-center text-[12px] py-2 text-white uppercase whitespace-no-wrap ${
            property?.status === "pending" && "bg-orange-400"
          }`}
        >
          {property?.status}
        </p>
      </td>

      <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => navigate(`updateMyAddedProperty/${property?._id}`)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Update</span>
        </button>
      </td>
      <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Delete</span>
        </button>

        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleDelete={handleDelete}
          id={property?._id}
        />
      </td>
    </tr>
  );
};

// RoomDataRow.propTypes = {
//   room: PropTypes.object,
//   refetch: PropTypes.func,
//   handleDelete: PropTypes.func,
// };

export default PropertyDataRow;
