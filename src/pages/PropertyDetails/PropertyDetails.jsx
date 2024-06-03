import { useLoaderData, useParams } from "react-router-dom";
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
  const allProperty = useLoaderData();
  const { id } = useParams();
  console.log("id", id);

  const selectedProperty = allProperty.find(
    (property) => property?._id === parseInt(id)
  );
  console.log(selectedProperty);

  //   const { user } = useAuth();
  //   const navigate = useNavigate();
  //   const [bookingDate, setBookingDate] = useState(new Date().toLocaleString());
  //   const [modalIsOpen, setIsOpen] = useState(false);

  //   function openModal() {
  //     setIsOpen(true);
  //   }

  //   function closeModal() {
  //     setIsOpen(false);
  //   }

  //   const handleBookButton = () => {
  //     if (!user) {
  //       return navigate("/login");
  //     }
  //     openModal();
  //   };

  //   const handleBooking = () => {
  //     const bookingData = {
  //       room_type: selectedRoom.room_type,
  //       room_id: selectedRoom.room_id,
  //       description: selectedRoom.description,
  //       price_per_night: selectedRoom.price_per_night,
  //       room_size: selectedRoom.room_size,
  //       date: bookingDate,
  //       review: selectedRoom.review,
  //       images: selectedRoom.images,
  //       special_offers: selectedRoom.special_offers,
  //       email: user.email,
  //       displayName: user.displayName,
  //     };
  //     console.table(bookingData);

  //     axios
  //       .post(
  //         `https://hotello-booking-system-server.vercel.app/booking?id=${selectedRoom?._id}`,
  //         bookingData
  //       )
  //       .then((res) => {
  //         if (res.data.modifiedCount) {
  //           closeModal();
  //           toast("Congratulation!!!! Room is Booked For you");
  //           navigate("/myBooking");
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   };

  return (
    <div className="container mx-auto mt-[100px] lg:mt-[100px]">
      {/* <Helmet>
        <title>Property Details Of {selectedProperty?._id}</title>
      </Helmet> */}
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
              {selectedProperty?.verification_status}
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
            // onClick={handleBookButton}
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
