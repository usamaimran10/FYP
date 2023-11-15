import React, { useEffect, useState } from "react";
import axios from "axios";
import Jwt from "jsonwebtoken";

const ProductDetails = (props) => {
  const profsID = localStorage.getItem("ProfessionalID");
  const varUser = localStorage.getItem("UserData");

  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [ProUserid, setProUserid] = useState();
  const [category, setCategory] = useState();
  const [phone, setPhone] = useState();

  const gotoChat = async () => {
    const loginId = localStorage.getItem("ChatId");
    let res = await axios.post(`http://localhost:5000/api/chat/newChat`, [
      loginId,
      ProUserid,
    ]);

    console.log(res.data);
    window.location.href = `/inbox/${res.data._id}`;
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/gig/viewSpecificGig/${profsID}`)
      .then((res) => {
        console.log(res);
        console.log("this is prof id", res.data.service_provider.user_id._id);
        setImage(res.data.main_image);
        setName(res.data.gig_title);
        setProUserid(res.data.service_provider.user_id._id);
        setCategory(res.data.category);
        setPhone(res.data.price);
      });
  }, []);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={image} style={{ borderRadius: "10px" }}></img>
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
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
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
      >
        {/* <button
          onClick={gotoChat}
          className="btn-primary"
          style={{
            border: "none",
            fontSize: "1.8rem",
            padding: "5px",

            borderRadius: "5px",
          }}
        >
          Go to Chat Room
        </button> */}
      </div>
    </div>
  );
};

export default ProductDetails;
