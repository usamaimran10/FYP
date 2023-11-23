import React, { useState } from "react";
import axios from "axios";
import Jwt from "jsonwebtoken";
import { faAudioDescription } from "@fortawesome/free-solid-svg-icons";

const UploadSeller = () => {
  const sendtoThank = () => {
    window.location.href = "/test";
  };
  const [files, setFiles] = useState("");
  const [image, setImage] = useState("");
  const addtoProdtoDb = () => {
    const res = axios.post("http://localhost:5000/api/product/addproduct", {
      main_image: image,
      prod_desc: inputValues.title,
      prod_brand: inputValues.brand,
    });
  };
  const handleAddtoProduct = async () => {
    // const UserID = window.localStorage.getItem("UserData");
    // const decode = Jwt.decode(UserID.token);
    // console.log(decode.id);
    const varUser = window.localStorage.getItem("UserData");
    const parsedUser = JSON.parse(varUser);
    const userId = Jwt.decode(parsedUser.token);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/product/addproduct",
        {
          main_image: image,
          prod_desc: inputValues.title,
          prod_detail_desc: inputValues.descp,
          prod_price: inputValues.price,

          sold_by: userId,

          quantity: inputValues.quantity,
        }
      );
      console.log("data");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const [inputValues, setInputValues] = React.useState({
    title: "",
    price: 0,
    descp: "",
    quantity: 0,
    brand: "",
  });

  const handleChange = ({ target: { value } }, key) => {
    setInputValues({ ...inputValues, [key]: value });
  };

  const handleUpload = () => {
    const data = new FormData();
    data.append("file", files);
    data.append("upload_preset", "ivnkvkm8");

    axios
      .post("https://api.cloudinary.com/v1_1/niaxeecomsats/image/upload", data)
      .then((res) => {
        console.log(res);
        setImage(res.data.secure_url);
      });
  };

  console.log({ inputValues });

  return (
    <>
      <div
        className="container"
        style={{
          border: "5px solid #00ADB5",
          width: "800px",
          height: "100%",
          borderRadius: "10px",
          marginTop: "40px",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1
            style={{ fontSize: "3rem", color: "#393E46", fontWeight: "bold" }}
          >
            Please Upload Your Product Details
          </h1>
          <img
            src={image}
            style={{ width: "300px", height: "200px", marginTop: "30px" }}
          />
        </div>
        <div style={{ textAlign: "center", margin: "auto 0" }}>
          <h1>Product Picture</h1>
          <input
            type="file"
            style={{ marginTop: "30px", fontSize: "1.8rem" }}
            onChange={(e) => {
              setFiles(e.target.files[0]);
            }}
          />
          <button
            type="submit"
            onClick={handleUpload}
            style={{ fontSize: "1.8rem" }}
          >
            Upload Photo
          </button>
          <br />
          <div class="form-group">
            <label
              for="exampleFormControlInput1"
              style={{
                fontWeight: "bold",
                color: "#393E46",
                fontSize: "2rem",
                marginTop: "30px",
                float: "left",
              }}
            >
              Product Name
            </label>
            <input
              class="form-control"
              id="exampleFormControlInput1"
              value={inputValues.title}
              placeholder="Project Title"
              style={{ borderRadius: "20px", fontSize: "1.8rem" }}
              onChange={(e) => handleChange(e, "title")}
            />
          </div>
          <div class="form-group">
            <label
              for="exampleFormControlInput1"
              style={{
                fontWeight: "bold",
                color: "#393E46",
                fontSize: "2rem",
                marginTop: "30px",
                float: "left",
              }}
            >
              Price
            </label>
            <input
              class="form-control"
              value={inputValues.price}
              id="exampleFormControlInput1"
              placeholder="Your Price Range"
              style={{ borderRadius: "20px", fontSize: "1.8rem" }}
              onChange={(e) => handleChange(e, "price")}
            />
          </div>
          <div class="form-group">
            <label
              for="exampleFormControlInput1"
              style={{
                fontWeight: "bold",
                color: "#393E46",
                fontSize: "2rem",
                marginTop: "30px",
                float: "left",
              }}
            >
              Quantity
            </label>
            <input
              class="form-control"
              value={inputValues.quantity}
              id="exampleFormControlInput1"
              placeholder="Your Price Range"
              style={{ borderRadius: "20px", fontSize: "1.8rem" }}
              onChange={(e) => handleChange(e, "quantity")}
            />
          </div>
          <div class="form-group">
            <label
              for="exampleFormControlInput1"
              style={{
                fontWeight: "bold",
                color: "#393E46",
                fontSize: "2rem",
                marginTop: "30px",
                float: "left",
              }}
            >
              Your Company Name
            </label>
            <input
              class="form-control"
              value={inputValues.brand}
              id="exampleFormControlInput1"
              placeholder="Your Company or Shop Name"
              style={{ borderRadius: "20px", fontSize: "1.8rem" }}
              onChange={(e) => handleChange(e, "brand")}
            />
          </div>
          <div class="form-group">
            <label
              for="exampleFormControlTextarea1"
              style={{
                fontWeight: "bold",
                color: "#393E46",
                fontSize: "2rem",
                marginTop: "30px",
                float: "left",
              }}
            >
              Description of your Product
            </label>
            <textarea
              class="form-control"
              onChange={(e) => handleChange(e, "descp")}
              value={inputValues.descp}
              id="exampleFormControlTextarea1"
              rows="15"
            ></textarea>
          </div>
          <div>
            <button
              onClick={handleAddtoProduct}
              style={{
                backgroundColor: "#00ADB5",
                color: "white",
                fontSize: "1.8rem",
                border: "none",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadSeller;
