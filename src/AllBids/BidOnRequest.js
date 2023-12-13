import React, { useEffect, useState } from "react";
import axios from "axios";
import Jwt from "jsonwebtoken";

const BidOnRequest = () => {
  const ReqId = localStorage.getItem("ReqID");

  const [response, setResponse] = useState();
  const [userID, setUserId] = useState();

  const ApplyBid = async (event) => {
    event.preventDefault();
    const varUser = localStorage.getItem("UserData");
    // const userId = Jwt.decode(varUser);
    // console.log(userId.id);
    const parsedUser = JSON.parse(varUser);
    console.log("TOKEN", JSON.parse(varUser));
    const userId = Jwt.decode(parsedUser.token);
    console.log(userId.id);
    setUserId(userId.id);
    // Validate minprice and maxprice
    if (parseInt(inputValues.minprice) > parseInt(inputValues.maxprice)) {
      window.alert("Minimum price should not be greater than Maximum price");
      return;
    }

    if (
      parseInt(inputValues.minprice) < 0 &&
      parseInt(inputValues.maxprice) < 0
    ) {
      window.alert("Price should be positive");
      return;
    }
    if (inputValues.duration <= 0) {
      window.alert("Days should be a positive number");
      return;
    }
    try {
      const res = await axios.post(
        " https://fyp-backend-gules.vercel.app/api/bid/bidonrequest",
        {
          description: inputValues.descp,
          duration: inputValues.duration,

          min_budget: inputValues.minprice,
          max_budget: inputValues.maxprice,

          gig_id: userId.id,
          professional_id: userId.id,
          request_id: ReqId,
        }
      );
      console.log("data");
      console.log(res.data);

      window.alert("Successfull");
      window.location.href = "/homepage/professional";
    } catch (err) {
      console.log(err);
    }
  };

  const getSpecificReq = async () => {
    try {
      const res = await axios.get(
        `https://fyp-backend-gules.vercel.app/api/request/openSpecificRequest/${ReqId}`
      );

      console.log(res.data);
      setResponse(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const [inputValues, setInputValues] = React.useState({
    minprice: 0,
    descp: "",
    maxprice: 0,

    duration: 0,
  });

  const handleChange = ({ target: { value } }, key) => {
    setInputValues({ ...inputValues, [key]: value });
  };
  useEffect(() => {
    getSpecificReq();
  }, []);
  return (
    <div>
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
              Your Bid Form
            </label>
          </div>
          <div style={{ display: "flex", marginLeft: "30px" }}>
            <form style={{ justifyContent: "center", marginTop: "30px" }}>
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
                    type="number"
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

              {/* <div style={{ marginTop: "30PX" }}>
                <label
                  for="exampleFormControlInput1"
                  style={{
                    fontWeight: "bold",
                    color: "#393E46",
                    fontSize: "2rem",
                  }}
                >
                  Professional Id
                </label>
                <div style={{ display: "flex" }}>
                  <input
                    type="text"
                    value={userID}
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
                  onClick={ApplyBid}
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
                  BID
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default BidOnRequest;
