import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import { BiDotsHorizontal } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiFillFile } from "react-icons/ai";
import { VscArrowSmallRight } from "react-icons/vsc";
import { propTypes } from "react-bootstrap/esm/Image";
import axios from "axios";

const RightBar = (props) => {
  const profsID = localStorage.getItem("ProfessionalID");
  const [ProUserid, setProUserid] = useState();
  const gotoChat = async () => {
    window.location.href = `/inbox/thread`;
  };
  const gotoUpdateCustomer = () => {
    window.location.href = "/updateCustomerProfile";
  };
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:5000/api/gig/viewSpecificGig/${profsID}`)
        .then((res) => {
          console.log(res);
          //console.log("this is prof id", res.data.service_provider.user_id._id);

          //setProUserid(res.data.service_provider.user_id._id);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div>
      <div
        className="history"
        style={{
          backgroundColor: "#EEEEEE",
          color: "#393E46",
          width: "250px",
          height: "200px",
          marginLeft: "50px",
          marginTop: "20px",
          borderRadius: "10px",
          fontSize: "1.8rem",
        }}
      >
        <div style={{ display: "inline-flex" }}>
          <FaUserCircle
            style={{
              height: "40px",
              width: "40px",
              marginTop: "20px",
              marginLeft: "10px",
            }}
          />

          <h3
            style={{ fontSize: "16px", marginTop: "30px", marginLeft: "10px" }}
          >
            {props.name}
          </h3>

          <BsFillBellFill style={{ marginTop: "35px", marginLeft: "20px" }} />
          <BiDotsHorizontal style={{ marginTop: "35px", marginLeft: "10px" }} />
        </div>

        <div
          onClick={gotoUpdateCustomer}
          style={{ marginTop: "20px", cursor: "pointer" }}
        >
          <ul>
            <li>Profile</li>
            <li>Edit</li>
            <li>Contact</li>
            <li>Log Out</li>
          </ul>
        </div>
      </div>

      <div
        className="history"
        style={{
          display: "inline-flex",
          backgroundColor: "#EEEEEE",
          color: "#393E46",
          width: "250px",
          height: "50px",
          marginLeft: "50px",
          marginTop: "20px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        <div onClick={gotoChat}>
          <div style={{ display: "inline-flex" }}>
            <BsFillChatDotsFill
              style={{
                marginLeft: "10px",
                marginTop: "15px",
                height: "20px",
                width: "20px",
              }}
            />
            <h3
              style={{
                fontSize: "20px",
                marginTop: "10px",

                marginLeft: "10px",
              }}
            >
              Chats
            </h3>
          </div>
        </div>
      </div>

      <div
        className="history"
        style={{
          backgroundColor: "#EEEEEE",
          color: "#393E46",
          width: "250px",
          height: "200px",
          marginLeft: "50px",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      >
        <div style={{ display: "inline-flex" }}>
          <AiFillFile
            style={{
              height: "20px",
              width: "20px",
              marginTop: "20px",
              marginLeft: "10px",
            }}
          />
          <h3
            style={{ fontSize: "20px", marginTop: "17px", marginLeft: "10px" }}
          >
            Proposals
          </h3>
        </div>
        <div
          style={{
            backgroundColor: "#393E46",
            width: "230px",
            height: "40px",
            borderRadius: "10PX",
            marginLeft: "10px",
            marginTop: "10px",
          }}
        >
          <label
            style={{
              color: "#EEEEEE",
              marginLeft: "10px",
              marginTop: "5px",
              fontWeight: "bold",
            }}
          >
            School Building Proposal
            {/* <GoPrimitiveDot style={{ color: "#00ADB5" }} /> */}
          </label>
          <p style={{ marginLeft: "140px" }}>
            See More
            <VscArrowSmallRight style={{}} />
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#393E46",
            width: "230px",
            height: "40px",
            borderRadius: "10PX",
            marginLeft: "10px",
            marginTop: "30px",
          }}
        >
          <label
            style={{
              color: "#EEEEEE",
              marginLeft: "10px",
              marginTop: "5px",
              fontWeight: "bold",
            }}
          >
            Defence House Proposal
            {/* <GoPrimitiveDot style={{ color: "#00ADB5" }} /> */}
          </label>
          <p style={{ marginLeft: "140px" }}>
            See More
            <VscArrowSmallRight style={{}} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
