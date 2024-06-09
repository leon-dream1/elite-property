/* eslint-disable react/prop-types */
const ReviewDataRow = ({ review, index, handleReview }) => {
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
            {review?.property_title}
          </p>
        </div>
      </td>
      <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{review?.agent_name}</p>
      </td>
      <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {review?.review_time}
        </p>
      </td>
      <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap font-open-sans text-[16px] ">
          {review?.review_description}
        </p>
      </td>
      <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => handleReview(review?._id)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Delete</span>
        </button>
      </td>
    </tr>
  );
};

export default ReviewDataRow;
