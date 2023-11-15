import React from "react";
import "./Navbar.css";
import { NavDropdown } from "react-dropdown";
import { BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  return (
    <div class="topnav">
      <a className="title" href="#about">
        E-Construct
      </a>

      <div className="Navbar">
        <a class="active" href="#home">
          Home
        </a>
        {/* <a href="#about">About</a> */}
        <a href="#contact">Services</a>
        <a href="#contact">Product</a>
        <a href="#contact">Contact</a>
        <a>
          <BsFillPersonFill />
        </a>
      </div>

      <a>Categories</a>
    </div>
  );
};
export default Navbar;
