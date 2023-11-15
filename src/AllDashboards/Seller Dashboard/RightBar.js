import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import { BiDotsHorizontal } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiFillFile } from "react-icons/ai";
import { VscArrowSmallRight } from "react-icons/vsc";

const RightBar = (props) => {
  const gotoChat = async () => {
    window.location.href = `/inbox/thread`;
  };
  const gotoEdit = () => {
    window.location.href = "/updateSellerProfile";
  };
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
          cursor: "pointer",
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

          <BsFillBellFill
            style={{
              marginTop: "35px",
              marginLeft: "20px",
              fontSize: "1.5rem",
            }}
          />
          <BiDotsHorizontal
            style={{
              marginTop: "35px",
              marginLeft: "10px",
              fontSize: "1.5rem",
            }}
          />
        </div>

        <div
          onClick={gotoEdit}
          style={{ marginTop: "20px", fontSize: "1.5rem" }}
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
        onClick={gotoChat}
        className="history"
        style={{
          display: "inline-flex",
          backgroundColor: "#EEEEEE",
          color: "#393E46",
          width: "250px",
          height: "100%",
          marginLeft: "50px",
          marginTop: "20px",
          borderRadius: "10px",
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

          <div
            style={{
              backgroundColor: "#393E46",
              width: "230px",
              height: "40px",
              borderRadius: "10PX",
              marginLeft: "10px",
            }}
          >
            <label
              style={{
                color: "#EEEEEE",
                marginLeft: "10px",
                marginTop: "5px",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Talha
              {/* <GoPrimitiveDot style={{ color: "#00ADB5" }} /> */}
            </label>
          </div>
          <div
            style={{
              backgroundColor: "#393E46",
              width: "230px",
              height: "40px",
              borderRadius: "6PX",
              marginLeft: "10px",
              marginTop: "10px",
            }}
          >
            <label
              style={{
                color: "#EEEEEE",
                marginLeft: "10px",
                marginTop: "5px",
                fontSize: "1.5rem",
              }}
            >
              Naveed
            </label>
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
                fontSize: "1.5rem",
              }}
            >
              Ahmed
            </label>
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
                fontSize: "1.5rem",
              }}
            >
              Ahmed
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
