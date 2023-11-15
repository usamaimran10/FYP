import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillCollectionPlayFill, BsPencilSquare } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BsUpload } from "react-icons/bs";
import { RiEditBoxFill } from "react-icons/ri";

const UploadProduct = (props) => {
  const GotoGig = () => {
    window.location.href = "/sololaborGig";
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
            fontSize: "1.8rem",
          }}
          onClick={GotoGig}
        >
          Upload Your Gig{" "}
          <BsUpload
            style={{ width: "30px", height: "30px", marginLeft: "10px" }}
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
            fontSize: "1.8rem",
          }}
          onClick={GotoWish}
        >
          Edit Your Work
          <RiEditBoxFill
            style={{ width: "30px", height: "30px", marginLeft: "10px" }}
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
          Welcome,{props.name}
        </h3>
      </div>
    </div>
  );
};

export default UploadProduct;
