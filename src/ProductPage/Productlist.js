import React, { useState, useEffect } from "react";
import "./ProductList.css";
import { products } from "./MainPage";
import { propTypes } from "react-bootstrap/esm/Image";
import axios from "axios";

const Productlist = ({ product, handleChange }) => {
  const gotoSpecificProd = () => {
    window.location.href = `/specificProduct/${product._id}`;
    localStorage.setItem("prodID", product._id);
  };
  const AddtoCart = () => {
    //console.log(item);
    console.log("inside Add to cart");
  };

  return (
    <>
      <div
        className="ProductCard"
        style={{ cursor: "pointer", height: "100%" }}
      >
        <img
          onClick={gotoSpecificProd}
          classname="productImage"
          src={product.main_image}
          alt="Denim Jeans"
          style={{ width: "100%", borderRadius: "10PX", cursor: "pointer" }}
        />
        <h1>{product.prod_brand}</h1>
        <p style={{ fontSize: "1.5rem" }}>
          {product.prod_detail_desc.substring(
            0,
            Math.min(20, product.prod_detail_desc.length)
          )}
          {product.prod_detail_desc.length > 20 ? "..." : ""}
        </p>
        <p style={{ fontSize: "1.5rem" }}>
          <span>Price:</span>
          {product.prod_price}
        </p>
        <p style={{ fontSize: "1.5rem" }}>
          <span>Quantity</span>
          {product.quantity}
        </p>
        {/* <p style={{ fontSize: "1.5rem" }}>{props.id}</p> */}
        <p>
          <button
            className="btn-primary"
            style={{ border: "none" }}
            onClick={() => {
              console.log("products", product);
              handleChange((prev) => [...prev, product]);
            }}
          >
            Add to Cart
          </button>
        </p>
      </div>
    </>
  );
};

export default Productlist;
