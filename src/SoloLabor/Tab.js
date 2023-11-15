import React from "react";
import { FaTools } from "react-icons/fa";

const Tab = (props) => {
  const gotoSoloLabor = () => {
    localStorage.setItem("SolCategory", props.name);
    window.location.href = "/AllSoloLabor";
  };
  return (
    <div>
      <div
        onClick={gotoSoloLabor}
        className="container"
        style={{
          width: "130px",
          height: "100px",
          backgroundColor: "#393e46",
          marginTop: "20px",
          marginLeft: "20px",
          textAlign: "center",
          cursor: "pointer",
          borderRadius: "10px",
        }}
      >
        <img
          src={props.img}
          style={{
            color: "#00ADB5",
            height: "50px",
            width: "50px",

            marginTop: "10px",
          }}
        ></img>
        <label style={{ color: "white", fontSize: "14px" }}>{props.name}</label>
      </div>
    </div>
  );
};

export default Tab;
