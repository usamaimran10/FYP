import React, { createContext, useReducer, useEffect } from "react";
import "./Cart.css";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Button } from "react-bootstrap";
import Items from "./Items";
import { products } from "./Products";
import ContextCart from "./ContextCart";

import { reducer } from "./Reducer";

export const CartContext = createContext();
let cart = window.localStorage.getItem("cart");
cart = JSON.parse(cart);
const initialState = {
  item: cart?.map((item) => ({
    ...item,
    quantity: 1,
  })),
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };
  useEffect(() => {
    dispatch({
      type: "GET_TOTAL",
    });
    console.log("hhh");
  }, [state.item]);
  return (
    <>
      <CartContext.Provider
        value={{ ...state, removeItem, clearCart, increment, decrement }}
      >
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};

export default Cart;
