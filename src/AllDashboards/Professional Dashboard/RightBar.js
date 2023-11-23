import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import { BiDotsHorizontal } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiFillFile } from "react-icons/ai";
import { VscArrowSmallRight } from "react-icons/vsc";
import axios from "axios";

const RightBar = (props) => {
  const profsID = localStorage.getItem("ProfessionalID");
  const [ProUserid, setProUserid] = useState();
  const gotoChat = async () => {
    window.location.href = `/inbox/thread`;
  };
  const gotoOwnBid = () => {
    window.location.href = "/profBiddedReq";
  };
  const gotoUpdate = () => {
    window.location.href = "/updateProfessionalProfile";
  };
  const gotoBidforProf = () => {
    window.location.href = "/bidForProf";
  };
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://fyp-backend-gules.vercel.app/api/gig/viewSpecificGig/${profsID}`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       console.log("this is prof id", res.data);

  //       // setProUserid(res.data.service_provider);
  //       // console.log(ProUserid);
  //     });
  // }, []);
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
        }}
      >
        <div style={{ display: "inline-flex" }}>
          <img
            className="rounded-circle"
            src={props.image}
            style={{
              height: "40px",
              width: "40px",
              marginTop: "20px",
              marginLeft: "10px",
            }}
          />

          <h3
            style={{
              fontSize: "1.5rem",
              marginTop: "30px",
              marginLeft: "10px",
            }}
          >
            {props.name}
          </h3>
        </div>

        <div
          onClick={gotoUpdate}
          style={{
            fontSize: "1.8rem",
            cursor: "pointer",
            padding: "20px",
          }}
        >
          <ul>
            <li>Profile</li>
            <li>Edit</li>
          </ul>
        </div>
      </div>

      <div
        onClick={gotoChat}
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
        <div>
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
          fontSize: "1.5rem",
        }}
      >
        <div onClick={gotoOwnBid} style={{ display: "inline-flex" }}>
          <AiFillFile
            style={{
              height: "20px",
              width: "20px",
              marginTop: "20px",
              marginLeft: "10px",
            }}
          />
          <h3
            style={{
              fontSize: "20px",
              marginTop: "17px",
              marginLeft: "10px",
              cursor: "pointer",
            }}
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
        </div>
      </div>
    </div>
  );
};

export default RightBar;
