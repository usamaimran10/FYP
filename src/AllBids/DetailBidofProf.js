import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";

const DetailBidofProf = (props) => {
  const gotoViewReq = () => {
    localStorage.setItem("SpecificBid", props.id);
    window.location.href = "/viewReqonBid";
  };
  return (
    <Card>
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
              Status:
              <span style={{ color: "red", fontWeight: "bold" }}>
                {props.status}
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
          </div>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </Box>
    </Card>
  );
};

export default DetailBidofProf;
