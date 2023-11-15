import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillCollectionPlayFill, BsPencilSquare } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";
import { propTypes } from "react-bootstrap/esm/Image";

const CreateGig = (props) => {
  const GotoProfBid = () => {
    window.location.href = "/bidForProf";
  };
  const gotoUpdate = () => {
    window.location.href = "/updateProfessionalProfile";
  };
  const GotoSpecificProfBid = () => {
    window.location.href = "/specificProfbid";
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
          onClick={gotoUpdate}
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
        >
          Edit Your Profile{" "}
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
          onClick={GotoProfBid}
        >
          Requests for You
          <BiAddToQueue
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
            fontSize: "1.5rem",
          }}
          onClick={GotoSpecificProfBid}
        >
          View Your Bids
          <BiAddToQueue
            style={{ width: "30px", height: "30px", marginLeft: "10px" }}
          />
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

export default CreateGig;
