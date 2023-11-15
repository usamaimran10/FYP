import React from "react";
import Heading from "./Heading";
import Form from "./Form";
import SignupForm from "./SignupForm";
import Navbar from "../../HomepageSections/containers/Navbar";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <Heading />
      <SignupForm />
    </div>
  );
};

export default Signup;
