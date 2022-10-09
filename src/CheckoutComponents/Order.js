import moment from 'moment'
import React from 'react'
import './Order.css'
import CheckoutProduct from '../CheckoutComponents/CheckoutProduct'

function Order({order}) {
  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
        <p className='orderId'>
            <small>{order.id}</small>
        </p>
        {order.data.cart?.map(item => (
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            size={item.size}
            hideButton
            />
        ))}
        <h3 className='orderTotal'>Order Total: ${order.data.amount / 100}.00</h3>
    </div>
  )
}

export default Order
