import React, { useEffect, useState } from "react";
import "./Allbids.css";
import axios from "axios";
import Jwt from "jsonwebtoken";

import Navbar from "../HomepageSections/containers/Navbar";
import AllRequestforProfs from "./AllRequestforProfs";
import DetailBidofProf from "./DetailBidofProf";
const SpecificProfBid = () => {
  const [offers, setOffers] = useState([]);

  const viewAllReq = async () => {
    const data = localStorage.getItem("UserData");
    const decoded = Jwt(data);
    console.log(decoded.id);

    try {
      const res = await axios.get(
        `http://localhost:5000/api/bid/viewbids/${decoded.id}
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
    <div>
      <div>
        <div style={{ textAlign: "center" }}>
          <h1
            style={{ fontSize: "4rem", fontWeight: "bold", marginTop: "30px" }}
          >
            Your Bids On Requests
          </h1>
        </div>
        <div className="row">
          {console.log(offers)}
          {offers.map((offer, i) => {
            return (
              <div key={i}>
                <DetailBidofProf
                  name={offer.title}
                  description={offer.description}
                  type={offer.professional_category}
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

export default SpecificProfBid;
