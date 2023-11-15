import React from "react";
import { FaTools } from "react-icons/fa";

const Tab = (props) => {
  const GotoProdCategory = () => {
    const category = props.name;
    localStorage.setItem("categoryName", props.name);
    console.log("inside function");
    if (category === "Hardware") {
      window.location.href = "/AllProductsPage";
    }
    if (category === "Material") {
      window.location.href = "/AllProductsPage";
    }

    if (category === "Kitchen") {
      window.location.href = "/AllProductsPage";
    }
    if (category === "Bathroom") {
      window.location.href = "/AllProductsPage";
    }
    if (category === "Outdoor") {
      window.location.href = "/AllProductsPage";
    }
    if (category === "Machinery") {
      window.location.href = "/AllProductsPage";
    }
    if (category === "Electric") {
      window.location.href = "/AllProductsPage";
    }
  };
  return (
    <>
      <div>
        <div
          className="container"
          onClick={GotoProdCategory}
          style={{
            width: "130px",
            height: "100px",
            backgroundColor: "#393e46",
            marginTop: "20px",
            marginLeft: "20px",
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
              marginLeft: "25px",
              marginTop: "5px",
            }}
          ></img>
          <div style={{ textAlign: "center" }}>
            <label
              style={{ color: "white", textAlign: "center", fontSize: "14px" }}
            >
              {props.name}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab;
