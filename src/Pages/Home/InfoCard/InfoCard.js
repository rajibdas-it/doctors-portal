import React from "react";

const InfoCard = ({ card }) => {
  const { info, description, icon, bgClass } = card;
  return (
    <div className={`card md:card-side ${bgClass} shadow-xl py-12 px-8`}>
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
