import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
// import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useAuth } from "../../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const UpdateMyAddedProperty = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
    // reset,
  } = useForm();

  // Find the property which have to update
  const { data: updatedProperty = {}, refetch } = useQuery({
    queryKey: ["updateProperty", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/property/${id}`);
      return data;
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
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
      min: data?.min ? data?.min : updatedProperty?.price_range?.min,
      max: data?.max ? data?.max : updatedProperty?.price_range?.max,
    };
    delete data.image;
    delete data.min;
    delete data.max;

    //Updated  property data
    const propertyData = {
      agent_name: user?.displayName,
      agent_email: user?.email,
      property_title: data?.property_title
        ? data?.property_title
        : updatedProperty?.property_title,
      location: data?.location ? data?.location : updatedProperty?.location,
      price_range,
      property_image,
      agent_image: user.photoURL,
      status: "pending",
    };
    console.log(propertyData);

    try {
      const { data } = await axiosSecure.put(`/property/${id}`, propertyData);
      console.log(data);
      if (data.modifiedCount > 0) {
        refetch();
        toast.success("Property data is updated successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-[40px] md:p-[60px] lg:mt-[80px]">
      <h1 className="text-center text-[20px] md:text-[30px] lg:text-[40px] font-inter text-blue-700 font-medium mb-[40px]">
        Update Property Information
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
            defaultValue={updatedProperty?.property_title}
            className="input input-bordered w-full"
            {...register("property_title")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Property location"
            defaultValue={updatedProperty?.location}
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
          <img
            id="previewImage"
            src={updatedProperty?.property_image}
            alt="Image"
            width="150"
            height="150"
          ></img>
        </div>
        <div>
          <input
            type="number"
            placeholder="Property Minimum Price"
            defaultValue={updatedProperty?.price_range?.min}
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
            defaultValue={updatedProperty?.price_range?.max}
            {...register("max")}
            required
          />
        </div>
        <div className="md:col-span-2">
          <input
            type="submit"
            value="Update Property"
            className="input input-bordered w-full bg-[#425CEC] text-white text-[22px] font-semibold font-merriweather cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateMyAddedProperty;
