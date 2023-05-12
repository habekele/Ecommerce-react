import React, { useContext } from "react";
import "./cart.css";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, prodImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={prodImage}></img>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p className="price">${price}</p>
        <div className="quantity">
          <label for="quantity">Quantity: </label>
          <button onClick={()=> removeFromCart(id)}> - </button>
          <input class="input" value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)} />
          <button onClick={()=> addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
