import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import './CheckoutProduct.css'

const CheckoutProduct = ({id, image, title, price, size, hideButton}) => {
    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () =>{
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
            size: size,
        })
    }

  return (
    <div className="checkoutProduct">
      <img className='checkoutProductImage' src={image}/>

      <div className='checkoutProductInfo'>
            <p className='checkoutProductTitle'>
                {title}
               
            </p>
            <p>Size: {size}</p>
            <p className='checkoutProductPrice'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            {!hideButton && (
              <button onClick={removeFromCart}>Remove from Basket
              </button>
            )}
           
      </div>
    </div>
  )
}

export default CheckoutProduct
