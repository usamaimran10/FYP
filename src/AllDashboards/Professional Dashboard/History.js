import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { VscArrowSmallRight } from "react-icons/vsc";
import { FaUserCircle } from "react-icons/fa";
const History = () => {
  const inProgressBid = () => {
    window.location.href = "/inProgressBidProf";
  };
  return (
    <div>
      <h1
        style={{
          fontSize: "1.8rem",
          marginTop: "40px",
          marginLeft: "330px",
          color: "#393E46",
          fontWeight: "bold",
        }}
      >
        REMINDERS
      </h1>

      <div style={{ display: "inline-flex", marginTop: "20px" }}>
        <div
          className="history"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            backgroundColor: "#EEEEEE",
            color: "#393E46",
            width: "250px",
            height: "200px",
            marginLeft: "30px",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <h3
            style={{
              fontSize: "20px",

              fontWeight: "bold",
              color: "#00ADB5",
            }}
          >
            Orders in Queue
          </h3>
          <div style={{ display: "inline-flex" }}>
            {/* <GoPrimitiveDot style={{ marginTop: "10px" }} /> */}
            <label style={{ fontWeight: "bold", fontSize: "22px" }}>
              Constructions
            </label>
          </div>
          <div style={{ display: "inline-flex" }}>
            {/* <GoPrimitiveDot style={{ marginTop: "10px" }} /> */}
            <label
              style={{
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              Bridge
            </label>
          </div>
        </div>

        <div
          onClick={inProgressBid}
          className="hired"
          style={{
            backgroundColor: "#EEEEEE",
            color: "#393E46",
            width: "250px",
            height: "200px",
            marginLeft: "20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              textAlign: "center",
              marginTop: "17px",
              fontWeight: "bold",
              color: "#00ADB5",
            }}
          >
            In Progress Work
          </h3>
          <div style={{ display: "inline-flex" }}>
            <FaUserCircle
              style={{
                height: "20px",
                width: "20px",
                marginTop: "20px",
                marginLeft: "10px",
              }}
            />
            <h3
              style={{
                fontSize: "16px",
                marginTop: "17px",
                marginLeft: "10px",
              }}
            >
              Ahmed
            </h3>
          </div>
          <div style={{ display: "flex" }}>
            <FaUserCircle
              style={{
                height: "20px",
                width: "20px",
                marginTop: "20px",
                marginLeft: "10px",
              }}
            />
            <h3
              style={{
                fontSize: "16px",
                marginTop: "17px",
                marginLeft: "10px",
              }}
            >
              Ali
            </h3>
          </div>
          <div style={{ display: "flex" }}>
            <FaUserCircle
              style={{
                height: "20px",
                width: "20px",
                marginTop: "20px",
                marginLeft: "10px",
              }}
            />
            <h3
              style={{
                fontSize: "16px",
                marginTop: "17px",
                marginLeft: "10px",
              }}
            >
              Abdullah
            </h3>
          </div>
        </div>

        <div
          className="worker"
          style={{
            backgroundColor: "#EEEEEE",
            color: "#393E46",
            width: "250px",
            height: "200px",
            marginLeft: "20px",
            borderRadius: "10px",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              textAlign: "center",
              marginTop: "17px",
              fontWeight: "bold",
              color: "#00ADB5",
            }}
          >
            Upcoming Deadline
          </h3>
          <div style={{ display: "flex" }}>
            <h3
              style={{
                fontSize: "16px",
                fontSize: "22px",
                marginLeft: "40px",
                marginTop: "10px",
              }}
            >
              Today, 12:00PM
            </h3>
          </div>
          <div style={{ display: "inline-flex" }}>
            <h3
              style={{
                fontSize: "16px",
                marginTop: "20px",
                marginLeft: "10px",
                fontWeight: "bold",
                color: "#00ADB5",
              }}
            >
              Next Deadline
            </h3>
          </div>
          <div style={{ display: "inline-flex" }}>
            <h3
              style={{
                fontSize: "16px",
                textAlign: "center",
                marginLeft: "30px",
              }}
            >
              Wednesday 12, 12:00PM
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
