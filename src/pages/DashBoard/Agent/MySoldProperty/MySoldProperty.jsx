import { Helmet } from "react-helmet";
import { useAuth } from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SoldPropertyDataRow from "./SoldPropertyDataRow";

const MySoldProperty = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  //   Fetch Sold  Property Data
  const { data: soldProperty = [] } = useQuery({
    queryKey: ["sold-property", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/mySoldProperty/${user?.email}`);
      return data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>My Sold Property</title>
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
                      Sold Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Room row data */}

                  {soldProperty.map((property, index) => (
                    <SoldPropertyDataRow
                      key={property._id}
                      index={index}
                      property={property}
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

export default MySoldProperty;
