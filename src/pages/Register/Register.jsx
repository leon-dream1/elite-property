import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { uploadImage } from "../../api/ImageUpload";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { user, createUser, updateUserProfile, setUser, setLoading } =
    useAuth();

  const onSubmit = async (data) => {
    console.log(data);

    const photoURL = await uploadImage(data.image[0]);
    console.log(photoURL);

    const { name, email, password } = data;
    createUser(email, password)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        toast.success("Your Registration is successful.........");
        updateUserProfile(name, photoURL)
          .then(() => {
            setUser(result.user);
            setLoading(false);
            toast.success("Update is saved successfully......");
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  if (user) return <Navigate to={"/"} replace />;

  return (
    <div
      className="flex w-full max-w-md mx-auto overflow-hidden bg-white 
    rounded-lg shadow-lg lg:max-w-7xl h-[500px] mt-[50px] lg:mt-[150px]"
    >
      <div
        className="hidden bg-cover lg:block lg:w-1/2"
        style={{ backgroundImage: "url('/register.jpg')" }}
      ></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        {/* <Helmet>
          <title>Register</title>
        </Helmet> */}
        <p className="mt-3 text-xl text-center text-black mb-4">
          Welcome back! Register To Continue
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-[20px]">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
              {...register("name")}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              {...register("email")}
              required
            />
          </div>
          <div className="">
            <input
              type="password"
              placeholder="Type Your Password"
              className="input input-bordered w-full"
              required
              {...register("password", {
                pattern:
                  /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]).{6,}$/,
              })}
            />
          </div>
          {errors.password ? (
            <span className="text-red-700">
              Password should have an Uppercase letter, a special character and
              at least 6 character
            </span>
          ) : (
            ""
          )}
          <div>
            <label htmlFor="image" className="block mb-2 text-sm">
              Select Profile:
            </label>
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
              type="submit"
              value="Register"
              className="input input-bordered w-full bg-[#425CEC] text-white text-[22px] font-semibold font-merriweather cursor-pointer"
            />
          </div>
        </form>
        <div className="space-x-5 text-center mt-2">
          <span className="text-[16px] text-[#131313] font-inter">
            Already Have an Account?
          </span>
          <span
            onClick={() => navigate("/login")}
            className="text-[18px] text-blue-600 font-semibold underline font-montserrat cursor-pointer"
          >
            Log in
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
