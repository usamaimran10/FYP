import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { VscArrowSmallRight } from "react-icons/vsc";
import { FaUserCircle } from "react-icons/fa";
const History = () => {
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
            backgroundColor: "#EEEEEE",
            color: "#393E46",
            width: "250px",
            height: "200px",
            marginLeft: "30px",
            borderRadius: "10px",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              marginLeft: "40px",
              marginTop: "17px",
              fontWeight: "bold",
              color: "#00ADB5",
            }}
          >
            Orders in Queue
          </h3>
          <div style={{ display: "inline-flex" }}>
            {/* <GoPrimitiveDot style={{ marginTop: "10px" }} /> */}
            <h3 style={{ fontWeight: "bold" }}>Stairs Grill</h3>
            <p style={{ marginTop: "30px" }}>
              See More
              <VscArrowSmallRight style={{}} />
            </p>
          </div>
          <div style={{ display: "inline-flex" }}>
            {/* <GoPrimitiveDot style={{ marginTop: "10px" }} /> */}
            <h3 style={{ fontWeight: "bold" }}>Doors</h3>
            <p style={{ marginTop: "30px" }}>
              See More
              <VscArrowSmallRight style={{}} />
            </p>
          </div>
        </div>

        <div
          className="hired"
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
              marginLeft: "40px",
              marginTop: "17px",
              fontWeight: "bold",
              color: "#00ADB5",
            }}
          >
            Pending Orders
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
              Ahmed Liaqat
            </h3>
          </div>
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
              Mohammad Annus
            </h3>
          </div>
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
              Mutahir Husnain
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
            Earnings
          </h3>
          <div style={{}}>
            <h3
              style={{
                fontSize: "16px",

                marginLeft: "10px",
              }}
            >
              Total Orders Completed
            </h3>

            <h3
              style={{
                textAlign: "center",
                fontWeight: "bold",

                border: "none",
              }}
            >
              28
            </h3>
            <h3
              style={{
                fontSize: "16px",

                marginLeft: "10px",
              }}
            >
              Total Earnings
            </h3>
            <h3
              style={{
                textAlign: "center",
                fontWeight: "bold",

                border: "none",
              }}
            >
              RS.32000
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
