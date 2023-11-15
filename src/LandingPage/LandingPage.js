import React from "react";
import Navbar from "../SignUpSection/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "../SignUpSection/SignUp/Form";
import Signin from "../SignUpSection/SignUp/Signin";
import Signup from "../SignUpSection/SignUp/Signup";

const LandingPage = () => {
  const ClickSignUp = () => {
    window.location.href = "/signup";
  };
  const ClickLogin = () => {
    window.location.href = "/signin";
  };
  const ClickHomePage = () => {
    window.location.href = "/GuestHomepage";
  };
  return (
    <>
      <div>
        <Navbar />
        <h1
          style={{ fontSize: "3rem", textAlign: "center", marginTop: "20px" }}
        >
          Welcome to <span style={{ fontWeight: "bold" }}>E-Construct</span>
        </h1>
        <div
          className="container-fluid"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <div
            onClick={ClickSignUp}
            style={{
              width: "300px",
              height: "250px",
              backgroundColor: "#393e46",
              marginTop: "20px",

              cursor: "pointer",
              borderRadius: "10px",
            }}
          >
            <h2
              style={{
                color: "#EEEEEE",
                textAlign: "center",
                verticalAlign: "middle",
                lineHeight: "220px",
                fontSize: "4rem",
              }}
            >
              Sign Up
            </h2>
          </div>
          <div
            onClick={ClickLogin}
            style={{
              width: "300px",
              height: "250px",
              backgroundColor: "#00ADB5",
              marginTop: "20px",
              marginLeft: "10px",
              cursor: "pointer",
              borderRadius: "10px",
            }}
          >
            <h2
              style={{
                color: "#EEEEEE",
                textAlign: "center",
                verticalAlign: "middle",
                lineHeight: "220px",
                fontSize: "4rem",
              }}
            >
              Log In
            </h2>
          </div>
          <div
            onClick={ClickHomePage}
            style={{
              width: "300px",
              height: "250px",
              backgroundColor: "#AAD8D3",
              marginTop: "20px",
              marginLeft: "10PX",
              cursor: "pointer",
              borderRadius: "10px",
            }}
          >
            <h2
              style={{
                color: "#393E46",
                textAlign: "center",
                verticalAlign: "middle",
                lineHeight: "220px",
                fontSize: "4rem",
              }}
            >
              View as Guest
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
