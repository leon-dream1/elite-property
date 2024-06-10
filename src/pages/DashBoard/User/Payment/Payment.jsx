import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_TEST_PK}`);

const Payment = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  // Find the property which have to pay
  const { data: property = {}, refetch } = useQuery({
    queryKey: ["payable-property", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/propertyOffer/payable/${id}`);
      return data;
    },
  });
  return (
    <div className="w-[400px] mx-auto mt-[100px]">
      <h2 className="text-[30px] font-playfair mb-[50px] text-center">Please Payment</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm property={property} refetch={refetch} />
      </Elements>
    </div>
  );
};

export default Payment;
