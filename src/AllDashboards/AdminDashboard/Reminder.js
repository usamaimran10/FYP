import React from "react";

import { BsCardImage } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
const Reminder = () => {
  const gotoViewAllUsers = () => {
    window.location.href = "/AllUsers";
  };
  const DeleteUsers = () => {
    window.location.href = "/DeleteUser";
  };
  return (
    <div>
      <h1
        style={{
          marginLeft: "50px",
          fontSize: "1.8rem",
          marginTop: "40px",
          color: "#393E46",
          fontWeight: "bold",
        }}
      >
        Your Dashboard
      </h1>
      <h1
        style={{
          marginLeft: "50px",
          fontSize: "3rem",
          marginTop: "40px",
          color: "#393E46",
          fontWeight: "bold",
        }}
      >
        Overview
      </h1>

      <div className="recentBlocks">
        <div
          className="tab1"
          style={{
            backgroundColor: "#EEEEEE",
            width: "100%",
            color: "#393E46",
            height: "150px",
            marginLeft: "50px",
            marginTop: "10px",
            borderRadius: "10px",
          }}
        >
          <div>
            <div class="white_card_body anlite_table p-0">
              <div class="row">
                <div class="col-lg-3">
                  <div style={{ textAlign: "center" }}>
                    <h4
                      style={{
                        fontSize: "2.5REM",
                        fontWeight: "bold",
                        padding: "5px",
                      }}
                    >
                      Total Income
                    </h4>
                    <h3>
                      Rs: <span>14,025</span>{" "}
                    </h3>
                    <div style={{ marginTop: "20px" }}>
                      <div>3.78</div>
                      <span>This year</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div style={{ textAlign: "center" }}>
                    <h4
                      style={{
                        fontSize: "2.5REM",
                        fontWeight: "bold",
                        padding: "5px",
                      }}
                    >
                      Total Traffic
                    </h4>
                    <h3>
                      Rs: <span>30,0025</span>{" "}
                    </h3>
                    <div style={{ marginTop: "20px" }}>
                      <div>5.78</div>
                      <span>This year</span>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3">
                  <div style={{ textAlign: "center" }}>
                    <h4
                      style={{
                        fontSize: "2.5REM",
                        fontWeight: "bold",
                        padding: "5px",
                      }}
                    >
                      Etherum Wallet
                    </h4>
                    <h3>
                      Rs: <span>520,025</span>{" "}
                    </h3>
                    <div style={{ marginTop: "20px" }}>
                      <div>9.098</div>
                      <span>This year</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div style={{ textAlign: "center" }}>
                    <h4
                      style={{
                        fontSize: "2.5REM",
                        fontWeight: "bold",
                        padding: "5px",
                      }}
                    >
                      Number of Clients
                    </h4>
                    <h3>
                      Rs: <span>4,025</span>{" "}
                    </h3>
                    <div style={{ marginTop: "20px" }}>
                      <div>1.78</div>
                      <span>This year</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recentBlocks" style={{ display: "inline-flex" }}>
        <div
          onClick={gotoViewAllUsers}
          className="tab1"
          style={{
            backgroundColor: "#EEEEEE",
            width: "350px",
            color: "#393E46",
            height: "150px",
            marginLeft: "60px",
            marginTop: "30px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <label
            style={{
              fontWeight: "bold",
              marginLeft: "10px",
              fontSize: "20px",
            }}
          >
            View Users
          </label>
          <p style={{ padding: "5px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div
          onClick={DeleteUsers}
          className="tab1"
          style={{
            backgroundColor: "#EEEEEE",
            width: "350px",
            color: "#393E46",
            height: "150px",
            marginLeft: "30px",
            marginTop: "30px",
            borderRadius: "10px",
          }}
        >
          <label
            style={{
              fontWeight: "bold",
              marginLeft: "10px",
              fontSize: "20px",
            }}
          >
            Edit Users
          </label>
          <p style={{ padding: "5px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
      </div>
      <div className="recentBlocks" style={{ display: "inline-flex" }}>
        <div
          className="tab1"
          style={{
            backgroundColor: "#EEEEEE",
            width: "100%",
            color: "#393E46",
            height: "150px",
            marginLeft: "60px",
            marginTop: "30px",
            borderRadius: "10px",
          }}
        >
          <label
            style={{
              fontWeight: "bold",
              marginLeft: "10px",
              fontSize: "20px",
            }}
          >
            Help & Support
          </label>
          <p style={{ padding: "5px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reminder;
