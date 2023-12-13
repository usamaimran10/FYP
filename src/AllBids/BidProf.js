import React, { useState, useEffect } from "react";
import "./Allbids.css";
import axios from "axios";
import Jwt from "jsonwebtoken";

import Navbar from "../HomepageSections/containers/Navbar";
import AllRequestforProfs from "./AllRequestforProfs";
import { Box, Typography } from "@mui/material";
const BidProf = () => {
  const [offers, setOffers] = useState([]);

  const viewAllReq = async () => {
    const varUser = localStorage.getItem("UserData");
    // const userId = Jwt.decode(varUser);
    const parsedUser = JSON.parse(varUser);
    console.log("TOKEN", JSON.parse(varUser));
    const userId = Jwt.decode(parsedUser.token);
    console.log(userId.id);

    try {
      const res = await axios.get(
        `https://fyp-backend-gules.vercel.app/api/request/viewactiverequests`
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
    <Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{ fontSize: "4rem", fontWeight: "bold", marginTop: "30px" }}
        >
          All Requests Around You
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "40px",
          marginTop: "20px",
          padding: "20px",
        }}
      >
        {offers.map((offer, i) => {
          return (
            <AllRequestforProfs
              name={offer.title}
              key={i}
              description={offer.description}
              type={offer.professional_category}
              id={offer._id}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default BidProf;
