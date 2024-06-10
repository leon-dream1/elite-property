/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useRole from "../../hooks/useRole";

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  console.log("admin", role);

  if (isLoading)
    return (
      <div className="w-full max-w-lg mx-auto animate-pulse p-9 mt-[300px]">
        <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>

        <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
      </div>
    );
  if (role === "admin") return children;
  return <Navigate to="/dashboard" />;
};

export default AdminRoute;
