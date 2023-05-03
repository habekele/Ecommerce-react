import React from "react";
import "./cart.css"
export const CartItem = (props) => {
  const { id, productName, price, prodImage } = props.data;
  return (
    <div className="cartItem">
      <img src={prodImage}></img>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
    </div>
  );
};
