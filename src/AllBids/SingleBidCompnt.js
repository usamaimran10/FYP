import React from "react";
import moment from "moment";
const SingleBidCompnt = (props) => {
  const gotoBidsonOffer = () => {
    localStorage.setItem("ReqID", props.id);
    window.location.href = "/biddedOffers";
  };
  return (
    <div>
      <div className="container">
        <div class="card-features" style={{ width: "100vh" }}>
          <div class="card">
            <div class="card-horizontal">
              {/* <div class="img-square-wrapper">
                <img
                  class="card-img"
                  src="https://res.cloudinary.com/niaxeecomsats/image/upload/v1639053697/ConstructPak/maxresdefault_jdzobl.jpg"
                  alt="Card image cap"
                  style={{ width: "200px", height: "150px" }}
                />
              </div> */}
              <div class="card-body">
                <h4
                  class="feature-heading"
                  style={{ fontSize: "3rem", fontWeight: "bold" }}
                >
                  {props.name}
                </h4>

                <p
                  class="feature-detail"
                  style={{ fontSize: "1.5rem", width: "100%" }}
                >
                  {props.description}
                  <i
                    class="fa fa-check-circle icon"
                    style={{ fontSize: "30px" }}
                  ></i>
                </p>
                <label style={{ fontSize: "1.5rem" }}>
                  Status:
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    {props.status}
                  </span>
                </label>
                <button
                  onClick={gotoBidsonOffer}
                  style={{
                    float: "right",
                    fontSize: "1.5rem",
                    border: "none",
                    backgroundColor: "#393E46",
                    color: "white",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  View Offers
                </button>
              </div>
            </div>
            <div class="card-footer">
              <small class="text-muted" style={{ fontSize: "2rem" }}>
                {props.created}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBidCompnt;
