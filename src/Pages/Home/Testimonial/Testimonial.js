import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import quote from "../../../assets/icons/quote.svg";
import TestimonicalCard from "./TestimonicalCard";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      location: "California",
      msg: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      location: "California",
      msg: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      location: "California",
      msg: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
    },
  ];
  return (
    <div className="mt-20">
      <div className="mb-36 flex justify-between">
        <div>
          <h3 className="text-secondary text-xl font-bold mb-3">Testimonial</h3>
          <h1 className="text-4xl">What Our Patients Says</h1>
        </div>
        <div>
          <figure>
            <img src={quote} alt="" className="w-24 lg:w-48" />
          </figure>
        </div>
      </div>
      <div className="grid gap-14  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <TestimonicalCard key={review._id} review={review}></TestimonicalCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
