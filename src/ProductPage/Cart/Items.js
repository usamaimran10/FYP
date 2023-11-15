import React, { useContext, useState, useEffect } from "react";
import "./Cart.css";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "./Cart";

const Items = ({
  _id,
  prod_descp,
  prod_brand,
  main_image,
  prod_price,
  qty = 1,
  deleteItem,
}) => {
  const { removeItem, increment, decrement } = useContext(CartContext);
  const [amount, setAmount] = useState(prod_price);
  const [itemnmbr, setItemnmbr] = useState(qty);
  const addquanity = () => {
    setItemnmbr((nmbr) => {
      return nmbr + 1;
    });
    console.log(_id);
    increment(_id);
  };
  const subquantity = () => {
    setItemnmbr((nmbr) => {
      return nmbr - 1 < 1 ? 1 : nmbr - 1;
    });
    decrement(_id);
  };

  useEffect(() => {
    setAmount(prod_price * itemnmbr);
  }, [itemnmbr]);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={main_image}></img>
        </div>
        <div className="title">
          <h1>{prod_brand}</h1>
        </div>
        <div className="add-minus-quantity">
          <AiFillMinusCircle
            className="minus"
            style={{ height: "2rem", width: "2rem", cursor: "pointer" }}
            onClick={subquantity}
          ></AiFillMinusCircle>
          <input
            type="text"
            placeholder="2"
            className="quantity"
            placeholder={itemnmbr}
          ></input>
          <AiFillPlusCircle
            className="add"
            style={{ height: "2rem", width: "2rem", cursor: "pointer" }}
            onClick={addquanity}
          ></AiFillPlusCircle>
        </div>
        <div className="price">
          <h3>{amount}</h3>
        </div>
        <div className="remove-item">
          <BsTrashFill
            style={{
              height: "2rem",
              width: "2rem",
              color: "red",
              cursor: "pointer",
            }}
            onClick={() => {
              deleteItem(_id);
              removeItem(_id);
            }}
          ></BsTrashFill>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
