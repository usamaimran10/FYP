import React, { useState } from "react";
import "./SignInForm.css";
import Jwt from "jsonwebtoken";
import axios from "axios";

const SigninForm = () => {
  const ClickSignUp = () => {
    window.location.href = "/signup";
  };
  const forgotPassword = () => {
    window.location.href = "/forgotPass";
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const handleApi = async (data) => {
    if (isValidEmail(data.email) && simpleValidPassword(data.password)) {
      try {
        const res = await axios
          .post("https://fyp-backend-gules.vercel.app/api/auth/login", {
            phone: data.PhoneNumber,
            email: data.email,
            password: data.password,
          })
          .then((res) => {
            localStorage.setItem("UserData", JSON.stringify(res.data));
            const check = localStorage.getItem("UserData");
            console.log({ check });
            localStorage.setItem("ChatId", res.data.ChatId);
            console.log(res.data);
            console.log("coming from local storage");
            let UserObject = localStorage.getItem("UserData");
            console.log(UserObject);
            const decoded = Jwt.decode(res.data.token);
            console.log(decoded);
            console.log("role");
            console.log(decoded.role);

            window.location.href = `/homepage/${decoded.role}`;
          })
          .catch((error) => {
            console.log("ERROR", error);
          });
      } catch (err) {
        window.alert(
          "Unauthorized User",
          "Please Fill The Fields Properly & Password Must be Atleast 6 Characters Long",
          [{ text: "Ok" }]
        );
      }
    } else {
      window.alert("Out of If statement", "oh behns", [{ text: "Ok" }]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleApi({ email, password, PhoneNumber });
  };

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

  return (
    <div>
      <div className="SignInForm">
        <div className="Container">
          <form onSubmit={handleSubmit}>
            <h3 style={{ fontSize: "3rem" }}>Log In</h3>

            <div className="form-group">
              <label style={{ fontSize: "2rem" }}>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                style={{ fontSize: "1.5rem" }}
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label style={{ fontSize: "2rem" }}>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                style={{ fontSize: "1.5rem" }}
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="ButtonContainer">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{
                  height: "50px",
                  fontSize: "2rem",
                  borderRadius: "5px",
                }}
                id="submit"
              >
                Submit
              </button>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <p className="forgot-password text-leftt">
                  <a href="#" onClick={forgotPassword}>
                    Forgot Password?{" "}
                  </a>
                </p>
                <p className="forgot-password" style={{ marginLeft: "150px" }}>
                  Dont Have an Account?{" "}
                  <a href="#" onClick={ClickSignUp}>
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
