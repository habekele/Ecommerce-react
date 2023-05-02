import React, {useContext} from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'

export const Cart = () => {
  const { cartItems } = useContext(ShopContext)
  return (
    <div className='cart'>
      <div>
        <h1>Your Shopping Cart Items</h1>
      </div>
      <div className='cart-items'>
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0)
          {
            return <cartItem data={product}/>
          }
        })}
        </div>
    </div>
  )
}
