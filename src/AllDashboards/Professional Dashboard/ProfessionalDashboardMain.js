import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import axios from "axios";
import Jwt from "jsonwebtoken";
import DetailBidofProf from "../../AllBids/DetailBidofProf";
const ProfessionalDashboardMain = (props) => {
  const GotoProfBid = () => {
    window.location.href = "/bidForProf";
  };
  const gotoUpdate = () => {
    window.location.href = "/updateProfessionalProfile";
  };
  const GotoSpecificProfBid = () => {
    window.location.href = "/specificProfbid";
  };
  const [offers, setOffers] = useState([]);

  const viewAllReq = async () => {
    // const data = localStorage.getItem("UserData");
    // const decoded = Jwt.decode(data);
    // console.log(decoded.id);
    const varUser = localStorage.getItem("UserData");
    const parsedUser = JSON.parse(varUser);
    console.log("TOKEN", JSON.parse(varUser));
    const userId = Jwt.decode(parsedUser.token);
    console.log(userId.id);
    try {
      const res = await axios.get(
        `https://fyp-backend-gules.vercel.app/api/bid/viewbids/${userId.id}
        `
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
            color: "white",
            marginLeft: "20px",
            padding: "10px 20px",
            marginTop: "15px",
            borderRadius: "10px",
            fontSize: "1.5rem",
            "&:hover": {
              backgroundColor: "#8C8C8C",
              color: "white",
            },
          }}
          onClick={GotoProfBid}
        >
          Requests for You
          <BiAddToQueue
            style={{ width: "30px", height: "30px", marginLeft: "10px" }}
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
            Your Bids
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
              <DetailBidofProf
                key={i}
                name={offer.title}
                description={offer.description}
                type={offer.professional_category}
                status={offer.status}
                id={offer._id}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfessionalDashboardMain;
