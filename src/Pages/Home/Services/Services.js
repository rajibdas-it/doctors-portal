import React from "react";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceInfo = [
    {
      id: 1,
      title: "Fluoride Treatment",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: fluoride,
    },
    {
      id: 2,
      title: "Cavity Filling  ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: cavity,
    },
    {
      id: 3,
      title: "Teeth Whitening",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: whitening,
    },
  ];
  return (
    <div className="mt-32">
      <h3 className="font-bold text-secondary text-center text-xl mb-2">
        Our Services
      </h3>
      <h1 className="text-center text-4xl mb-8">Services We Provide</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceInfo.map((info) => (
          <ServiceCard key={info.id} info={info}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
