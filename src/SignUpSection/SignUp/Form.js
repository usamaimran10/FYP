import React from "react";
import "./Form.css";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Route } from "react-router";
import SignupForm from "./SignupForm";
import SigninForm from "./SigninForm";

const Form = () => {
  const signUpClick = () => {
    window.location.href = "/signup";
  };
  const signInClick = () => {
    window.location.href = "/signin";
  };

  return (
    <div>
      <h4 className="heading">Create Your Account</h4>

      <div className="buttons">
        <Button id="signup" onClick={signUpClick}>
          Sign Up
        </Button>

        <Button id="signin" onClick={signInClick}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Form;
