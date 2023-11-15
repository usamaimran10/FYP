import React from "react";

import { BsCardImage } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
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
            width: "500px",
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
                width: "30px",
                height: "30px",
                marginLeft: "10px",
              }}
            />
            <label
              style={{
                marginTop: "10px",
                marginLeft: "10px",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              House Construction
            </label>

            <FaCheckCircle
              style={{
                marginLeft: "30px",
                color: "#00ADB5",
                width: "30px",
                height: "30px",
              }}
            />
            <label style={{ marginLeft: "30px", fontWeight: "bold" }}>
              October 12,2021
            </label>

            <br />
            <div>
              <ImLocation style={{ marginLeft: "20px" }} />
              <label
                style={{
                  cursor: "pointer",
                  marginLeft: "10px",
                  marginTop: "20px",
                }}
              >
                Karachi DHA Phase 6
              </label>
              <br />
            </div>
            <label style={{ marginLeft: "20px", marginTop: "10px" }}>
              Product ID: 121-13567349-17
            </label>
            <BsFillStarFill style={{ color: "#00ADB5", marginLeft: "30px" }} />
            <BsFillStarFill style={{ color: "#00ADB5" }} />
            <BsFillStarFill style={{ color: "#00ADB5" }} />
            <BsFillStarFill style={{ color: "#00ADB5" }} />
            <BsFillStarFill style={{ color: "#00ADB5" }} />
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
          <label
            style={{
              marginLeft: "12px",
              fontWeight: "bold",
              fontSize: "32px",
            }}
          >
            Rs.1500000
          </label>

          <button
            style={{
              backgroundColor: "#393E46",
              borderRadius: "6px",
              marginLeft: "40px",
              border: "none",
              color: "#EEEEEE",
              marginBottom: "10PX",
              marginTop: "10px",
            }}
          >
            Clear History
          </button>
        </div>
      </div>
      <div className="recentBlocks" style={{ display: "inline-flex" }}>
        <div
          className="tab1"
          style={{
            backgroundColor: "#EEEEEE",
            width: "500px",
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
                width: "30px",
                height: "30px",
                marginLeft: "10px",
              }}
            />
            <label
              style={{
                marginTop: "10px",
                marginLeft: "10px",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              Bridge Construction
            </label>

            <FaCheckCircle
              style={{
                marginLeft: "30px",
                color: "#00ADB5",
                width: "30px",
                height: "30px",
              }}
            />
            <label style={{ marginLeft: "30px", fontWeight: "bold" }}>
              October 12,2021
            </label>

            <br />
            <div>
              <ImLocation style={{ marginLeft: "20px" }} />
              <label
                style={{
                  cursor: "pointer",
                  marginLeft: "10px",
                  marginTop: "20px",
                }}
              >
                Karachi DHA Phase 6
              </label>
              <br />
            </div>
            <label style={{ marginLeft: "20px", marginTop: "10px" }}>
              Product ID: 121-13567349-17
            </label>

            <BsFillStarFill style={{ color: "#00ADB5", marginLeft: "30px" }} />
            <BsFillStarFill style={{ color: "#00ADB5" }} />
            <BsFillStarFill style={{ color: "#00ADB5" }} />
            <BsFillStarFill style={{ color: "#00ADB5" }} />
            <BsFillStarFill style={{ color: "#00ADB5" }} />
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
          <label
            style={{
              marginLeft: "12px",
              fontWeight: "bold",
              fontSize: "32px",
            }}
          >
            Rs.1500000
          </label>

          <button
            style={{
              backgroundColor: "#393E46",
              borderRadius: "6px",
              marginLeft: "40px",
              border: "none",
              color: "#EEEEEE",
              marginBottom: "10PX",
              marginTop: "10px",
            }}
          >
            Clear History
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reminder;
