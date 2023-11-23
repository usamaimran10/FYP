import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

import { render } from "react-dom";

const Filters = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const toggleOpen = () => setDropdown(!dropdown);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const gotoCategory = () => {
    window.location.href = "/categoriesPage";
  };

  return (
    <>
      <div style={{ margin: "20px" }}>
        <button
          style={{
            fontSize: "2rem",
            backgroundColor: "#393E46",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
          }}
          onClick={gotoCategory}
        >
          {props.name}
        </button>
      </div>
    </>
  );
};

export default Filters;
