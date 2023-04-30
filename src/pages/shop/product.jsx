import React,{useContext} from 'react'
import { ShopContext} from '../../context/shop-context';
export const Product = (props) => {
    const {id,productName,price,prodImage} = props.data;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='product'>
        <img src = {prodImage} alt='images' />
        <div className='description'>
        <p>
            <b>{productName}</b>
        </p>
        <p>
            ${price}
        </p>
        </div>
        <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add To Cart</button>
    </div>
  )

};
