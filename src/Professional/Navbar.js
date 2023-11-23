import React from "react";
import "./Navbar.css";

import { BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const hamBurger = (
    <GiHamburgerMenu
      className="MenuBurger"
      onClick={() => {
        setOpen(!open);
      }}
    ></GiHamburgerMenu>
  );

  const closeIcon = (
    <AiOutlineClose
      className="MenuBurger"
      onClick={() => {
        setOpen(!open);
      }}
    ></AiOutlineClose>
  );
  return (
    <div class="topnav">
      <a className="title" href="#about">
        E-Contractor
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
    </div>
  );
};
export default Navbar;
