import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import Heading from "./Heading";
import Navbar from "../HomepageSections/containers/Navbar";
import { array } from "./API";
import { useSelector, useDispatch } from "react-redux";

import Productlist from "./Productlist";
import "./MainPage.css";
import axios from "axios";
import { professionalsActions } from "../Store/professional";

const MainPage = () => {
  let catName = localStorage.getItem("ProdCategory");
  useEffect(() => {
    console.log(catName);
  }, []);
  const professionals = useSelector((state) => state.professionals);
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);
  const handleCart = (src, title, detail) => {
    let obj = {
      src,
      title,
      detail,
    };
    setCart([...cart, obj]);
  };
  useEffect(() => {
    // Put the object into storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    console.log("view professionals");
    axios
      .get("http://localhost:5000/api/gig/viewProfGigs")
      .then((resp) => {
        console.log(resp.data);
        dispatch(professionalsActions.setProfessional(resp.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Filters name={catName} />
          </div>
          <div className="col-md-9">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <Heading />
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row">
                {professionals.map((product, i) => {
                  return (
                    <div key={i} className="col-md-4 productlist">
                      <Productlist
                        src={product.main_image}
                        title={product.gig_title}
                        detail={product.gig_description}
                        price={product.price}
                        id={product._id}
                        handleChange={handleCart}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
