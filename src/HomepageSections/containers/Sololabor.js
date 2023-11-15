import React from "react";
import "./Sololabor.css";

const Sololabor = () => {
  return (
    <div className="solo-labor">
      <div className="container">
        <div className="row">
          <div className="col-5" style={{ padding: "0" }}>
            <img
              id="illustration"
              src="https://res.cloudinary.com/niaxeecomsats/image/upload/v1638385236/ConstructPak/flat-engineering-construction-illustrated_23-2148892788_dbrwfq.jpg"
              alt="this is illustration"
              style={{
                width: "100%",
                borderRadius: "5px",
                marginTop: "30px",
                marginLeft: "20px",
                overflow: "hidden",
                padding: "none ",
              }}
            />
          </div>

          <div className="col-7">
            <div
              class="card-sololabor"
              style={{ width: "700PX", marginTop: "80PX" }}
            >
              <div class="card">
                <div class="card-horizontal">
                  <div class="img-square-wrapper">
                    <img
                      class="card-img"
                      src="https://res.cloudinary.com/niaxeecomsats/image/upload/v1638384483/ConstructPak/4e43e850-61u5vx9jfvl._ac_sl1000__nisbpl.jpg"
                      alt="Card image cap"
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-title" style={{ fontSize: "3rem" }}>
                      Naeem (Carpentor)
                    </h4>
                    <p class="card-text" style={{ fontSize: "1.5rem" }}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
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
                      src="https://res.cloudinary.com/niaxeecomsats/image/upload/v1638384638/ConstructPak/download_2_jrmzrd.jpg"
                      alt="Card image cap"
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-title" style={{ fontSize: "3rem" }}>
                      Ahmad (Plumber)
                    </h4>
                    <p class="card-text" style={{ fontSize: "1.5rem" }}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
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
                      src="https://res.cloudinary.com/niaxeecomsats/image/upload/v1638384663/ConstructPak/careerbuilder-original-3580_1_mphyi9.jpg"
                      alt="Card image cap"
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-title" style={{ fontSize: "3rem" }}>
                      Usman (Electrician)
                    </h4>
                    <p class="card-text" style={{ fontSize: "1.5rem" }}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
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
    </div>
  );
};

export default Sololabor;
