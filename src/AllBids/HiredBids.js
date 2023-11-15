import React, { useEffect, useState } from "react";
import axios from "axios";
import Jwt from "jsonwebtoken";

import "./Allbids.css";
import SingleBidCompnt from "./SingleBidCompnt";

const HiredBids = () => {
  const [offers, setOffers] = useState([]);

  const viewAllReq = async () => {
    const BidId = localStorage.getItem("BidID");
    const varUser = localStorage.getItem("UserData");
    const userId = Jwt(varUser);
    console.log(userId.id);

    console.log(BidId);

    try {
      const res = await axios.get(
        `http://localhost:5000/api/request/viewByStatus/InProgress/${userId.id}`
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
    <div>
      <div>
        <div style={{ textAlign: "center" }}>
          <h1
            style={{ fontSize: "4rem", fontWeight: "bold", marginTop: "30px" }}
          >
            Your Requests
          </h1>
        </div>
        <div className="row">
          {console.log(offers)}
          {offers.map((offer, i) => {
            return (
              <div key={i}>
                <SingleBidCompnt
                  name={offer.title}
                  description={offer.description}
                  status={offer.status}
                  id={offer._id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HiredBids;
