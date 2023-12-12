import React from "react";
import { useEffect } from "react";
import axios from "axios";
const SuccessHired = (props) => {
  let Bidid = localStorage.getItem("BidID");
  let Reqid = localStorage.getItem("ReqID");
  const loadPage = async () => {
    console.log(Bidid);
    console.log(Reqid);
    try {
      const res = await axios.post(
        `https://fyp-backend-gules.vercel.app/api/project/hireprofessional`,
        {
          bid_id: Bidid,
          request_id: Reqid,
        }
      );
    } catch (err) {
      console.log("Something Went Wrong...");
    }
  };
  useEffect(() => {
    loadPage();
  }, []);
  return (
    <div style={{ justifyContent: "center", alignContent: "center" }}>
      <div class="alert alert-success" role="alert">
        <h4 class="alert-heading" style={{ fontSize: "5rem" }}>
          Hired Successfully!
        </h4>
        <p style={{ fontSize: "1.8rem" }}>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p class="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="btn-primary"
          style={{
            fontSize: "2rem",
            borderRadius: "5px",
            backgroundColor: "#00ADB5",
          }}
        >
          Go to Chat
        </button>
      </div> */}
    </div>
  );
};

export default SuccessHired;
