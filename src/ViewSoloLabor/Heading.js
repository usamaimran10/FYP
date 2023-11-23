import React, { useState, useEffect } from "react";
import "./Heading.css";
import { Form } from "react-bootstrap";
import axios from "axios";
import { soloLaborActions } from "../Store/soloLabor";
import { useDispatch } from "react-redux";
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
    // Retrieve the object from storage
    let cart = localStorage.getItem("cart");
    console.log("this is cart", cart);
    setCount(cart.length);
  }, []);
  useEffect(() => {
    console.log("inside axios");
    const indentifier = setTimeout(async () => {
      if (search) {
        let res = await axios.get(
          ` https://fyp-backend-gules.vercel.app/api/search/labourGigSearch/${search}`
        );

        console.log("if", res.data);

        dispatch(soloLaborActions.setSololabor(res.data));
      } else {
        axios
          .get("https://fyp-backend-gules.vercel.app/api/gig/viewlabourGigs")
          .then((resp) => {
            console.log("else", resp.data);
            dispatch(soloLaborActions.setSololabor(resp.data));
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
