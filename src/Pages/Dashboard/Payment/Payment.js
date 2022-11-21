import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {
  const booking = useLoaderData();
  const { appointmentDate, treatmentName, appointmentShedhule, price } =
    booking;

  return (
    <div>
      <h1 className="text-3xl">payment for {treatmentName}</h1>
      <p>
        Please pay {price} for your appointment on {appointmentDate},
        {appointmentShedhule}
      </p>
      <div className="my-12 w-96 p-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
