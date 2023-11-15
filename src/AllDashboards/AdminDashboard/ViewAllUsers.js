import React, { useState, useEffect } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
const ViewAllUsers = () => {
  const [offers, setOffers] = useState([]);
  const viewAllReq = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/viewusers");

      setOffers(res.data);
      //console.log("From api", res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    viewAllReq();
  }, []);

  console.log("offers", offers.length !== 0);
  return (
    <div style={{ fontSize: "2rem" }}>
      <ReactBootStrap.Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Category</th>
          </tr>
        </thead>
        {/* {offers.length !== 0 && ( */}
        <tbody>
          {offers.map((offer, i) => (
            <tr key={offer._id}>
              <td>{i + 1}</td>
              <td>{offer.fullName}</td>
              <td>{offer.email}</td>
              <td>{offer.phone}</td>
              <td>{offer.category}</td>
            </tr>
          ))}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default ViewAllUsers;
// {
//   offers.map((offer) => {
//     <tr>
//       <td>{offer?.fullName}</td>
//       <td>{offer?.email}</td>
//       <td>{offer?.phone}</td>
//       <td>{offer?.category}</td>
//     </tr>;
//   });
// }
