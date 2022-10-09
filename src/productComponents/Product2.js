import React from 'react'
import "./Product.css"

import {Link} from 'react-router-dom';
const Product2 = ({id, title, image, price, image2, image3, image4, image5}) => {
 

  return (
    
    <Link to='/Shoe2' state= {{ id, title, image, price, image2, image3, image4, image5 }} className="product" style={{ textDecoration: 'none' }}>
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

export default Product2