import { Box, Card } from "@mui/material";
import React from "react";

const AllRequestforProfs = (props) => {
  const gotoViewReq = () => {
    localStorage.setItem("ReqID", props.id);
    window.location.href = "/gotoViewReq";
  };
  const gotoDetailBid = () => {
    localStorage.setItem("ReqID", props.id);
    window.location.href = "/bidonReq";
  };

  return (
    <Card sx={{ border: "1px solid #8f8f8f" }}>
      <Box class="card">
        <div class="card-horizontal">
          {/* <div class="img-square-wrapper">
                  <img
                    class="card-img"
                    src="https://res.cloudinary.com/niaxeecomsats/image/upload/v1639053697/ConstructPak/maxresdefault_jdzobl.jpg"
                    alt="Card image cap"
                    style={{ width: "200px", height: "150px" }}
                  />
                </div> */}
          <div class="card-body">
            <h4
              class="feature-heading"
              style={{ fontSize: "3rem", fontWeight: "bold" }}
            >
              {props.name}
            </h4>

            <p
              class="feature-detail"
              style={{ fontSize: "1.5rem", width: "100%" }}
            >
              {props.description}
              <i
                class="fa fa-check-circle icon"
                style={{ fontSize: "30px" }}
              ></i>
            </p>
            <label style={{ fontSize: "1.5rem" }}>
              Construction Type:
              <span style={{ color: "green", fontWeight: "bold" }}>
                {props.type}
              </span>
            </label>
            <label
              onClick={gotoViewReq}
              style={{ fontSize: "1.5rem", marginLeft: "30px" }}
            >
              <span
                style={{
                  color: "black",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                View Request
              </span>
            </label>
            <button
              onClick={gotoDetailBid}
              style={{
                float: "right",
                fontSize: "1.5rem",
                border: "none",
                backgroundColor: "#393E46",
                color: "white",
                padding: "5px",
                borderRadius: "5px",
                width: "50px",
              }}
            >
              {" "}
              Bid
            </button>
          </div>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </Box>
    </Card>
  );
};

export default AllRequestforProfs;
