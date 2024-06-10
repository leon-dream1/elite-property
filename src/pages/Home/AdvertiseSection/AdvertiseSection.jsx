import { useNavigate } from "react-router-dom";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AdvertiseSection = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const { data: advertiseProperty = [] } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/advertiseProperty`);
      return data;
    },
  });
  console.log(advertiseProperty);
  return (
    <div className="container mx-auto mt-[50px]">
      <h1 className="text-[25px] md:text-[40px] text-[#333333] text-center font-playfair mb-7">
        Advertise Property
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[50px] m-4 lg:mt-[100px]">
        {advertiseProperty.map((property) => (
          <div
            key={property?._id}
            className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg relative pb-10"
          >
            <img
              className="object-cover w-full h-56 cursor-pointer"
              onClick={() => navigate(`/property/${property?.property_id}`)}
              src={property.property_image}
              alt="avatar"
            />

            <div className="space-y-5 p-5">
              <h2 className="text-[20px] font-playfair font-bold text-[#003366] mb-2">
                {property?.property_title}
              </h2>
              <span className="bg-green-600 text-white text-[10px] px-[5px] lg:px-[5px] py-[5px] lg:py-[5px]">
                {property?.status}
              </span>
              <p className="text-[#333333] font-open-sans">
                Location : {property?.location}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={property?.agent_image}
                  alt=""
                  className="h-[50px] w-[50px] rounded-full"
                />
                <p className="text-[#333333] text-[16px] font-open-sans">
                  Agent: {property?.agent_name}
                </p>
              </div>
              <p className="text-[21px] pb-10">
                Price :
                <span className="text-[20px] text-[#333333] font-open-sans font-bold">
                  ${property?.price_range.min} - ${property?.price_range.max}
                </span>
              </p>
              <button
                onClick={() => navigate(`/property/${property?.property_id}`)}
                className="bg-black text-white text-[18px] py-[5px] lg:py-[15px]  rounded-md font-playfair hover:opacity-[0.8] w-full absolute bottom-[20px]"
              >
                View Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertiseSection;
