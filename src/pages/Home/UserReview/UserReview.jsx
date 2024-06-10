import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const UserReview = () => {
  // const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();


  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/allReviews`);
      return data;
    },
  });


  return (
    <div className="mt-[80px]">
      <h1 className="text-[40px] text-[#333333] text-center font-playfair mb-7">
        User Review
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review?._id}
            className="flex flex-col max-w-sm mx-4 my-6 shadow-lg animate__animated animate__fadeInLeft animate__delay-1s"
          >
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 dark:text-violet-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <p className="text-[30px] font-playfair">
                  {review?.review_description}
                </p>
                <p className="font-open-sans text-[12px]">
                  Review Date: {new Date(review?.review_time).toLocaleString()}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 dark:text-violet-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <p className="font-open-sans text-[13px] text-center text-gray-400 mb-1">
              This Review for : {review?.property_title} property
            </p>
            <div className="flex flex-row items-center justify-between p-8 rounded-b-lg dark:bg-black dark:text-gray-50">
              <p className="text-xl font-semibold ">{review.reviewer_name}</p>
              <div className="w-8 rounded-full" data-tooltip-id="my-tooltip">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={review?.reviewer_image}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReview;
