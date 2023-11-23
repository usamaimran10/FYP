import React, { useEffect, useState } from "react";
import axios from "axios";
import Jwt from "jsonwebtoken";
import moment from "moment";

import "./Allbids.css";
import SingleBidCompnt from "./SingleBidCompnt";

const Allbids = (props) => {
  const [offers, setOffers] = useState([]);

  const viewAllReq = async () => {
    const varUser = localStorage.getItem("UserData");
    const parsedUser = JSON.parse(varUser);
    console.log("TOKEN", JSON.parse(varUser));
    const userId = Jwt.decode(parsedUser.token);
    console.log(userId.id);

    try {
      const res = await axios.get(
        `http://localhost:5000/api/request/viewSpecificRequest/${userId.id}`
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
                created={moment(offer.createdAt).fromNow()}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allbids;
