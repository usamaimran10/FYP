import React, { useState, useEffect } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";

const EditUsers = () => {
  const [offers, setOffers] = useState([]);
  const deleteUser = async (userId) => {
    console.log(userId);
    setOffers((prev) => prev.filter((item) => item._id != userId));
    try {
      let resp = await axios.delete(
        `http://localhost:5000/api/auth/deleteuser/${userId}`
      );
      console.log("Delete successful");
    } catch {}
  };
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

            <th>Remove User</th>
          </tr>
        </thead>
        {/* {offers.length !== 0 && ( */}
        <tbody>
          {offers.map((offer, i) => (
            <tr key={offer._id}>
              <td>{i + 1}</td>
              <td>{offer.fullName}</td>
              <td>{offer.email}</td>

              <td>
                <button
                  onClick={() => {
                    deleteUser(offer._id);
                  }}
                  className="btn btn-outline-danger"
                  style={{ fontSize: "1.8rem" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default EditUsers;
