import React from "react";

const BlockChain = () => {
  return (
    <div>
      <div
        style={{ display: "flex", marginTop: "20px", justifyContent: "center" }}
      >
        <div
          className="container"
          style={{
            width: "300px",
            height: "200px",
            backgroundColor: "#393e46",
            marginTop: "20px",
            marginLeft: "100px",
            cursor: "pointer",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <label
            style={{
              color: "#AAD8D3",
              fontSize: "24PX",
              fontWeight: "bold",
              marginTop: "10PX",
            }}
          >
            1.Request
          </label>
          <br />
          <img
            src="request.png"
            style={{
              height: "60px",
              width: "60px",

              display: "flex-inline",
            }}
          ></img>
          <label
            style={{ color: "#AAD8D3", fontSize: "20px", marginTop: "20px" }}
          >
            Make a Request according to your need
          </label>
        </div>

        <div
          className="container"
          style={{
            width: "130px",
            height: "10px",
            backgroundColor: "#00ADB5",
            marginTop: "120px",
          }}
        ></div>
        <div
          className="container"
          style={{
            width: "300px",
            height: "200px",
            backgroundColor: "#393e46",
            marginTop: "20px",
            cursor: "pointer",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <label
            style={{
              color: "#AAD8D3",
              fontSize: "24PX",
              fontWeight: "bold",
              marginTop: "10PX",
            }}
          >
            2.Place your Bid
          </label>
          <br />
          <img
            src="bidding.png"
            style={{
              height: "60px",
              width: "60px",

              display: "flex-inline",
            }}
          ></img>
          <label
            style={{ color: "#AAD8D3", fontSize: "20px", marginTop: "20px" }}
          >
            Place your Bid in the Market
          </label>
        </div>
        <div
          className="container"
          style={{
            width: "130px",
            height: "10px",
            backgroundColor: "#00ADB5",
            marginTop: "120px",
          }}
        ></div>
        <div
          className="container"
          style={{
            width: "300px",
            height: "200px",
            backgroundColor: "#393e46",
            marginTop: "20px",
            cursor: "pointer",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <label
            style={{
              color: "#AAD8D3",
              fontSize: "24PX",
              fontWeight: "bold",
              marginTop: "10PX",
            }}
          >
            3.Hire Professional
          </label>
          <br />
          <img
            src="hire.png"
            style={{
              height: "60px",
              width: "60px",

              display: "flex-inline",
            }}
          ></img>
          <label
            style={{ color: "#AAD8D3", fontSize: "20px", marginTop: "20px" }}
          >
            Hire from your Dashboard
          </label>
        </div>
      </div>
    </div>
  );
};

export default BlockChain;
