import { Helmet } from "react-helmet";
import AllUserDataRow from "./AllUserDataRow";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  //get all user
  const { data: allUser = [], refetch } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/allUser`);
      return data;
    },
  });

  //    for update Role
  const { mutateAsync: updateUserRole } = useMutation({
    mutationFn: async ({ id, role }) => {
      const { data } = await axiosSecure.patch(`/user/${id}`, { role });
      return data;
    },
    onSuccess: () => {
      toast.success("User Role is Updated!!!!!!");
      refetch();
    },
  });

  // Delete user
  const { mutateAsync: deleteUser } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/user/${id}`);
      return data;
    },
    onSuccess: () => {
      toast.error("User Is deleted!!!!!!");
      refetch();
    },
  });

  const handleUserRole = async (id, role) => {
    await updateUserRole({ id, role });
  };

  const handleUserDelete = async (id) => {
    await deleteUser(id);
  };

  const handleFraud = async (email) => {
    const { data } = await axiosSecure.patch(`/fraudUser/${email}`, {
      status: "fraud",
    });
    refetch()
  };

  return (
    <div>
      <Helmet>
        <title>Manage User</title>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Room row data */}

                  {allUser.map((user, index) => (
                    <AllUserDataRow
                      key={user._id}
                      user={user}
                      index={index}
                      handleUserRole={handleUserRole}
                      handleUserDelete={handleUserDelete}
                      handleFraud={handleFraud}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
