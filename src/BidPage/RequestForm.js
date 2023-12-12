import React, { useState } from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import Jwt from "jsonwebtoken";

const RequestForm = () => {
  const [files, setFiles] = useState("");

  const submitBid = async (event) => {
    event.preventDefault();
    const varUser = localStorage.getItem("UserData");

    const parsedUser = JSON.parse(varUser);
    console.log("TOKEN", JSON.parse(varUser));
    const userId = Jwt.decode(parsedUser.token);
    // imp
    console.log("USER TOKEN DECODED", userId);

    console.log(userId);
    // Validate minprice and maxprice
    if (inputValues.minprice > inputValues.maxprice) {
      window.alert("Minimum price should not be greater than Maximum price");
      return;
    }

    if (inputValues.minprice < 0 && inputValues.maxprice < 0) {
      window.alert("price should be positive");
      return;
    }
    try {
      console.log({ inputValues });
      const res = await axios.post(
        "https://fyp-backend-gules.vercel.app/api/request/makerequest",
        {
          title: inputValues.title,
          description: inputValues.descp,
          duration: inputValues.duration,
          construction_type: inputValues.ConsType,
          professional_category: inputValues.categ,
          city: inputValues.city,
          location: inputValues.location,
          min_budget: inputValues.minprice,
          max_budget: inputValues.maxprice,
          area: inputValues.area,
          user_id: userId.id,
        }
      );
      console.log("data");
      console.log(res.data);
      window.alert("Successfull:Your Request Has been Submitted");
      window.location.href = "/homepage/customer";
    } catch (err) {
      console.log(err);
    }
  };

  const [inputValues, setInputValues] = React.useState({
    title: "",
    minprice: 0,
    descp: "",
    maxprice: 0,
    categ: "",
    ConsType: "",
    duration: "",
    city: "",
    location: "",
    area: "",
  });

  const handleChange = ({ target: { value } }, key) => {
    if (key === "duration" && parseInt(value) < 0) {
      // Validate days not negative
      window.alert("Days cannot be negative");
      return;
    }

    if (key === "city" && /\d/.test(value)) {
      // Validate city has no numbers
      window.alert("City cannot contain numbers");
      return;
    }
    setInputValues({ ...inputValues, [key]: value });
    console.log({ inputValues });
  };

  console.log({ inputValues });
  return (
    <div>
      <div
        className="container"
        style={{
          border: "5px solid #00ADB5",
          width: "600px",
          height: "100%",
          borderRadius: "10px",
          marginTop: "40px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <label
            style={{
              color: "#00ADB5",
              fontSize: "20px",
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            YOUR BID FORM
          </label>
        </div>
        <div style={{ display: "flex", marginLeft: "30px" }}>
          <form style={{ justifyContent: "center", marginTop: "30px" }}>
            <div class="form-group">
              <label
                for="exampleFormControlInput1"
                style={{
                  fontWeight: "bold",
                  color: "#393E46",
                  fontSize: "2rem",
                }}
              >
                Title
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={inputValues.title}
                onChange={(e) => handleChange(e, "title")}
                placeholder="Project Title"
                style={{ borderRadius: "20px", fontSize: "1.5rem" }}
              />
            </div>

            <div class="form-group">
              <label
                for="exampleFormControlInput1"
                style={{
                  fontWeight: "bold",
                  color: "#393E46",
                  fontSize: "2rem",
                }}
              >
                Construction Type
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={inputValues.ConsType}
                onChange={(e) => handleChange(e, "ConsType")}
                placeholder="Subject of your project"
                style={{ borderRadius: "20px", fontSize: "1.5rem" }}
              />
            </div>

            <div class="form-group">
              <label
                for="exampleFormControlSelect1"
                style={{
                  fontWeight: "bold",
                  color: "#393E46",
                  fontSize: "2rem",
                }}
              >
                Category
              </label>
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                defaultValue="Contractor"
                value={inputValues.categ}
                onChange={(e) => handleChange(e, "categ")}
                style={{ borderRadius: "20px", fontSize: "1.5rem" }}
              >
                <option></option>
                <option>Consultant</option>
                <option>Architecct</option>
                <option>Electrician</option>
                <option>Plumber</option>
                <option>Carpentor</option>
                <option>Painter</option>
                <option>Contractor</option>
              </select>
            </div>

            <div class="form-group">
              <label
                for="exampleFormControlTextarea1"
                style={{
                  fontWeight: "bold",
                  color: "#393E46",
                  fontSize: "2rem",
                }}
              >
                Description of your Bid
              </label>

              <textarea
                style={{ fontSize: "1.5rem" }}
                class="form-control"
                value={inputValues.descp}
                onChange={(e) => handleChange(e, "descp")}
                id="exampleFormControlTextarea1"
                rows="5"
              ></textarea>
            </div>
            <div>
              <label
                for="exampleFormControlInput1"
                style={{
                  fontWeight: "bold",
                  color: "#393E46",
                  fontSize: "2rem",
                }}
              >
                Price Range
              </label>
              <div style={{ display: "flex" }}>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={inputValues.minprice}
                  onChange={(e) => handleChange(e, "minprice")}
                  style={{
                    border: "0",
                    outline: "0",
                    background: "transparent",
                    borderBottom: "2px solid grey",
                    width: "100px",
                    fontSize: "2rem",
                  }}
                />
                <label
                  style={{
                    fontWeight: "bold",
                    color: "#393E46",

                    marginLeft: "20px",
                  }}
                >
                  to
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={inputValues.maxprice}
                  onChange={(e) => handleChange(e, "maxprice")}
                  style={{
                    border: "0",
                    outline: "0",
                    background: "transparent",
                    borderBottom: "2px solid grey",
                    width: "100px",
                    marginLeft: "20px",
                    fontSize: "2rem",
                  }}
                />
              </div>
            </div>
            <div style={{ marginTop: "30PX" }}>
              <label
                for="exampleFormControlInput1"
                style={{
                  fontWeight: "bold",
                  color: "#393E46",
                  fontSize: "2rem",
                }}
              >
                Days(required for work)
              </label>
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={inputValues.duration}
                  onChange={(e) => handleChange(e, "duration")}
                  style={{
                    border: "0",
                    outline: "0",
                    background: "transparent",
                    borderBottom: "2px solid grey",
                    width: "100px",
                    fontSize: "2rem",
                  }}
                />
              </div>
            </div>
            <div style={{ marginTop: "30PX" }}>
              <label
                for="exampleFormControlInput1"
                style={{
                  fontWeight: "bold",
                  color: "#393E46",
                  fontSize: "2rem",
                }}
              >
                City
              </label>
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  class="form-control"
                  value={inputValues.city}
                  onChange={(e) => handleChange(e, "city")}
                  id="exampleFormControlInput1"
                  style={{
                    border: "0",
                    outline: "0",
                    background: "transparent",
                    borderBottom: "2px solid grey",
                    width: "100px",
                    fontSize: "2rem",
                  }}
                />
              </div>
            </div>
            <div style={{ marginTop: "30PX" }}>
              <label
                for="exampleFormControlInput1"
                style={{
                  fontWeight: "bold",
                  color: "#393E46",
                  fontSize: "2rem",
                }}
              >
                Location
              </label>
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  class="form-control"
                  value={inputValues.location}
                  onChange={(e) => handleChange(e, "location")}
                  id="exampleFormControlInput1"
                  style={{
                    border: "0",
                    outline: "0",
                    background: "transparent",
                    borderBottom: "2px solid grey",
                    width: "300px",
                    fontSize: "2rem",
                  }}
                />
              </div>
            </div>
            <div style={{ marginTop: "30PX" }}>
              <label
                for="exampleFormControlInput1"
                style={{
                  fontWeight: "bold",
                  color: "#393E46",
                  fontSize: "2rem",
                }}
              >
                Area
              </label>
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  class="form-control"
                  value={inputValues.area}
                  onChange={(e) => handleChange(e, "area")}
                  id="exampleFormControlInput1"
                  style={{
                    border: "0",
                    outline: "0",
                    background: "transparent",
                    borderBottom: "2px solid grey",
                    width: "300px",
                    fontSize: "2rem",
                  }}
                />
              </div>
            </div>
            {/* <div style={{ marginTop: "30PX" }}>
              <label
                for="exampleFormControlInput1"
                style={{
                  fontWeight: "bold",
                  color: "#393E46",
                  fontSize: "2rem",
                }}
              >
                User Id
              </label>
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  style={{
                    border: "0",
                    outline: "0",
                    background: "transparent",
                    borderBottom: "2px solid grey",
                    width: "300px",
                    fontSize: "2rem",
                  }}
                />
              </div>
            </div> */}

            <div
              style={{
                justifyContent: "center",
                marginLeft: "200px",
                marginTop: "30px",
              }}
            >
              <button
                onClick={submitBid}
                style={{
                  backgroundColor: "#00ADB5",
                  border: "none",
                  borderRadius: "5PX",
                  color: "white",
                  fontSize: "2rem",
                  marginBottom: "20px",
                  padding: "10px",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <h1></h1>
      </div>
    </div>
  );
};
export default RequestForm;
