import React, { useState, useEffect } from "react";
import "./Allbids.css";
import axios from "axios";
import Jwt from "jsonwebtoken";

import Navbar from "../HomepageSections/containers/Navbar";
import AllRequestforProfs from "./AllRequestforProfs";
const BidProf = () => {
  const [offers, setOffers] = useState([]);

  const viewAllReq = async () => {
    const varUser = localStorage.getItem("UserData");
    const userId = Jwt(varUser);
    console.log(userId.id);

    try {
      const res = await axios.get(
        `http://localhost:5000/api/request/viewactiverequests`
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
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "4rem", fontWeight: "bold", marginTop: "30px" }}>
          All Requests Around You
        </h1>
      </div>
      <div className="row">
        {console.log(offers)}
        {offers.map((offer, i) => {
          return (
            <div key={i}>
              <AllRequestforProfs
                name={offer.title}
                description={offer.description}
                type={offer.professional_category}
                id={offer._id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BidProf;
