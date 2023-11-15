import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleBidCompnt from "./SingleBidCompnt";
import ViewBidsOnRequest from "./ViewBidsOnRequest";
import moment from "moment";

const BiddedOffers = () => {
  const ReqId = localStorage.getItem("ReqID");

  console.log(ReqId);
  const [bidoffers, setBidOffers] = useState();

  const viewBiddedOffers = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/bid/viewalloffers/${ReqId}`
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
    <div>
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            marginTop: "30px",
          }}
        >
          Your Requests
        </h1>
      </div>

      {bidoffers ? (
        <div>
          <div className="row">
            {console.log(bidoffers)}
            {bidoffers.map((offer, i) => {
              {
                console.log(offer._id);
              }
              return (
                <div key={i}>
                  <ViewBidsOnRequest
                    //name={offer.professional_id.user_id.fullName}
                    description={offer.description}
                    max={offer.max_budget}
                    min={offer.min_budget}
                    id={offer._id}
                    created={moment(offer.createdAt).fromNow()}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        console.log("no")
      )}
    </div>
  );
};

export default BiddedOffers;
