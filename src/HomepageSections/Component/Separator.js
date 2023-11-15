import React from "react";
import "./Separator.css";

const Separator = ({ text }) => {
  return (
    <div className="Separator" style={{ marginTop: "40px" }}>
      <h2 style={{ fontSize: "3rem", marginTop: "15px" }}>{text}</h2>
    </div>
  );
};

export default Separator;
