import { useForm } from "react-hook-form";
import { useAuth } from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const AddProperty = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
    reset
  } = useForm();

  const { mutateAsync } = useMutation({
    mutationFn: async (propertyData) => {
      const { data } = await axiosSecure.post(`/property`, propertyData);
      return data;
    },
    onSuccess: () => {
      toast.success("Data is added wait for admin approval");
      reset()
    },
  });

  const onSubmit = async (data) => {
    const imgFile = { image: data?.image[0] };

    const { data: uploadedImg = "" } = await axiosPublic.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB_API}`,
      imgFile,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const property_image = uploadedImg.data.display_url;
    const price_range = {
      min: data?.min,
      max: data?.max,
    };
    delete data.image;
    delete data.min;
    delete data.max;
    console.log(data);

    //Main added property data
    const propertyData = {
      ...data,
      property_image,
      price_range,
      agent_image: user.photoURL,
      status: "pending",
    };

    await mutateAsync(propertyData);
  };

  console.log(errors);

  return (
    <div className="mt-[40px] md:p-[50px] lg:mt-[50px]">
      <h1 className="text-center text-[20px] md:text-[30px] lg:text-[40px] font-inter text-blue-700 font-medium mb-[40px]">
        Add Property Information
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto border rounded-lg p-[20px] md:p-[40px] lg:p-[80px]"
      >
        <div>
          <input
            type="text"
            defaultValue={user.displayName}
            readOnly
            className="input input-bordered w-full"
            {...register("agent_name")}
            required
          />
        </div>
        <div>
          <input
            type="email"
            defaultValue={user.email}
            className="input input-bordered w-full"
            {...register("agent_email")}
            readOnly
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Property Title"
            className="input input-bordered w-full"
            {...register("property_title")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Property location"
            className="input input-bordered w-full"
            {...register("location")}
            required
          />
        </div>
        <div>
          <input
            required
            type="file"
            id="profile"
            placeholder="Select"
            className="input input-bordered w-full pt-2"
            {...register("image")}
            accept="image/*"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Property Minimum Price"
            className="input input-bordered w-full"
            {...register("min")}
            required
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Property Maximum Price"
            className="input input-bordered w-full"
            {...register("max")}
            required
          />
        </div>
        <div className="md:col-span-2">
          <input
            type="submit"
            value="Add Property"
            className="input input-bordered w-full bg-[#425CEC] text-white text-[22px] font-semibold font-merriweather cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
