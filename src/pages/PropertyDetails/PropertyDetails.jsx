import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
// import "react-datepicker/dist/react-datepicker.css";
// import Modal from "react-modal";
// import { Helmet } from "react-helmet";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

// Modal.setAppElement("#root");

const PropertyDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  console.log("id", id);

  const { data: selectedProperty = {} } = useQuery({
    queryKey: ["property", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/property/${id}`);
      return data;
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (wishListData) => {
      const { data } = await axiosSecure.post(
        `/property/wishlist`,
        wishListData
      );
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.message) {
        toast.error(data.message);
      } else {
        toast.success("Successfully add to Wishlist");
      }
    },
  });

  const handleWishList = async (id) => {
    console.log(id);
    const wishProperty = {
      ...selectedProperty,
      email: user?.email,
    };
    delete wishProperty?._id;
    await mutateAsync(wishProperty);
  };

  return (
    <div className="container mx-auto mt-[100px] lg:mt-[100px]">
      <Helmet>
        <title>{`Property Details Of ${selectedProperty?._id}`}</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center m-[20px] lg:m-0">
        <div>
          <img
            src={selectedProperty?.property_image}
            alt=""
            className="rounded-md w-full"
          />
        </div>
        <div>
          <div className="mb-2">
            <span className="block text-[20px] md:[30px] lg:text-[40px] font-medium uppercase text-[#003366] font-playfair">
              {selectedProperty?.property_title}
            </span>
            <p className="pb-2 text-stone-600 font-open-sans">
              Location:
              <span className="text-[#FFAC41]">
                {selectedProperty?.location}
              </span>
            </p>
            <span className="bg-green-600 text-white text-[10px] px-[5px] lg:px-[5px] py-[5px] lg:py-[5px] pb-2">
              {selectedProperty?.status}
            </span>
            <span className="block text-[15px] md:[20px] lg:text-[20px] font-medium uppercase text-[#003366] font-playfair">
              Agent: {selectedProperty?.agent_name}
            </span>
            <h2 className="text-[25px] font-semibold  font-open-sans text-[#333333] pt-2">
              Price: ${selectedProperty?.price_range?.min} - $
              {selectedProperty?.price_range?.max}
            </h2>
          </div>

          <button
            onClick={() => handleWishList(selectedProperty?._id)}
            className="input input-bordered w-full bg-black text-white text-[22px] font-semibold font-playfair cursor-pointer mb-4 mt-4"
          >
            Add To WishList
          </button>
          <button className="input input-bordered w-full bg-black text-white text-[22px] font-semibold font-playfair cursor-pointer">
            Give a Review
          </button>

          {/* <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <button
              className="bg-red-800 px-[20px] py-[10px] rounded text-white cursor-pointer"
              onClick={closeModal}
            >
              Close
            </button>
            <div className="mt-4">
              <span className="block text-[20px] md:[35px] lg:text-[50px] font-medium tracking-widest uppercase dark:text-violet-600">
                {selectedRoom?.room_type}
              </span>
              <h2 className="text-[25px] font-semibold tracking-wide font-raleway text-blue-400 pt-2">
                Price per Night: ${selectedRoom.price_per_night}
              </h2>
              <p className="pb-6 text-stone-600 text-xl">
                Room size:
                <span className="text-[#FFAC41]">{selectedRoom.room_size}</span>
              </p>

              <p className="text-xl pb-6 text-stone-600">
                {selectedRoom.description}
              </p>
              <p className="text-xl font-von">
                Booking Date : {bookingDate?.toLocaleString()}
              </p>

              <div className="mt-6">
                <button
                  onClick={handleBooking}
                  className="input input-bordered w-full bg-[#425CEC] text-white text-[22px] font-semibold font-merriweather cursor-pointer"
                >
                  Confirm
                </button>
              </div>
            </div>
          </Modal> */}
          {/* <button
            // onClick={() => navigate(`/review/${selectedRoom?.room_id}`)}
            className="mt-5 input input-bordered w-full bg-[#425CEC] text-white text-[22px] font-semibold font-merriweather"
          >
            Give a Review
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
