import React, { useState, useEffect } from "react";
import "./Heading.css";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { professionalsActions } from "../Store/professional";
const Heading = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const GotoCart = () => {
    window.location.href = "./Cart";
  };
  useEffect(() => {
    // Retrieve the object from storage
    let cart = localStorage.getItem("cart");
    console.log("this is cart", cart);
    setCount(cart.length);
  }, []);
  useEffect(() => {
    console.log("inside effect");
    const indentifier = setTimeout(async () => {
      if (search) {
        let res = await axios.get(
          `https://fyp-backend-gules.vercel.app/api/search/gigSearch/${search}`
        );
        console.log(res);

        dispatch(professionalsActions.setProfessional(res.data));
      } else {
        axios
          .get("https://fyp-backend-gules.vercel.app/api/gig/viewProfGigs")
          .then((resp) => {
            console.log(resp.data);
            dispatch(professionalsActions.setProfessional(resp.data));
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }, 500);
    return () => {
      clearTimeout(indentifier);
    };
  }, [search]);
  return (
    <div className="HeadingCmpt">
      <h1 className="heading">E-Contractor</h1>
      {/* <div className="SearchBar">
        <Form.Control
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          style={{ fontSize: "1.5rem" }}
          className="searchProduct"
          type="text"
          placeholder="Search Product ..."
        />
      </div> */}
    </div>
  );
};

export default Heading;
