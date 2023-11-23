import React, { useState, useEffect } from "react";
import Jwt from "jsonwebtoken";
import axios from "axios";
import { BsCardImage } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
const Reminder = () => {
  // const [offers, setOffers] = useState([]);
  // const viewAllReq = async () => {
  //   const BidId = localStorage.getItem("BidID");
  //   const varUser = localStorage.getItem("UserData");
  //   const userId = jwt_decode(varUser);
  //   console.log(userId.id);

  //   console.log(BidId);

  //   try {
  //     const res = await axios.get(
  //       `https://fyp-backend-gules.vercel.app/api/request/viewByStatus/InProgress/${userId.id}`
  //     );
  //     console.log(res.data);
  //     setOffers(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   viewAllReq();
  // }, []);
  // console.log(offers);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "1.8rem",
          marginTop: "40px",
          color: "#393E46",
          fontWeight: "bold",
        }}
      >
        YOUR RECENT HISTORY
      </h1>

      <div className="recentBlocks" style={{ display: "inline-flex" }}>
        <div
          className="tab1"
          style={{
            backgroundColor: "#EEEEEE",
            width: "70%",
            color: "#393E46",
            height: "150px",
            marginLeft: "60px",
            marginTop: "30px",
            borderRadius: "10px",
          }}
        >
          <div style={{ fontSize: "1.8rem" }}>
            <BsCardImage
              style={{
                width: "40px",
                height: "40px",
                marginLeft: "10px",
                marginTop: "10px",
              }}
            />
            <label
              style={{
                fontWeight: "bold",
                marginLeft: "10px",
                fontSize: "20px",
              }}
            >
              Hammer
            </label>
            <button
              style={{
                backgroundColor: "#00ADB5",
                borderRadius: "6px",
                marginLeft: "20px",
                border: "none",
                color: "#EEEEEE",
              }}
            >
              Verified
            </button>
            <label style={{ marginLeft: "20px", fontWeight: "bold" }}>
              50 Pieces
            </label>
            <label style={{ marginLeft: "20px", fontWeight: "bold" }}>
              October 12,2021
            </label>

            <br />
            <div>
              <ImLocation style={{ marginLeft: "60px" }} />
              <label
                style={{
                  cursor: "pointer",
                  marginLeft: "10px",
                  marginTop: "30px",
                }}
              >
                Karachi DHA Phase 6
              </label>
              <br />
            </div>
            <label style={{ marginLeft: "70px", marginTop: "0px" }}>
              Product ID: 121-13567349-17
            </label>
            <button
              style={{
                backgroundColor: "#00ADB5",
                borderRadius: "6px",
                marginLeft: "30px",
                border: "none",
                color: "#EEEEEE",
              }}
            >
              Available
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#AAD8D3",
            width: "200px",
            height: "150px",
            marginLeft: "10px",
            marginTop: "30px",
            borderRadius: "10px",
            fontSize: "1.8rem",
          }}
        >
          <label style={{ marginLeft: "20PX", marginTop: "10px" }}>
            Price:
          </label>
          <br />
          <h1 style={{ marginLeft: "20PX" }}>Rs.2300</h1>

          <button
            style={{
              backgroundColor: "#393E46",
              borderRadius: "6px",
              marginLeft: "40px",
              border: "none",
              color: "#EEEEEE",
              marginBottom: "10PX",
              marginTop: "30px",
              padding: "5px",
            }}
          >
            Remove Item
          </button>
        </div>
      </div>

      <div className="recentBlocks" style={{ display: "inline-flex" }}>
        <div
          className="tab1"
          style={{
            backgroundColor: "#EEEEEE",
            width: "70%",
            color: "#393E46",
            height: "150px",
            marginLeft: "60px",
            marginTop: "30px",
            borderRadius: "10px",
          }}
        >
          <div style={{ fontSize: "1.8rem" }}>
            <BsCardImage
              style={{
                width: "40px",
                height: "40px",
                marginLeft: "10px",
                marginTop: "10px",
              }}
            />
            <label
              style={{
                fontWeight: "bold",
                marginLeft: "10px",
                fontSize: "20px",
              }}
            >
              Hammer
            </label>
            <button
              style={{
                backgroundColor: "#00ADB5",
                borderRadius: "6px",
                marginLeft: "20px",
                border: "none",
                color: "#EEEEEE",
              }}
            >
              Verified
            </button>
            <label style={{ marginLeft: "20px", fontWeight: "bold" }}>
              50 Pieces
            </label>
            <label style={{ marginLeft: "20px", fontWeight: "bold" }}>
              October 12,2021
            </label>

            <br />
            <div>
              <ImLocation style={{ marginLeft: "60px" }} />
              <label
                style={{
                  cursor: "pointer",
                  marginLeft: "10px",
                  marginTop: "30px",
                }}
              >
                Karachi DHA Phase 6
              </label>
              <br />
            </div>
            <label style={{ marginLeft: "70px", marginTop: "0px" }}>
              Product ID: 121-13567349-17
            </label>
            <button
              style={{
                backgroundColor: "#00ADB5",
                borderRadius: "6px",
                marginLeft: "30px",
                border: "none",
                color: "#EEEEEE",
              }}
            >
              Available
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#AAD8D3",
            width: "200px",
            height: "150px",
            marginLeft: "10px",
            marginTop: "30px",
            borderRadius: "10px",
            fontSize: "1.8rem",
          }}
        >
          <label style={{ marginLeft: "20PX", marginTop: "10px" }}>
            Price:
          </label>
          <br />
          <h1 style={{ marginLeft: "20PX" }}>Rs.2300</h1>

          <button
            style={{
              backgroundColor: "#393E46",
              borderRadius: "6px",
              marginLeft: "40px",
              border: "none",
              color: "#EEEEEE",
              marginBottom: "10PX",
              marginTop: "30px",
              padding: "5px",
            }}
          >
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reminder;
