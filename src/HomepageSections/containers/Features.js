import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div>
      <div class="card-features">
        <div class="card">
          <div class="card-horizontal">
            <div class="img-square-wrapper">
              <img
                class="card-img"
                src="https://res.cloudinary.com/niaxeecomsats/image/upload/v1638384751/ConstructPak/fast-delivery-800x800_njvrmu.jpg"
                alt="Card image cap"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
            <div class="card-body">
              <h4
                class="feature-heading"
                style={{ fontSize: "3rem", fontWeight: "bold" }}
              >
                Fast Delivery
              </h4>

              <p
                class="feature-detail"
                style={{ fontSize: "1.5rem", width: "80%" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
                <i
                  class="fa fa-check-circle icon"
                  style={{ fontSize: "50px" }}
                ></i>
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
                src="https://res.cloudinary.com/niaxeecomsats/image/upload/v1638384874/ConstructPak/download_plbe9s.png"
                alt="Card image cap"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
            <div class="card-body">
              <h4
                class="feature-heading"
                style={{ fontSize: "3rem", fontWeight: "bold" }}
              >
                Easy Access
              </h4>

              <p
                class="feature-detail"
                style={{ fontSize: "1.5rem", width: "80%" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
                <i
                  class="fa fa-check-circle icon"
                  style={{ fontSize: "50px" }}
                ></i>
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
                src="https://res.cloudinary.com/niaxeecomsats/image/upload/v1638384997/ConstructPak/depositphotos_251830561-stock-illustration-easy-use-concept-icon-remote_oyenlv.jpg"
                alt="Card image cap"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
            <div class="card-body">
              <h4
                class="feature-heading"
                style={{ fontSize: "3rem", fontWeight: "bold" }}
              >
                Easy Use
              </h4>

              <p
                class="feature-detail"
                style={{ fontSize: "1.5rem", width: "80%" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
                <i
                  class="fa fa-check-circle icon"
                  style={{ fontSize: "50px" }}
                ></i>
              </p>
            </div>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
