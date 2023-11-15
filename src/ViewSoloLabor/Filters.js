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
      <h1 style={{ fontSize: "3rem", marginTop: "20PX" }}>Filters</h1>
      <div className="dropdown">
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
        <div
          className={`dropdown-menu ${dropdown ? "show" : ""}`}
          aria-labelledby="dropdownMenuButton"
        >
          <a className="dropdown-item" href="#">
            Delete
          </a>
          <a className="dropdown-item" href="#">
            Pin to your Profile
          </a>
        </div>
      </div>

      <div style={{ cursor: "pointer", fontSize: "1.5rem" }}>
        <br />
        <p style={{ fontWeight: "bold" }}>Price Range</p>

        <p>
          <a>Under 25$</a>
        </p>
        <p>
          <a>25$ to 50$</a>
        </p>
        <p>
          <a>50$ to 100$</a>
        </p>
        <p>
          <a>100$ to 200$</a>
        </p>
      </div>
      <input type="text" placeholder="$Min" style={{ fontSize: "1.5rem" }} />
      <br />

      <input
        type="text"
        placeholder="$Max"
        style={{ marginTop: "10px", fontSize: "1.5rem" }}
      />
      <br />
      <div style={{ marginTop: "15px" }}>
        <label style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Rating</label>
        <input
          type="text"
          placeholder="1-5"
          style={{ width: "40px", marginLeft: "10px", fontSize: "1.5rem" }}
        />
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
      </div>
      <button className="btn btn-primary" style={{ fontSize: "1.5rem" }}>
        Search
      </button>
    </>
  );
};

export default Filters;
