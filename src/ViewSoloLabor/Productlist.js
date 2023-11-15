import React from "react";
import "./ProductList.css";
import { products } from "./MainPageSoloLabor";
import { propTypes } from "react-bootstrap/esm/Image";

const Productlist = (props) => {
  const AddtoCart = () => {
    console.log("inside Add to cart");
  };
  const goToSingleProfs = () => {
    window.location.href = `/singleSoloLabor/${props.id}`;
    localStorage.setItem("SoloID", props.id);
  };
  return (
    <>
      <div className="ProductCard" style={{ height: "100%" }}>
        <img
          classname="productImage"
          src={props.src}
          alt="Denim Jeans"
          style={{ width: "100%", borderRadius: "10PX" }}
        />
        <h1>{props.title}</h1>
        <p style={{ fontSize: "1.5rem" }}>{props.title}</p>
        <p style={{ fontSize: "1.5rem" }}>{props.detail}</p>
        <p style={{ fontSize: "1.5rem" }}>{props.phone}</p>
        <p style={{ fontSize: "1.5rem" }}>{props.id}</p>
        <p>
          <button
            className="btn-primary"
            style={{ border: "none", marginTop: "10px" }}
            onClick={goToSingleProfs}
            // onClick={() => {
            //   props.handleChange(
            //     props.src,
            //     props.title,
            //     props.detail,
            //     props.user_id.phone
            //   );
            // }}
          >
            Hire Solo Labor
          </button>
        </p>
      </div>
    </>
  );
};

export default Productlist;
