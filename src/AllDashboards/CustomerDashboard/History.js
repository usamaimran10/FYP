import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { VscArrowSmallRight } from "react-icons/vsc";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import Jwt from "jsonwebtoken";

const History = () => {
  const [offers, setOffers] = useState([]);
  const viewAllReq = async () => {
    const BidId = localStorage.getItem("BidID");
    const varUser = localStorage.getItem("UserData");
    const userId = Jwt.decode(varUser);

    try {
      const res = await axios.get(
        `http://localhost:5000/api/request/viewByStatus/InProgress/${userId.id}`
      );
      console.log(res.data);
      setOffers(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    viewAllReq();
  }, []);
  console.log(offers);
  const gotoHiredProfs = () => {
    window.location.href = "/hiredProfs";
  };
  return (
    <div>
      <h1
        style={{
          fontSize: "1.8rem",
          marginTop: "40px",
          textAlign: "center",
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
          <div style={{ textAlign: "center" }}>
            <h3
              style={{
                fontSize: "20px",

                marginTop: "17px",
                fontWeight: "bold",
                color: "#00ADB5",
              }}
            >
              Your Cart History
            </h3>
          </div>

          <div style={{ display: "inline-flex", marginTop: "10px" }}>
            {/* <GoPrimitiveDot style={{ marginTop: "30px" }} /> */}
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                marginTop: "20px",
              }}
            >
              Hammer
            </h3>
            <p style={{ marginTop: "40px", fontSize: "1.5rem" }}>
              See More
              <VscArrowSmallRight style={{}} />
            </p>
          </div>
          <div style={{ display: "inline-flex" }}>
            {/* <GoPrimitiveDot style={{ marginTop: "20px" }} /> */}
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                marginTop: "10px",
              }}
            >
              Ranch
            </h3>
            <p style={{ marginTop: "30px", fontSize: "1.5rem" }}>
              See More
              <VscArrowSmallRight style={{}} />
            </p>
          </div>
        </div>

        <div
          onClick={gotoHiredProfs}
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
          <div style={{ textAlign: "center" }}>
            <h3
              style={{
                fontSize: "20px",

                marginTop: "17px",
                fontWeight: "bold",
                color: "#00ADB5",
              }}
            >
              Hired Professionals
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
              {offers[0]?.title}
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
              {offers[1]?.user_id.fullName}
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
          <div style={{ textAlign: "center" }}>
            <h3
              style={{
                fontSize: "20px",

                marginTop: "17px",
                fontWeight: "bold",
                color: "#00ADB5",
              }}
            >
              Your Solo Workers
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
              Umer Abdullah
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
              Zain Awan
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
