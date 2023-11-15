import React from "react";

const ProfsBids = () => {
  return (
    <div>
      <div>
        <div>
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                marginTop: "30px",
              }}
            >
              Ongoing Bids
            </h1>
          </div>

          <div class="card-features">
            <div class="card">
              <div class="card-horizontal">
                <div class="img-square-wrapper">
                  <img
                    class="card-img"
                    src="https://res.cloudinary.com/niaxeecomsats/image/upload/v1639053697/ConstructPak/maxresdefault_jdzobl.jpg"
                    alt="Card image cap"
                    style={{ width: "200px", height: "150px" }}
                  />
                </div>
                <div class="card-body">
                  <h4
                    class="feature-heading"
                    style={{ fontSize: "3rem", fontWeight: "bold" }}
                  >
                    DHA House Phase 2
                  </h4>

                  <p
                    class="feature-detail"
                    style={{ fontSize: "1.5rem", width: "100%" }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
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
            <div class="card">
              <div class="card-horizontal">
                <div class="img-square-wrapper">
                  <img
                    class="card-img"
                    src="https://res.cloudinary.com/niaxeecomsats/image/upload/v1639054139/ConstructPak/camera-1_fmwc5q.jpg"
                    alt="Card image cap"
                    style={{ width: "200px", height: "150px" }}
                  />
                </div>
                <div class="card-body">
                  <h4
                    class="feature-heading"
                    style={{ fontSize: "3rem", fontWeight: "bold" }}
                  >
                    Bahria Homes
                  </h4>

                  <p
                    class="feature-detail"
                    style={{ fontSize: "1.5rem", width: "100%" }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                    <i
                      class="fa fa-check-circle icon"
                      style={{ fontSize: "30px" }}
                    ></i>
                  </p>
                  <label style={{ fontSize: "1.5rem" }}>
                    Status:
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      Pending
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
            <div class="card">
              <div class="card-horizontal">
                <div class="img-square-wrapper">
                  <img
                    class="card-img"
                    src="https://res.cloudinary.com/niaxeecomsats/image/upload/v1639054309/ConstructPak/pexels-photo-323705_bwyv4r.jpg"
                    alt="Card image cap"
                    style={{ width: "200px", height: "150px" }}
                  />
                </div>
                <div class="card-body">
                  <h4
                    class="feature-heading"
                    style={{ fontSize: "3rem", fontWeight: "bold" }}
                  >
                    School Building
                  </h4>

                  <p
                    class="feature-detail"
                    style={{ fontSize: "1.5rem", width: "100%" }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
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
            <div class="card">
              <div class="card-horizontal">
                <div class="img-square-wrapper">
                  <img
                    class="card-img"
                    src="https://res.cloudinary.com/niaxeecomsats/image/upload/v1639054522/ConstructPak/istockphoto-1021170914-612x612_vtxfrc.jpg"
                    alt="Card image cap"
                    style={{ width: "200px", height: "150px" }}
                  />
                </div>
                <div class="card-body">
                  <h4
                    class="feature-heading"
                    style={{ fontSize: "3rem", fontWeight: "bold" }}
                  >
                    Community Park
                  </h4>

                  <p
                    class="feature-detail"
                    style={{ fontSize: "1.5rem", width: "100%" }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
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
    </div>
  );
};

export default ProfsBids;
