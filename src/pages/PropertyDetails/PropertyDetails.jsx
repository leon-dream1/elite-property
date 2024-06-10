import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import Modal from "react-modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Review from "./Review";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const PropertyDetails = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

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
      if (data.message) {
        toast.error(data.message);
      } else {
        toast.success("Successfully add to Wishlist");
      }
    },
  });

  const handleWishList = async (id) => {
    const wishProperty = {
      ...selectedProperty,
      wish_property_id: id,
      email: user?.email,
    };
    delete wishProperty?._id;
    await mutateAsync(wishProperty);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubmit = async (reviewData) => {
    const reviewInfo = {
      review_description: reviewData?.review_description,
      property_title: selectedProperty?.property_title,
      agent_name: selectedProperty?.agent_name,
      reviewer_name: user?.displayName,
      reviewer_email: user?.email,
      reviewer_image: user?.photoURL,
      property_id: selectedProperty?._id,
      review_time: new Date().toLocaleString(),
    };
    console.table(reviewInfo);

    const { data } = await axiosSecure.post("/review", reviewInfo);
    if (data?.insertedId) {
      toast.success("Thanks for your review");
      closeModal();
    }
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
          <button
            onClick={() => setIsOpen(true)}
            className="input input-bordered w-full bg-black text-white text-[22px] font-semibold font-playfair cursor-pointer"
          >
            Give a Review
          </button>
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <button
              className="bg-red-800 px-[20px] py-[10px] rounded text-white cursor-pointer"
              onClick={closeModal}
            >
              Close
            </button>
            <div className="mt-4 w-[400px]">
              <p className="text-center font-playfair mb-4 font-semibold text-xl">
                {selectedProperty?.property_title}
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-[20px]"
              >
                <div>
                  <input
                    type="textarea"
                    placeholder="Description"
                    className="input input-bordered w-full"
                    required
                    {...register("review_description")}
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    value="Submit"
                    className="input input-bordered w-full bg-black text-white text-[22px] font-semibold font-playfair cursor-pointer"
                  />
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </div>
      <Review id={selectedProperty?._id} />
    </div>
  );
};

export default PropertyDetails;
