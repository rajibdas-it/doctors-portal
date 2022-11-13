import React from "react";
import PrimaryButton from "../../Components/PrimaryButton";

const AppointmentOptions = ({ AppointmentOption }) => {
  const { name, slots, _id } = AppointmentOption;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-secondary text-center text-2xl font-bold">
          {name}
        </h2>
        <p className="text-center my-3">
          {slots?.length > 0 ? slots[0] : "try another day"}
        </p>
        <p className="text-center">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <PrimaryButton>Book Appointment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
