import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Heading from "./Heading";
import ProductDetails from "./ProductDetails";
import axios from "axios";
import { propTypes } from "react-bootstrap/esm/Image";
import { BsFillPersonPlusFill } from "react-icons/bs";

const SpecificProduct = () => {
  const [products, setproducts] = useState([]);
  const [cart, setCart] = useState([]);
  const handleCart = (src, title, detail, price) => {
    let obj = {
      src,
      title,
      detail,
      price,
    };
    setCart([...cart, obj]);
  };
  useEffect(() => {
    // Put the object into storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
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
