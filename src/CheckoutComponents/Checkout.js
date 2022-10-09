import React from 'react'
import { FaBasketballBall } from 'react-icons/fa';
import { useStateValue } from '../StateProvider/StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'
import icon from '../images/icon2.png'

const Checkout = () => {
    const [{cart, user}, dispatch] = useStateValue();

    

  return (
    <div className="checkout">
        <div className="checkoutLeft">
      
            <div>
                <img className='checkoutAd'
                src={icon}
                />
                <h3>Hello {user?.email}</h3>
                <h2 className="checkoutTitle">
                    Your Cart
                </h2>
                {cart.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    size={item.size}
                    />
                ))}

            </div>
        </div>
        <div className="checkoutRight">
            <Subtotal/>
        </div>
    </div>

   
  )
}

export default Checkout
