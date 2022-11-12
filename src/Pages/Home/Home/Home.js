import React from "react";
import Banner from "../Banner/Banner";
import Exception from "../Exception/Exception";
import HomeAppointment from "../HomeAppointment/HomeAppointment";
import InfoCards from "../InfoCard/InfoCards";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Exception></Exception>
      <HomeAppointment></HomeAppointment>
    </div>
  );
};

export default Home;
