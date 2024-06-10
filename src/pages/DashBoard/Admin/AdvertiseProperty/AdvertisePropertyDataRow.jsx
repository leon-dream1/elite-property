/* eslint-disable react/prop-types */
const AdvertisePropertyDataRow = ({ property,handleAdvertise }) => {
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
        <p className="text-gray-900 whitespace-no-wrap">
          {property?.agent_name}
        </p>
      </td>

      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap font-open-sans text-[16px]">
          ${property?.price_range.min} - ${property?.price_range.max}
        </p>
      </td>

      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => handleAdvertise(property)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Advertise</span>
        </button>
      </td>
    </tr>
  );
};

export default AdvertisePropertyDataRow;
