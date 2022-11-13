import React from "react";
import PrimaryButton from "../../Components/PrimaryButton";

const AppointmentOptions = ({ AppointmentOption, setTreatment }) => {
  const { name, slots, _id } = AppointmentOption;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
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
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(AppointmentOption)}
            htmlFor="booking-modal"
            className="btn bg-gradient-to-r from-secondary to-primary border-none"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
