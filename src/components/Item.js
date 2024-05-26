import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState("")
  function handleCLick() {
    // console.log(cart)
    const addCart = cart === "" ? "in-cart" : ""
    setCart(addCart)

  }

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCLick}>{cart === "" ? "Add to Cart" : "Remove from cart"}</button>
    </li>
  );
}

export default Item;
