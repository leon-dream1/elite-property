/* eslint-disable react/prop-types */
const SoldPropertyDataRow = ({ property, index }) => {
  return (
    <tr>
      <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
        <div className="">
          <p className="text-gray-900 whitespace-no-wrap">{index + 1}</p>
        </div>
      </td>
      <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
        <div className="">
          <p className="text-gray-900 whitespace-no-wrap font-bold font-playfair">
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
        <p className="text-gray-900 whitespace-no-wrap font-open-sans text-[16px] font-black">
          ${property?.offered_price}
        </p>
      </td>
    </tr>
  );
};

export default SoldPropertyDataRow;
