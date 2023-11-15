import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillCollectionPlayFill, BsPencilSquare } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const CreatBid = () => {
  const GotoBid = () => {
    window.location.href = "/bid";
  };
  const GotoWish = () => {
    window.location.href = "/wish";
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
          }}
          onClick={GotoBid}
        >
          Create Your Bid{" "}
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
          }}
          onClick={GotoWish}
        >
          WishList
          <IoIosArrowDropdownCircle
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
          }}
        >
          <BiSearchAlt style={{ width: "20px", height: "20px" }} />
        </button>
        <h3
          style={{
            marginLeft: "70px",
            marginTop: "30px",
            fontSize: "16px",
            color: "#393E46",
          }}
        >
          Welcome,Shazil
        </h3>
      </div>
    </div>
  );
};

export default CreatBid;
