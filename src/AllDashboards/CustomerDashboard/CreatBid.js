import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillCollectionPlayFill, BsPencilSquare } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const CreatBid = (props) => {
  const GotoBid = () => {
    window.location.href = "/bid";
  };
  const gotoOffers = () => {
    window.location.href = "/allOffers";
  };

  return (
    <div>
      <h1
        style={{
          marginLeft: "40px",
          fontSize: "1.8rem",
          marginTop: "30px",
          color: "#393E46",
          fontWeight: "bold",
        }}
      >
        Your Dashboard
      </h1>

      <div style={{ display: "inline-flex" }}>
        <button
          style={{
            backgroundColor: "#00ADB5",
            border: "none",
            color: "white",
            marginLeft: "40px",
            padding: "10px 20px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "none",
            fontSize: "1.5rem",
          }}
          onClick={GotoBid}
        >
          Create Your Offer{" "}
          <BsPencilSquare
            style={{ width: "20px", height: "20px", marginLeft: "10px" }}
          />
        </button>
        <button
          style={{
            backgroundColor: "#00ADB5",
            border: "none",
            color: "white",
            marginLeft: "20px",
            padding: "10px 20px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "none",
            fontSize: "1.5rem",
          }}
          onClick={gotoOffers}
        >
          View Your Offers
          <IoIosArrowDropdownCircle
            style={{ width: "20px", height: "20px", marginLeft: "10px" }}
          />
        </button>

        <h3
          style={{
            marginLeft: "100px",
            marginTop: "30px",
            fontSize: "1.8rem",
            color: "#393E46",
          }}
        >
          Welcome,{props.name}
        </h3>
      </div>
    </div>
  );
};

export default CreatBid;
