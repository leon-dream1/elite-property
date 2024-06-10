import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import AdvertisePropertyDataRow from "./AdvertisePropertyDataRow";
import { toast } from "react-toastify";

const AdvertiseProperty = () => {
  const axiosSecure = useAxiosSecure();

  //   Fetch Property Data
  const { data: advertiseProperty = [] } = useQuery({
    queryKey: ["advertiseProperty"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/allProperty`);
      return data;
    },
  });

  console.log(advertiseProperty);

  const handleAdvertise = async (property) => {
    const advertisePropertyData = {
      ...property,
      property_id: property?._id,
    };
    delete advertisePropertyData?._id;

    console.log(advertisePropertyData);
    try {
      const { data } = await axiosSecure.post(
        `/advertiseProperty`,
        advertisePropertyData
      );
      console.log(data);
      if (data.insertedId) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Advertise Property</title>
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
                      Agent Name
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
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {advertiseProperty.map((property) => (
                    <AdvertisePropertyDataRow
                      key={property._id}
                      property={property}
                      handleAdvertise={handleAdvertise}
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

export default AdvertiseProperty;
