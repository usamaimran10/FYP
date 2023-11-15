import React, { useState, useEffect } from "react";
import axios from "axios";
import Jwt from "jsonwebtoken";

import SingleProfBidCompnt from "./SingleProfBidCompnt";

const ProfsBiddedReq = () => {
  const [bids, setBids] = useState([]);

  const viewAllReq = async () => {
    const varUser = localStorage.getItem("UserData");
    const userId = Jwt(varUser);
    console.log(userId.id);

    try {
      const res = await axios.get(
        `http://localhost:5000/api/request/viewByStatus/Completed/${userId.id}`
      );
      console.log(res.data);
      setBids(res.data);
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
          Your Work in Progress
        </h1>
      </div>
      <div className="row">
        {console.log(bids, "BIDS")}
        {bids.map((offer, i) => {
          return (
            <div key={i}>
              <SingleProfBidCompnt
                name={offer.title}
                description={offer.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfsBiddedReq;
