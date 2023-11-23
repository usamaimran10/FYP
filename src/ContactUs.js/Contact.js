import React, { useState } from "react";
import "./Contact.css";
import Jwt from "jsonwebtoken";

import axios from "axios";
const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const contactUs = async (e) => {
    e.preventDefault();
    let res = await axios.post(
      "https://fyp-backend-gules.vercel.app/api/auth/helpAndSupport",
      {
        email: email,
        name: name,
        text: message,
      }
    );
    console.log(res.data);
    window.alert("Request Sent Successfully");
  };

  return (
    <>
      <div>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "3rem" }}>Contact Us</h1>
        </div>
        <div class="contact3 py-5">
          <div class="row no-gutters">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="card-shadow">
                    <img
                      src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg"
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="contact-box ml-3">
                    <h1
                      class="font-weight-light mt-2"
                      style={{ fontSize: "3rem" }}
                    >
                      Quick Contact
                    </h1>
                    <form class="mt-4">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group mt-2">
                            <input
                              class="form-control"
                              style={{ fontSize: "2rem" }}
                              type="text"
                              placeholder="Name"
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-group mt-2">
                            <input
                              class="form-control"
                              style={{ fontSize: "2rem" }}
                              type="email"
                              placeholder="Email Address"
                              onChange={(e) => {
                                setMessage(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-group mt-2">
                            <input
                              class="form-control"
                              style={{ fontSize: "2rem" }}
                              type="text"
                              placeholder="Phone"
                            />
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-group mt-2">
                            <textarea
                              class="form-control"
                              style={{ fontSize: "2rem" }}
                              rows="3"
                              placeholder="Your Message ..."
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <button
                            onClick={contactUs}
                            type="submit"
                            style={{ fontSize: "2rem", borderRadius: "5px" }}
                            class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
                          >
                            <span> SUBMIT</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="card mt-4 border-0 mb-4">
                    <div class="row">
                      <div class="col-lg-4 col-md-4">
                        <div class="card-body d-flex align-items-center c-detail pl-0">
                          <div class="mr-3 align-self-center">
                            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
                          </div>
                          <div class="">
                            <h6 class="font-weight-medium">Address</h6>
                            <p class="">
                              601 Sherwood Ave.
                              <br /> San Bernandino
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <div class="card-body d-flex align-items-center c-detail">
                          <div class="mr-3 align-self-center">
                            <img
                              style={{ color: "black" }}
                              src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"
                            />
                          </div>
                          <div class="">
                            <h6 class="font-weight-medium">Phone</h6>
                            <p class="">
                              251 546 9442
                              <br /> 630 446 8851
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <div class="card-body d-flex align-items-center c-detail">
                          <div class="mr-3 align-self-center">
                            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                          </div>
                          <div class="">
                            <h6 class="font-weight-medium">Email</h6>
                            <p class="">
                              info@wrappixel.com
                              <br /> 123@wrappixel.com
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
