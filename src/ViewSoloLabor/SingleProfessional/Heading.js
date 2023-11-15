import React, { useState, useEffect } from "react";
import "./Heading.css";
import { Form } from "react-bootstrap";
import axios from "axios";
const Heading = () => {
  const [count, setCount] = useState(0);
  const GotoCart = () => {
    window.location.href = "./Cart";
  };
  useEffect(() => {
    // Retrieve the object from storage
    let cart = localStorage.getItem("cart");
    console.log("this is cart", cart);
    setCount(cart.length);
  }, []);
  return (
    <div className="HeadingCmpt">
      <h1
        style={{
          fontWeight: "bold",
          color: "#00ADB5",
          fontSize: "3rem",
          marginTop: "20px",
        }}
      >
        Information of Your Desired Professional
      </h1>
    </div>
  );
};

export default Heading;
