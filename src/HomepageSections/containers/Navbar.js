import React from "react";
import "./Navbar.css";

import { BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

const Navbar = (props) => {
  const gotoServices = () => {
    window.location.href = "/services";
  };
  const category = props.role;
  console.log(props);
  const GotoHome = () => {
    window.location.href = `/homepage/${category}`;
  };
  const gotoProductCateg = () => {
    window.location.href = "/categoriesPage";
  };
  const GotoLanding = () => {
    window.location.href = "/landingpage";
  };
  const GotoContact = () => {
    window.location.href = "/contactpage";
  };
  const GotoDashboard = () => {
    if (category === "customer") {
      window.location.href = "/cutomerDash";
    }
    if (category === "seller") {
      window.location.href = "/custDashboard";
    }
    if (category === "professional") {
      window.location.href = "/ProfDashboard";
    }
    if (category === "solo_labour") {
      window.location.href = "/SoloDashboard";
    }
  };
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
        <a class="active" href="#home" onClick={GotoHome}>
          Home
        </a>
        {/* <a href="#about">About</a> */}
        <a href="#services" onClick={gotoServices}>
          Services
        </a>
        <a href="#categories" onClick={gotoProductCateg}>
          Product
        </a>
        <a href="#contact" onClick={GotoContact}>
          Contact
        </a>

        <BsFillPersonFill
          style={{
            cursor: "pointer",
            width: "30px",
            height: "30px",
            marginTop: "10px",
          }}
          onClick={GotoDashboard}
        />
        <a href="#landingpage" onClick={GotoLanding}>
          Log Out
        </a>
      </div>
    </div>
  );
};
export default Navbar;
