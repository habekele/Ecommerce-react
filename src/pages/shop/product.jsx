import React from 'react'

export const Product = (props) => {
    const {id,productName,price,prodImage} = props.data;
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
        <button className='addToCartBttn'>Add To Cart</button>
    </div>
  );
};
