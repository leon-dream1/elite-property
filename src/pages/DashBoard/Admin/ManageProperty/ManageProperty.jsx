import { Helmet } from "react-helmet";
// import { useAuth } from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import AllPropertyDataRow from "./AllPropertyDataRow";
import { toast } from "react-toastify";
// import PropertyDataRow from "./PropertyDataRow";
// import { toast } from "react-toastify";

const ManageProperty = () => {
  //   const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  //   Fetch Property Data
  const { data: allProperty = [], refetch } = useQuery({
    queryKey: ["allProperty"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/allProperty`);
      return data;
    },
  });

  const handleVerifyOrRejectUser = async (id, status) => {
    console.log(id);
    try {
      const { data } = await axiosSecure.patch(`/property/${id}`, {
        status,
      });
      console.log(data);
      if (data.modifiedCount > 0) {
        refetch();
        if (status === "verified") {
          toast.success("This Property is Verified.....");
        } else {
          toast.error("This Property is Rejected.....");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>All Property</title>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Agent Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Agent Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Status
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

                  {allProperty.map((property) => (
                    <AllPropertyDataRow
                      key={property._id}
                      property={property}
                      handleVerifyOrRejectUser={handleVerifyOrRejectUser}
                      //   handleDelete={handleDelete}
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

export default ManageProperty;
