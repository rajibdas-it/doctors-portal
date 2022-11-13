import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOptions from "./AppointmentOptions";

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <div className="mt-64">
      <p className="text-center text-secondary text-xl">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-24">
        {appointmentOptions.map((option) => (
          <AppointmentOptions
            key={option._id}
            AppointmentOption={option}
          ></AppointmentOptions>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointments;
