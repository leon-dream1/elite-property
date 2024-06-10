import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import RequestedPropertyDataRow from "./RequestedPropertyDataRow";
import { toast } from "react-toastify";
import { useAuth } from "../../../../hooks/useAuth";

const RequestedProperty = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()

  //   Fetch Requested Property Data
  const { data: requestedProperty = [], refetch } = useQuery({
    queryKey: ["requested-property"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/requestedProperty/${user?.email}`);
      return data;
    },
  });

  const handleAcceptOrRejectPropertyRequest = async (id, status) => {
    try {
      const { data } = await axiosSecure.patch(`/requestProperty/${id}`, {
        status,
      });
      if (data.modifiedCount > 0) {
        refetch();
        if (status === "accepted") {
          toast.success("This Property Request  is Accepted.....");
        } else {
          toast.error("This Property Request is Rejected.....");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Requested Property</title>
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
                      Buyer Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Buyer Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Offered Price
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

                  {requestedProperty.map((property) => (
                    <RequestedPropertyDataRow
                      key={property._id}
                      property={property}
                      handleAcceptOrRejectPropertyRequest={
                        handleAcceptOrRejectPropertyRequest
                      }
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

export default RequestedProperty;
