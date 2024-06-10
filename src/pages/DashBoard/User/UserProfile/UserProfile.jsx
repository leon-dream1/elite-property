import { Helmet } from "react-helmet";
import { useAuth } from "../../../../hooks/useAuth";
import useRole from "../../../../hooks/useRole";

const UserProfile = () => {
  const { user, loading } = useAuth() || {};
  const [role] = useRole();

  if (loading)
    return (
      <div className="w-full max-w-lg mx-auto animate-pulse p-9 mt-[300px]">
        <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>

        <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
      </div>
    );

  return (
    <div className="flex justify-center items-center h-screen">
      <Helmet>
        <title>My Profile</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-2xl w-4/5 lg:w-3/5">
        <img
          alt="profile"
          src="https://i.ibb.co/NrHhF9b/abstract-smooth-dark-blue-with-black-vignette-studio-well-use-as-background-business-report-digital.jpg"
          className="w-full mb-4 rounded-t-lg h-36"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          {role !== "user" && (
            <p className="p-2 uppercase px-4 text-xs text-white bg-pink-500 rounded-full">
              {role}
            </p>
          )}

          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                <span className="font-bold text-black ">
                  Name: {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                <span className="font-bold text-black ">
                  Email: {user?.email}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
