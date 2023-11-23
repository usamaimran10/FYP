import React, { useEffect, useState } from "react";
import axios from "axios";
import Jwt from "jsonwebtoken";

import SingleBidCompnt from "./SingleBidCompnt";

const InProgressBidsProf = () => {
  const [offers, setOffers] = useState([]);
  const viewBids = async () => {
    const varUser = localStorage.getItem("UserData");
    const userId = Jwt.decode(varUser);
    console.log(userId.id);
    const res = await axios.get(
      `http://localhost:5000/api/project/viewProfProj/${userId.id}`
    );
    try {
      console.log(res);
      setOffers(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    viewBids();
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
                  name={offer.request_id.title}
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

export default InProgressBidsProf;
