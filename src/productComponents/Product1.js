import React from 'react'
import "./Product.css"

import {Link} from 'react-router-dom';
const Product1 = ({id, title, image, price, destination}) => {
 

  return (
    
    <Link to={destination} className="product">
        <div className="productInfo">
          <p>{title}</p>
         <p className="productPrice">
          <small>$</small>
          <strong>{price}</strong>
         </p>     
        </div> 
        <img className="img"
          src={image}
          alt=""
        />
    </Link>
    
  )
}

export default Product1