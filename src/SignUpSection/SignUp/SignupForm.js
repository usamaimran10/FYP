import React from "react";
import "./SignUpForm.css";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import GoogleLogin from "react-google-login";
import Jwt from "jsonwebtoken";
import axios from "axios";

const SignupForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { category: "professional" },
    resolver: yupResolver(validationSchema),
  });

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  const ClickLogin = () => {
    window.location.href = "/signin";
  };

  async function Signup(data) {
    try {
      console.log("in try method");
      const res = await axios.post(
        "https://fyp-backend-gules.vercel.app/api/auth/register",
        {
          fullName: data.username,
          email: data.email,
          phone: data.phoneNumber,
          password: data.password,
          category: data.category,
        }
      );

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
        <form onSubmit={handleSubmit(Signup)}>
          <h3 style={{ fontSize: "22px" }}>Sign Up</h3>
          <div className="row">
            <div className="column">
              <div className="form-group">
                <label style={{ fontSize: "2rem" }}>Username</label>
                <Controller
                  name="username"
                  control={control}
                  render={({ field }) => (
                    <input
                      className={`input form-control ${
                        errors.username ? "is-invalid" : ""
                      }`}
                      type="text"
                      placeholder="Username"
                      style={{ fontSize: "1.5rem" }}
                      {...field}
                    />
                  )}
                />
                {errors.username && (
                  <span className="invalid-feedback">
                    {errors.username.message}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label style={{ fontSize: "2rem" }}>Password</label>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="password"
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      placeholder="Password"
                      style={{ fontSize: "1.5rem" }}
                      {...field}
                    />
                  )}
                />
                {errors.password && (
                  <span className="invalid-feedback">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label style={{ fontSize: "2rem" }}>Confirm Password</label>
                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="password"
                      className={`form-control ${
                        errors.confirmPassword ? "is-invalid" : ""
                      }`}
                      placeholder="Confirm Password"
                      style={{ fontSize: "1.5rem" }}
                      {...field}
                    />
                  )}
                />
                {errors.confirmPassword && (
                  <span className="invalid-feedback">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label style={{ fontSize: "2rem" }}>Email address</label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Enter email"
                      style={{ fontSize: "1.5rem" }}
                      {...field}
                    />
                  )}
                />
                {errors.email && (
                  <span className="invalid-feedback">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="column">
              <div className="form-group">
                <label style={{ fontSize: "2rem" }}>Phone Number</label>
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="number"
                      className={`form-control ${
                        errors.phoneNumber ? "is-invalid" : ""
                      }`}
                      placeholder="Phone Number"
                      style={{ fontSize: "1.5rem" }}
                      {...field}
                    />
                  )}
                />
                {errors.phoneNumber && (
                  <span className="invalid-feedback">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label style={{ fontSize: "2rem" }}>Categories</label>
                <Controller
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <select
                      className={`form-control ${
                        errors.category ? "is-invalid" : ""
                      }`}
                      placeholder="Categories"
                      style={{ fontSize: "1.5rem" }}
                      {...field}
                    >
                      <option value="professional">Professional</option>
                      <option value="seller">Seller</option>
                      <option value="customer">Customer</option>
                    </select>
                  )}
                />
                {errors.category && (
                  <span className="invalid-feedback">
                    {errors.category.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="ButtonContainer">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              style={{ height: "50px", fontSize: "2rem", borderRadius: "5px" }}
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
const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .matches(/\.com$/, "Email must contain '.com'")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^03\d{9}$/, "Invalid phone number, must be 11 numbers")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  category: yup.string().required("Password is required"),
});
export default SignupForm;
