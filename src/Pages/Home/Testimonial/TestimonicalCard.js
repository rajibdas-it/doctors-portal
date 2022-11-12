import React from "react";

const TestimonicalCard = ({ review }) => {
  const { name, img, location, msg } = review;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="mb-9">{msg}</p>
        <div className=" flex items-center gap-3">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="">
            <h1>{name}</h1>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonicalCard;
