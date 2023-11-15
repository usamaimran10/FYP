import React from "react";

const SingleProfBidCompnt = (props) => {
  return (
    <div>
      <div>
        <div class="card-features">
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
                    In Progress
                  </span>
                </label>
                <button
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
                  Remove
                </button>
              </div>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProfBidCompnt;
