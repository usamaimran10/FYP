import React from "react";
import Navbar from "./Navbar";
import Heading from "./Heading";
import ProductDetails from "./ProductDetails";

const SpecificProduct = () => {
  console.log("hello");
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Navbar />
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <Heading />
        </div>
        <div
          className="row"
          style={{
            marginTop: "40px",
          }}
        >
          <ProductDetails />
        </div>
      </div>
    </>
  );
};

export default SpecificProduct;
