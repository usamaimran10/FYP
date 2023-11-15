import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = (props) => {
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [subCategory, setSubCategory] = useState();
  const [category, setCategory] = useState();
  const [phone, setPhone] = useState();

  let soloID = localStorage.getItem("SoloID");

  useEffect(async () => {
    console.log(soloID);
    const res = await axios.get(
      `http://localhost:5000/api/auth/viewprofessional/${soloID}`
    );
    setImage(res.data.user_id.image);
    setName(res.data.user_id.fullName);
    //setSubCategory(res.data.service_provider.sub_category);
    setCategory(res.data.category);
    setPhone(res.data.user_id.phone);
    console.log(res);
  }, []);
  return (
    <div style={{ marginLeft: "520px" }}>
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
        <h1 style={{ fontWeight: "bold", marginTop: "30px" }}> {name}</h1>
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
          {subCategory}
        </p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <h1>
          Category: <span style={{ fontWeight: "bold" }}>{category}</span>
        </h1>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <h1>
          Contact: <span style={{ fontWeight: "bold" }}>{phone}</span>
        </h1>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      ></div>
    </div>
  );
};

export default ProductDetails;
