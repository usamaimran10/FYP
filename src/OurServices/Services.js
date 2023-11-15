import React from "react";
import "./Services.css";

const Services = () => {
  const GotoContact = () => {
    window.location.href = "/contactpage";
  };
  return (
    <div>
      <div
        class="container-fluid mx-auto mt-5 mb-5 col-12"
        style={{ textAlign: "center" }}
      >
        <div class="hd" style={{ fontSize: "3rem" }}>
          Why People Believe in Us
        </div>
        <p>
          <small class="text-muted" style={{ fontSize: "1.8rem" }}>
            Always render more and better service than <br />
            is expected of you, no matter what your ask may be.
          </small>
        </p>
        <div class="row" style={{ justifyContent: "center" }}>
          <div class="card col-md-3 col-12">
            <div class="card-content">
              <div class="card-body">
                {" "}
                <img class="img" src="https://i.imgur.com/S7FJza5.png" />
                <div class="shadow"></div>
                <div class="card-title" style={{ fontSize: "3rem" }}>
                  {" "}
                  We're Free{" "}
                </div>
                <div class="card-subtitle">
                  <p>
                    {" "}
                    <small class="text-muted" style={{ fontSize: "1.8rem" }}>
                      We spent thousands of hours creating on algorithm that
                      does this for you in seconds. We collect a small fee from
                      the professional after they meet your
                    </small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card col-md-3 col-12 ml-2">
            <div class="card-content">
              <div class="card-body">
                {" "}
                <img class="img" src="https://i.imgur.com/xUWJuHB.png" />
                <div class="card-title" style={{ fontSize: "3rem" }}>
                  {" "}
                  We're Unbiased{" "}
                </div>
                <div class="card-subtitle">
                  <p>
                    {" "}
                    <small class="text-muted" style={{ fontSize: "1.8rem" }}>
                      {" "}
                      We don't accept ads from anyone. We use actual data to
                      match you who the best person for each job{" "}
                    </small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card col-md-3 col-12 ml-2">
            <div class="card-content">
              <div class="card-body">
                {" "}
                <img class="img rck" src="https://i.imgur.com/rG3CGn3.png" />
                <div class="card-title" style={{ fontSize: "3rem" }}>
                  {" "}
                  We Guide you{" "}
                </div>
                <div class="card-subtitle">
                  <p>
                    {" "}
                    <small class="text-muted" style={{ fontSize: "1.8rem" }}>
                      Buying or selling a home is often the largest transaction
                      anyone does in their life. we guide you through the
                      process so that you can be confident in reaching your
                      dream outcome.
                    </small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ft">
          <p class="chk">
            <small class="text-muted" style={{ fontSize: "1.8rem" }}>
              Still not sure?
            </small>
          </p>
          <div
            class="btn btn-primary"
            style={{ fontSize: "1.8rem" }}
            onClick={GotoContact}
          >
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
