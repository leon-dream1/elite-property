import axios from "axios";

export const uploadImage = async (image) => {
  console.log(image);
  const formData = new FormData();
  formData.append('image', image);
  console.log(formData);

  try {
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB_API}`,
      formData,
    );
    return data.data.display_url;
  } catch (error) {
    console.log(error);
  }
};
