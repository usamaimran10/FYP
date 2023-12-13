import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleBidCompnt from "./SingleBidCompnt";
import ViewBidsOnRequest from "./ViewBidsOnRequest";
import moment from "moment";
import { Box, Typography } from "@mui/material";

const BiddedOffers = () => {
  const ReqId = localStorage.getItem("ReqID");

  console.log(ReqId);
  const [bidoffers, setBidOffers] = useState();

  const viewBiddedOffers = async () => {
    const res = await axios.get(
      `https://fyp-backend-gules.vercel.app/api/bid/viewalloffers/${ReqId}`
    );
    try {
      console.log(res);
      setBidOffers(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    viewBiddedOffers();
  }, []);
  return (
    <Box>
      <Box style={{ textAlign: "center" }}>
        <Typography
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            marginTop: "30px",
          }}
        >
          Your Requests
        </Typography>
      </Box>

      {bidoffers ? (
        <Box
          sx={{
            display: "flex",
            gap: "40px",
            marginTop: "20px",
            padding: "20px",
          }}
        >
          {bidoffers.map((offer, i) => {
            {
              console.log({ offer });
            }
            return (
              <ViewBidsOnRequest
                key={i}
                description={offer.description}
                duration={offer.duration}
                max={offer.max_budget}
                min={offer.min_budget}
                id={offer._id}
                name={offer?.professional_id?.user_id?.fullName}
                phone={offer?.professional_id?.user_id?.phone}
                created={moment(offer.createdAt).fromNow()}
              />
            );
          })}
        </Box>
      ) : (
        console.log("no")
      )}
    </Box>
  );
};

export default BiddedOffers;
