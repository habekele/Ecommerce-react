import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item'
import { useNavigate } from 'react-router-dom'
import "./cart.css"

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1>Your Shopping Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }

        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <h3>Subtotal: ${totalAmount}</h3>
          <div className="checkout-buttons">
            <button onClick={() => navigate("/Ecommerce-react")}> Continue Shopping </button>
            <button onClick={() => {checkout(); navigate("/checkout");}}> Checkout</button>
            </div>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  )
}
