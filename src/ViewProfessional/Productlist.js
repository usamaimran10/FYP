import React from "react";
import "./ProductList.css";
import { products } from "./MainPageProfessional";
import { propTypes } from "react-bootstrap/esm/Image";

const Productlist = (props) => {
  const AddtoCart = () => {
    console.log("inside Add to cart");
  };
  const goToSingleProfs = () => {
    window.location.href = `/singleProfs/${props.id}`;
    localStorage.setItem("ProfessionalID", props.id);
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
        <p style={{ fontSize: "1.5rem" }}>{props.detail}</p>
        <p style={{ fontSize: "1.5rem" }}>{props.price}</p>

        {/* <p style={{ fontSize: "1.5rem" }}>{props.id}</p> */}
        <p>
          <button
            className="btn-primary"
            style={{ border: "none", marginTop: "10px" }}
            onClick={goToSingleProfs}
            // onClick={() => {
            //   console.log({ props });
            //   props.handleChange(
            //     props.src,
            //     props.title,
            //     props.detail,
            //     props.user_id.phone
            //   );
            // }}
          >
            Hire Professional
          </button>
        </p>
      </div>
    </>
  );
};

export default Productlist;
