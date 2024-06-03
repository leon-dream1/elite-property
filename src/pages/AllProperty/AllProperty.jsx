import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useAuth } from "../../hooks/useAuth";

const AllProperty = () => {
  const [allProperty, setAllProperty] = useState([]);
  const navigate = useNavigate();
  const { loading } = useAuth();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProperty(data);
      });
  }, []);

  console.log(allProperty);

  //   const handleRating = (e) => {
  //     setSelectedRating(e.target.value);
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     axios
  //       .get(
  //         `https://hotello-booking-system-server.vercel.app/filterRoom?min=${value[0]}&max=${value[1]}&rating=${selectedRating}`
  //       )
  //       .then((res) => {
  //         setAllRoom(res.data);
  //       });
  //   };
  console.log(loading);
  if (loading)
    <div className="w-full max-w-lg mx-auto animate-pulse p-9 mt-[300px]">
      <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>

      <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
      <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
      <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
      <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    </div>;

  return (
    <div className="container mx-auto mt-[50px]">
      <Helmet>
        <title>All Property</title>
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[50px] m-4 lg:mt-[100px]">
        {allProperty.map((property) => (
          <div
            key={property?._id}
            className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg relative pb-10"
          >
            <img
              className="object-cover w-full h-56 cursor-pointer"
              onClick={() => navigate(`/property/${property?._id}`)}
              src={property.property_image}
              alt="avatar"
            />

            <div className="space-y-5 p-5">
              <h2 className="text-[20px] font-playfair font-bold text-[#003366] mb-2">
                {property?.property_title}
              </h2>
              <span className="bg-green-600 text-white text-[10px] px-[5px] lg:px-[5px] py-[5px] lg:py-[5px]">
                {property?.verification_status}
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
                onClick={() => navigate(`/property/${property?._id}`)}
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

export default AllProperty;
