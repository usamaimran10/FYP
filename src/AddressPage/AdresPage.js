import React, { useEffect, useState } from "react";
import Jwt from "jsonwebtoken";
import axios from "axios";

const AdresPage = () => {
  const [totalcash, setTotalCash] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [Lastname, setLastname] = useState();
  const [adress, setAdress] = useState();
  const [cAdres, setCAdres] = useState();
  const [infoForm, setInfoForm] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    postalCode: "",
    city: "",
  });
  const handleForm = (name, event) => {
    setInfoForm((prev) => {
      return {
        ...prev,
        [name]: event,
      };
    });
  };
  const catDetails = localStorage.getItem("checkout");
  const varUser = localStorage.getItem("UserData");
  const userId = Jwt.decode(varUser);
  console.log(userId.id);
  const itemdetails = JSON.parse(catDetails);
  console.log(itemdetails);

  const submitCart = async (e) => {
    e.preventDefault();
    console.log(infoForm);
    try {
      const res = await axios.post("http://localhost:5000/api/order/addOrder", {
        cart: itemdetails,
        cust_info: infoForm,
        cust_id: userId.id,
        total_price: totalcash,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getvalue = () => {
    let total = localStorage.getItem("TotalAmount");

    console.log(total);
    setTotalCash(total);
  };
  useEffect(() => {
    getvalue();
  }, []);
  return (
    <div
      className="container"
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "100px",
      }}
    >
      <div
        class="container"
        style={{ justifyContent: "center", fontSize: "2rem" }}
      >
        <div class="text-center">
          <h2 style={{ fontSize: "3rem" }}>Checkout form</h2>
        </div>

        <div class="row">
          <div class="col-md-8 order-md-1">
            <h4 class="mb-3" style={{ fontSize: "3rem" }}>
              Billing address
            </h4>
            <form class="needs-validation">
              <div class="row"></div>

              <div class="mb-3">
                <label style={{ fontSize: "2rem" }}>First Name</label>
                <input
                  style={{ fontSize: "2rem" }}
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder=""
                  onChange={(e) => {
                    handleForm("fullName", e.target.value);
                  }}
                />
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div class="mb-3">
                <label style={{ fontSize: "2rem" }} for="address">
                  Postal Code
                </label>
                <input
                  style={{ fontSize: "2rem" }}
                  class="form-control"
                  onChange={(e) => {
                    handleForm("postalCode", e.target.value);
                  }}
                />
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
              <div class="mb-3">
                <label style={{ fontSize: "2rem" }} for="address">
                  Phone Number
                </label>
                <input
                  style={{ fontSize: "2rem" }}
                  type="number"
                  class="form-control"
                  id="address"
                  placeholder=""
                  required=""
                  onChange={(e) => {
                    handleForm("phoneNumber", e.target.value);
                  }}
                />
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
              <div class="mb-3">
                <label style={{ fontSize: "2rem" }} for="address">
                  Address
                </label>
                <input
                  style={{ fontSize: "2rem" }}
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder=""
                  required=""
                  onChange={(e) => {
                    handleForm("address", e.target.value);
                  }}
                />
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div class="mb-3">
                <label for="address2" style={{ fontSize: "2rem" }}>
                  City
                </label>
                <input
                  style={{ fontSize: "2rem" }}
                  type="text"
                  class="form-control"
                  id="address2"
                  placeholder=""
                  onChange={(e) => {
                    handleForm("city", e.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="address2" style={{ fontSize: "2rem" }}>
                  Total Amount
                </label>
                <input
                  style={{ fontSize: "2rem" }}
                  type="text"
                  class="form-control"
                  id="address2"
                  value={totalcash}
                />
              </div>

              <hr class="mb-4" />

              <button
                onClick={submitCart}
                style={{ fontSize: "2rem" }}
                class="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>

        <footer class="my-5 pt-5 text-muted text-center text-small">
          <p class="mb-1">© 2022 E-Construct </p>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="#">Privacy</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Support</a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default AdresPage;
