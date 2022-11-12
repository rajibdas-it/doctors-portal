import React from "react";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Exception from "../Exception/Exception";
import HomeAppointment from "../HomeAppointment/HomeAppointment";
import InfoCards from "../InfoCard/InfoCards";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Exception></Exception>
      <HomeAppointment></HomeAppointment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
