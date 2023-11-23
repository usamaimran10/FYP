import React from "react";
import "./SignUpForm.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import GoogleLogin from "react-google-login";
import Jwt from "jsonwebtoken";

import axios from "axios";

const SignupForm = () => {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Category, setCategory] = useState("professional");

  const [passwordShown, setPasswordShown] = useState(false);

  const isValidEmail = (email) => {
    if (email.length > 0) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    } else {
      return true;
    }
  };

  const simpleValidPassword = (password) => {
    if (password.length > 5) {
      return true;
    } else {
      return false;
    }
  };
  const confirmPassword = (Password, ConfirmPassword) => {
    if (
      Password.length > 5 &&
      ConfirmPassword.length > 5 &&
      Password === ConfirmPassword
    ) {
      return true;
    } else {
      return false;
    }
  };
  const ValidPhoneNumber = (PhoneNumber) => {
    if (PhoneNumber.length === 11) {
      return true;
    } else {
      return false;
    }
  };

  const ClickLogin = () => {
    window.location.href = "/signin";
  };
  async function Signup(event) {
    event.preventDefault();

    try {
      console.log("in try method");
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        fullName: Username,
        email: Email,
        phone: PhoneNumber,
        password: Password,
        category: Category,
      });

      console.log(res.data);
      window.location.href = "/signin";

      console.log(JSON.stringify(res.data));
      localStorage.setItem("UserData", JSON.stringify(res.data));
      console.log("coming from local storage");
      let UserObject = localStorage.getItem("UserData");
      console.log(UserObject);
      const decoded = Jwt.decode(res.data.token);
      console.log(decoded);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="SignUpForm">
      <div className="Container">
        <form>
          <h3 style={{ fontSize: "22px" }}>Sign Up</h3>
          <div className="row">
            <div className="column">
              <div className="form-group">
                <label style={{ fontSize: "2rem" }}>Username</label>
                <input
                  className="input"
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                  style={{ fontSize: "1.5rem" }}
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label style={{ fontSize: "2rem" }}>Password</label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  style={{ fontSize: "1.5rem" }}
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label style={{ fontSize: "2rem" }}>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={ConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{ fontSize: "1.5rem" }}
                />
              </div>

              <div className="form-group">
                <label style={{ fontSize: "2rem" }}>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  style={{ fontSize: "1.5rem" }}
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="column">
              <div className="form-group">
                <label style={{ fontSize: "2rem" }}>Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  style={{ fontSize: "1.5rem" }}
                  value={PhoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label style={{ fontSize: "2rem" }}>Categories</label>
                <select
                  className="form-control"
                  placeholder="Categories"
                  value={Category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ fontSize: "1.5rem" }}
                >
                  <option value="professional">Professional</option>
                  <option value="seller">Seller</option>
                  <option value="customer">Customer</option>
                  <option value="solo_labour">Solo Labour</option>
                </select>
              </div>
              {/* 
              <div className="form-group" id="signupWith">
                <label style={{ fontSize: "2rem" }}>
                  ------Or Sign Up with------
                </label>
                <GoogleLogin
                  clientId="581948107699-rlre4euckimnhjiqqb81tr4pdjdnra2u.apps.googleusercontent.com"
                  buttonText="Sign Up With Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </div> */}
            </div>
          </div>

          <div className="ButtonContainer">
            <button
              className="btn btn-primary btn-block"
              style={{ height: "50px", fontSize: "2rem", borderRadius: "5px" }}
              onClick={Signup}
            >
              Sign Up
            </button>
            <p onClick={ClickLogin} className="forgot-password text-right">
              Already registered <a href="#">sign in?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
