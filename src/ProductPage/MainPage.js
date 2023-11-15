import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import Heading from "./Heading";
import Navbar from "../HomepageSections/containers/Navbar";
import { array } from "./API";
import Productlist from "./Productlist";
import "./MainPage.css";
import { useSelector, useDispatch } from "react-redux";
import { productsActions } from "../Store/product";
import axios from "axios";

const MainPage = () => {
  let catName = localStorage.getItem("categoryName");
  useEffect(() => {
    console.log(catName);
  }, []);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  //const [products, setproducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Put the object into storage
    console.log("Prod Cart", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    console.log("inside axios");
    axios
      .get("http://localhost:5000/api/product/viewproducts")
      .then((resp) => {
        console.log(resp.data);
        dispatch(productsActions.setProducts(resp.data));
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
                {products.map((product, i) => {
                  return (
                    <div key={i} className="col-md-4 productlist">
                      <Productlist product={product} handleChange={setCart} />
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
// Object {
//   "__v": 0,
//   "_id": "61b4c80f196f590016c0d9f7",
//   "images": Array [
//     "http://res.cloudinary.com/pak-construct/image/upload/v1639237571/egtoskl4wcbanni4zpbx.jpg",
//     "http://res.cloudinary.com/pak-construct/image/upload/v1639237586/boztwof6napsd36xavsh.jpg",
//     "http://res.cloudinary.com/pak-construct/image/upload/v1639237598/xtgooudvkwunzzkegbw7.png",
//   ],
//   "likes": Array [],
//   "main_image": "http://res.cloudinary.com/pak-construct/image/upload/v1639237533/l92ironajyrpzmvogwc5.jpg",
//   "no_of_orders": null,
//   "prod_brand": "Lissani tikka",
//   "prod_category": "Kitchen",
//   "prod_desc": "Lahori best tikka in cheap rate available 24 hours",
//   "prod_detail_desc": "Lahori best tikka in cheap rate available 24 hoursLahori best tikka in cheap rate available 24 hoursLahori best tikka in cheap rate available 24 hours",
//   "prod_discount": null,
//   "prod_price": 20000,
//   "prod_weight": "1kg",
//   "qty": 2,
//   "quantity": 10,
//   "rating": "",
//   "rating_count": "0",
//   "reviews": Array [],
//   "sold_by": Object {
//     "__v": 0,
//     "_id": "61b45b1564056c0016b3d136",
//     "category": "seller",
//     "company_name": "Charsi tikka",
//     "fullName": "Jawad Ali",
//     "pec_no": "",
//     "rating": null,
//     "reviews": Array [],
//     "sub_category": null,
//     "user_id": "61b45b1564056c0016b3d134",
//   },
// },
