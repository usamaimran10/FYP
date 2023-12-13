import React from "react";
import axios from "axios";
import { Box, Card } from "@mui/material";
const ViewBidsOnRequest = (props) => {
  const gotoHireScreen = async () => {
    localStorage.setItem("BidID", props.id);

    window.location.href = "/hiredsuccess";
  };
  return (
    <Card sx={{ width: "30%", maxHeight: "10%" }}>
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
              Phone No {props.phone}
              <i
                class="fa fa-check-circle icon"
                style={{ fontSize: "30px" }}
              ></i>
            </p>
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
              Range :
              <span style={{ color: "green", fontWeight: "bold" }}>
                {props.max} - {props.min}
              </span>
            </label>
            <h6 class="feature-heading">Days Required: {props.duration}</h6>

            <button
              onClick={gotoHireScreen}
              style={{
                float: "right",
                fontSize: "1.5rem",
                border: "none",
                backgroundColor: "#393E46",
                color: "white",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              Hire
            </button>
          </div>
        </div>
        <div class="card-footer" style={{ fontSize: "2rem" }}>
          <small class="text-muted">{props.created}</small>
        </div>
      </Box>
    </Card>
  );
};

export default ViewBidsOnRequest;
