import { useForm } from "react-hook-form";
import { useAuth } from "../../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const Offer = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
    // reset,
  } = useForm();

  const { data: selectedOfferProperty = {} } = useQuery({
    queryKey: ["OfferedProperty", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/offerProperty/wishList/${id}`);
      return data;
    },
  });

  console.log("select", selectedOfferProperty);

  // post a offer
  const { mutateAsync } = useMutation({
    mutationFn: async (offeredDetails) => {
      const { data } = await axiosSecure.post(`/propertyOffer`, offeredDetails);
      return data;
    },
    onSuccess: (data) => {
      if (data.message) {
        toast.error(data.message);
      } else {
        toast.success("Your offer is saved. Wait for agent Approval");
      }
    },
  });

  const onSubmit = async (data) => {
    if (
      data.offered_price < selectedOfferProperty?.price_range?.min ||
      data.offered_price > selectedOfferProperty?.price_range?.max
    ) {
      toast.error("Price should be between range that are given");
      return;
    }

    const offeredDetails = {
      location: selectedOfferProperty?.location,
      property_title: selectedOfferProperty?.property_title,
      property_image: selectedOfferProperty?.property_image,
      agent_name: selectedOfferProperty?.agent_name,
      offered_price: data?.offered_price,
      buyer_name: data?.buyer_name,
      buyer_email: data?.buyer_email,
      status: "pending",
      offer_property_id: selectedOfferProperty?.wish_property_id,
    };

    console.table(offeredDetails);
    await mutateAsync(offeredDetails);
  };

  return (
    <div className="mt-[40px] md:p-[60px] lg:mt-[80px]">
      <h1 className="text-center text-[20px] md:text-[30px] lg:text-[40px] font-inter text-blue-700 font-medium mb-[40px]">
        Make an Offer for this Property
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto border rounded-lg p-[20px] md:p-[40px] lg:p-[80px]"
      >
        <div>
          <input
            type="text"
            readOnly
            defaultValue={selectedOfferProperty?.agent_name}
            className="input input-bordered w-full"
            {...register("agent_name")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            readOnly
            value={selectedOfferProperty?.property_title}
            className="input input-bordered w-full"
            {...register("property_title")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            readOnly
            value={selectedOfferProperty?.location}
            className="input input-bordered w-full"
            {...register("location")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            defaultValue={user.displayName}
            readOnly
            className="input input-bordered w-full"
            {...register("buyer_name")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            defaultValue={user.email}
            readOnly
            className="input input-bordered w-full"
            {...register("buyer_email")}
            required
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Offered An Amount"
            className="input input-bordered w-full"
            {...register("offered_price")}
            required
          />
        </div>
        <div className="md:col-span-2">
          <input
            type="submit"
            value="Make An Offer"
            className="input input-bordered w-full bg-black text-white text-[22px] font-semibold font-playfair cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default Offer;
