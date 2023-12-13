import { Box, Button, Typography } from "@mui/material";

import { BiSearchAlt } from "react-icons/bi";
import { BsFillCollectionPlayFill, BsPencilSquare } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Jwt from "jsonwebtoken";
import moment from "moment";
import SingleBidCompnt from "../../AllBids/SingleBidCompnt";

const CustomerDashboardMain = (props) => {
  const GotoBid = () => {
    window.location.href = "/bid";
  };
  const gotoOffers = () => {
    window.location.href = "/allOffers";
  };
  const [offers, setOffers] = React.useState([]);

  const viewAllReq = async () => {
    const varUser = localStorage.getItem("UserData");
    const parsedUser = JSON.parse(varUser);
    console.log("TOKEN", JSON.parse(varUser));
    const userId = Jwt.decode(parsedUser.token);
    console.log(userId.id);

    try {
      const res = await axios.get(
        `https://fyp-backend-gules.vercel.app/api/request/viewSpecificRequest/${userId.id}`
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
  return (
    <Box sx={{ display: "flex", flexDirection: "column", padding: "20px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3"> Welcome {props.name}</Typography>
        <Button
          sx={{
            backgroundColor: "#00ADB5",
            border: "none",
            color: "black",
            display: "flex",
            padding: "10px 20px",
            borderRadius: "10px",
            fontSize: "1.5rem",
            "&:hover": {
              backgroundColor: "#8C8C8C",
              color: "white",
            },
          }}
          onClick={GotoBid}
        >
          Create Your Offer{" "}
          <BsPencilSquare
            style={{ width: "20px", height: "20px", marginLeft: "10px" }}
          />
        </Button>
      </Box>

      <Box sx={{ minWidth: "100%" }}>
        <Box>
          <Typography
            sx={{
              fontSize: "4rem",
              fontWeight: "bold",
              marginTop: "30px",
            }}
          >
            Your Requests
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "40px",
            marginTop: "20px",
          }}
        >
          {offers.map((offer, i) => {
            return (
              <SingleBidCompnt
                key={i}
                name={offer.title}
                description={offer.description}
                status={offer.status}
                id={offer._id}
                created={moment(offer.createdAt).fromNow()}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerDashboardMain;
