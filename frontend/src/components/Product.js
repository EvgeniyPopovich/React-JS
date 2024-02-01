import React from 'react';
import './Product.css';

function Product({id, header,image, price}) {
  const basket =[]

  return (
    <div className="Product">
      <img src={image}/>
      <h1>{header}</h1>
      <p>{ `${price}руб `} </p>
      <button >В корзину</button>
    </div>
  );
}

export default Product;