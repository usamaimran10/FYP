import React from "react";
import "./Card.css";

const Card = ({ imgSrc, text, para }) => {
  return (
    <div className="Card">
      <div className="imageBox">
        <img
          src={imgSrc}
          alt="CardImage"
          style={{ width: "100%", height: "50%" }}
        />
        <div className="overlay"></div>
      </div>
      <div className="cardContent">
        <div className="text">{text}</div>
        <div className="Para">{para} </div>
      </div>
    </div>
  );
};

export default Card;
