import React, { useContext, useState } from "react";
import "./Cart.css";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Button } from "react-bootstrap";
import Items from "./Items";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const gotoProductpage = () => {
    window.location.href = "/productpage";
  };
  const gotoAddress = () => {
    console.log(cartItems);
    localStorage.setItem("checkout", JSON.stringify(cartItems));
    localStorage.setItem("TotalAmount", totalAmount);
    window.location.href = "/address";
  };
  const deleteItem = (id) => {
    setCartItems(cartItems.filter((cart) => cart.id !== id));
  };
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    let items = window.localStorage.getItem("cart");

    if (items) {
      items = JSON.parse(items);
      if (items && items.length) setCartItems([...items]);
    }
    console.log("items", items);
  }, []);

  return (
    <>
      <header>
        <div
          style={{ marginLeft: "30px", display: "flex" }}
          className="row continue-shopping"
          onClick={gotoProductpage}
        >
          <div
            style={{ display: "flex", marginTop: "30px", cursor: "pointer" }}
          >
            <img
              lclassName="col-lg-6"
              src="Back.png"
              alt="arrow"
              className="arrow-icon text-right"
            ></img>
            <h3>Continue Shopping</h3>
          </div>
        </div>
      </header>
      <section className="main-cart-section">
        <h1 style={{ marginLeft: "30px" }}>Shopping Cart</h1>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {cartItems?.map((curItem) => {
                return (
                  <Items
                    key={curItem.id}
                    {...curItem}
                    deleteItem={deleteItem}
                  />
                );
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            CART TOTAL : <span>{totalAmount} RS</span>
          </h3>

          <button onClick={gotoAddress} style={{ marginLeft: "10px" }}>
            Checkout
          </button>
        </div>
        <section>
          <h1></h1>
        </section>
      </section>
    </>
  );
};

export default ContextCart;
