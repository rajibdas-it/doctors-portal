import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import appointment from "../../../assets/images/appointment.png";

const HomeAppointment = () => {
  return (
    <div
      className="hero mt-40"
      style={{
        backgroundImage: `url(${appointment})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <img src={doctor} alt="" className="hidden lg:block lg:w-1/2 -mt-28" />
        <div className="text-white">
          <h3 className="text-secondary text-xl font-bold">Appointment</h3>
          <h1 className="text-5xl font-bold my-5">Make an appointment Today</h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn bg-gradient-to-r from-secondary to-primary border-none">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAppointment;
