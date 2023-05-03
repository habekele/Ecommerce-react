import React, {useContext} from "react";
import "./cart.css"
import { ShopContext } from '../../context/shop-context'


export const CartItem = (props) => {
  const { id, productName, price, prodImage } = props.data;
  const { cartItems } = useContext(ShopContext)

  return (
    <div className="cartItem">
      <img src={prodImage}></img>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p className="price">${price}</p>
        <p>Quantity: {cartItems[id]}</p>
      </div>
    </div>
  );
};
