import React from "react";
import SigninForm from "./SigninForm";
import Heading from "./Heading";
import Navbar from "../../HomepageSections/containers/Navbar";

const Signin = () => {
  return (
    <div>
      <Navbar />
      <Heading />
      <SigninForm />
    </div>
  );
};

export default Signin;
