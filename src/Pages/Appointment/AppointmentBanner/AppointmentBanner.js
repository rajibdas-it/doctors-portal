import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import appointmentBg from "../../../assets/images/appointment.png";

// style={{ backgroundImage: `url(${appointmentBg})` }}

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header className="my-6">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} alt="" className="lg:w-1/2 rounded-lg shadow-2xl" />
          <div className="mr-6 bg-white p-6 rounded-md">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
