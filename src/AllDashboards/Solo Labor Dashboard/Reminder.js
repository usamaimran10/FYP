import React from "react";

import { BsCardImage } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
const Reminder = () => {
  return (
    <div>
      <h1
        style={{
          marginLeft: "250px",
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
          <div>
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
                marginLeft: "30px",
                border: "none",
                color: "#EEEEEE",
              }}
            >
              Verified
            </button>
            <label style={{ marginLeft: "30px", fontWeight: "bold" }}>
              50 Pieces
            </label>
            <label style={{ marginLeft: "30px", fontWeight: "bold" }}>
              October 12,2021
            </label>

            <br />
            <div>
              <ImLocation style={{ marginLeft: "60px" }} />
              <label style={{ cursor: "pointer", marginLeft: "10px" }}>
                Karachi DHA Phase 6
              </label>
              <br />
            </div>
            <label style={{ marginLeft: "70px", marginTop: "10px" }}>
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
            float: "right",
          }}
        >
          <label style={{ marginLeft: "20PX", marginTop: "10px" }}>
            Asking Price
          </label>
          <br />
          <h1 style={{ marginLeft: "20PX" }}>Rs.2300</h1>

          <button
            style={{
              backgroundColor: "#393E46",
              borderRadius: "6px",
              marginLeft: "55px",
              border: "none",
              color: "#EEEEEE",
            }}
          >
            Remove
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
          <div>
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
                marginLeft: "30px",
                border: "none",
                color: "#EEEEEE",
              }}
            >
              Verified
            </button>
            <label style={{ marginLeft: "30px", fontWeight: "bold" }}>
              50 Pieces
            </label>
            <label style={{ marginLeft: "30px", fontWeight: "bold" }}>
              October 12,2021
            </label>

            <br />
            <div>
              <ImLocation style={{ marginLeft: "60px" }} />
              <label style={{ cursor: "pointer", marginLeft: "10px" }}>
                Karachi DHA Phase 6
              </label>
              <br />
            </div>
            <label style={{ marginLeft: "70px", marginTop: "10px" }}>
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
            float: "right",
          }}
        >
          <label style={{ marginLeft: "20PX", marginTop: "10px" }}>
            Asking Price
          </label>
          <br />
          <h1 style={{ marginLeft: "20PX" }}>Rs.2300</h1>

          <button
            style={{
              backgroundColor: "#393E46",
              borderRadius: "6px",
              marginLeft: "55px",
              border: "none",
              color: "#EEEEEE",
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reminder;
