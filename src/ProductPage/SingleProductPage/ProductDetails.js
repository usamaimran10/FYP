import React, { useEffect, useState } from "react";
import axios from "axios";
import { set } from "react-hook-form";

const ProductDetails = (props) => {
  const gotoProductList = () => {
    window.location.href = "/AllProductsPage";
  };
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();
  const [seller, setSeller] = useState();

  let prodID = localStorage.getItem("prodID");

  useEffect(async () => {
    console.log("This is prod id", prodID);
    const res = await axios.get(
      `http://localhost:5000/api/product/viewproduct/${prodID}`
    );
    setImage(res.data.main_image);
    setName(res.data.prod_brand);
    setDetail(res.data.prod_detail_desc);
    setPrice(res.data.prod_price);
    setSeller(res.data.sold_by.company_name);

    console.log("Res", res);
  }, []);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={image}
          style={{ borderRadius: "10px", width: "300px", height: "200px" }}
        ></img>
      </div>
      <div
        className="title"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h1 style={{ fontWeight: "bold", marginTop: "30px" }}>{name}</h1>
      </div>
      <div>
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "lighter",
            marginLeft: "200px",
            marginRight: "200px",
          }}
        >
          {detail}
        </p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <h1>
          Price Rs: <span style={{ fontWeight: "bold" }}>{price}</span>
        </h1>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <h1>
          Seller: <span style={{ fontWeight: "bold" }}>{seller}</span>
        </h1>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <button
          className="btn-primary"
          style={{
            border: "none",
            fontSize: "1.8rem",
            padding: "5px",
            marginBottom: "20px",
            borderRadius: "5px",
            width: "70px",
            backgroundColor: "#00ADB5",
          }}
          onClick={gotoProductList}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
