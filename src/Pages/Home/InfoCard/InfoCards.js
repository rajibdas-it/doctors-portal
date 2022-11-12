import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardInfo = [
    {
      id: 1,
      info: "Opening Hours",
      description: "Opening at 5 p.m",
      icon: clock,
      bgClass: "bg-gradient-to-r from-secondary to-primary",
    },
    {
      id: 2,
      info: "Visit Our Location",
      description: "Dhaka, Bangladesh",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      info: "Contact Us Now",
      description: "+880-1710-000000",
      icon: phone,
      bgClass: "bg-gradient-to-r from-secondary to-primary",
    },
  ];
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
      {cardInfo.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
