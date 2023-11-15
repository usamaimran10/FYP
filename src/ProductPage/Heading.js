import React, { useState, useEffect } from "react";
import "./Heading.css";
import { Form } from "react-bootstrap";
import axios from "axios";
import SearchArray from "./SearchArray.js";
import { useDispatch } from "react-redux";
import { productsActions } from "../Store/product";
const Heading = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchresult] = useState([]);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
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
    console.log("inside useEffect");
    const indentifier = setTimeout(async () => {
      if (search) {
        let res = await axios.get(
          `http://localhost:5000/api/search/productSearch/${search}`
        );
        console.log(res);

        dispatch(productsActions.setProducts(res.data));
      } else {
        axios
          .get("http://localhost:5000/api/product/viewproducts")
          .then((resp) => {
            console.log(resp.data);
            dispatch(productsActions.setProducts(resp.data));
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
      <h1 className="heading">E-Contruct</h1>
      <div className="SearchBar">
        <Form.Control
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          style={{ fontSize: "1.5rem" }}
          className="searchProduct"
          type="text"
          placeholder="Search Product ..."
        />
      </div>

      <a
        className="cart"
        href="#"
        onClick={GotoCart}
        style={{ fontSize: "1.5rem" }}
      >
        Cart
      </a>
      <img className="bag" src="bag.png" alt="this is bag"></img>
    </div>
  );
};

export default Heading;
