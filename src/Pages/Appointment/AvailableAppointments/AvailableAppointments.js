import { format } from "date-fns";
import React from "react";

const AvailableAppointments = ({ selectedDate }) => {
  return (
    <div className="mt-64">
      <p className="text-center text-secondary text-xl">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
    </div>
  );
};

export default AvailableAppointments;
