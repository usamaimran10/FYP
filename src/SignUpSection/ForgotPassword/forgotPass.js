import axios from "axios";
import React, { useState } from "react";
import "./forgot.css";
const ForgotPass = () => {
  const [Email, setEmail] = useState();
  const gotoNewPassword = async (e) => {
    e.preventDefault();
    console.log(Email);
    let res = await axios.post(
      `http://localhost:5000/api/auth/forgotpassword`,
      {
        email: Email,
      }
    );
    console.log("em", res);

    window.location.href = "/verifyEmail";
  };

  return (
    <div>
      <div class="container padding-bottom-3x mb-2 mt-5">
        <h1
          style={{ textAlign: "center", fontWeight: "bold", color: "#00ADB5" }}
        >
          No Problem, Just Give us your email
        </h1>
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10" style={{ marginTop: "30px" }}>
            <form
              class="card mt-4 col-lg-12 col-md-12"
              style={{ fontSize: "2rem", height: "230px" }}
            >
              <div class="card-body ">
                <div class="forgot">
                  <h2>Forgot your password?</h2>
                  <p>
                    Change your password in three easy steps. This will help you
                    to secure your password!
                  </p>
                  <ol class="list-unstyled">
                    <li>
                      <span class="text-primary text-medium">1. </span>Enter
                      your email address below.
                    </li>
                    <li>
                      <span class="text-primary text-medium">2. </span>Our
                      system will send you a temporary link
                    </li>
                    <li>
                      <span class="text-primary text-medium">3. </span>Use the
                      link to reset your password
                    </li>
                  </ol>
                </div>
              </div>
            </form>
            <form
              class="card mt-4 col-lg-12 col-md-12"
              style={{ fontSize: "2rem", height: "200PX" }}
            >
              <div class="card-body ">
                <div class="form-group col-lg-12 col-md-12">
                  {" "}
                  <label for="email-for-pass">
                    Enter your email address
                  </label>{" "}
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    style={{ fontSize: "2rem" }}
                    class="form-control"
                    type="email"
                    id="email-for-pass"
                    required=""
                  />
                  <small class="form-text text-muted">
                    Enter the email address you used during the registration on
                    BBBootstrap.com. Then we'll email a link to this address.
                  </small>{" "}
                </div>
              </div>
              <div
                class="card-footer"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {" "}
                <button
                  onClick={gotoNewPassword}
                  class="btn"
                  type="submit"
                  style={{
                    backgroundColor: "#00ADB5",
                    color: "white",
                    fontSize: "2rem",
                    borderRadius: "5px",
                  }}
                >
                  Get New Password
                </button>{" "}
                <button
                  class="btn"
                  type="submit"
                  style={{
                    backgroundColor: "#393E46",
                    color: "white",
                    fontSize: "2rem",
                    borderRadius: "5px",
                  }}
                >
                  Back to Login
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
