import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider/StateProvider';
import { getCartTotal } from '../StateProvider/Reducer';
import {Link, useNavigate} from 'react-router-dom'


function Subtotal() {
  const navigate = useNavigate();
  const [{cart}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <div className='subtotalh1'>
        Order Summary
      </div>
      <p>
        Subtotal ({cart.length} items): <strong>${getCartTotal(cart)}</strong>
      </p>
      <p>
        Shipping: <strong>Free</strong>
      </p>
      <small className="subtotalGift">
        <input type="checkbox"/> This order contains a gift
      </small>

        <button onClick={e => navigate('/Payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
