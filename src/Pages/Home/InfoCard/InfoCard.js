import React from "react";

const InfoCard = ({ card }) => {
  const { id, info, description, icon, bgClass } = card;
  return (
    <div className={`card card-side ${bgClass} shadow-xl py-12 px-8`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{info}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
