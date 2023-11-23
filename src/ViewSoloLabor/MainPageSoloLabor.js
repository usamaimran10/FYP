import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import Heading from "./Heading";
import Navbar from "../HomepageSections/containers/Navbar";
import { array } from "./API";
import { useSelector, useDispatch } from "react-redux";
import Productlist from "./Productlist";
import "./MainPage.css";
import axios from "axios";
import { soloLaborActions } from "../Store/soloLabor";

const MainPageSoloLabor = () => {
  let catName = localStorage.getItem("SolCategory");
  const sololabor = useSelector((state) => state.sololabor);
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
      .get("https://fyp-backend-gules.vercel.app/api/gig/viewlabourGigs")
      .then((resp) => {
        console.log(resp.data);

        dispatch(soloLaborActions.setSololabor(resp.data));
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
                {sololabor.map((product, i) => {
                  return (
                    <div key={i} className="col-md-4 productlist">
                      <Productlist
                        src={product.main_image}
                        title={product.gig_title}
                        detail={product.gig_description}
                        price={product.price}
                        id={product.service_provider._id}
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

export default MainPageSoloLabor;
