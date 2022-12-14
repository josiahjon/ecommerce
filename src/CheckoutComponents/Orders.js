import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import './Orders.css'
import { useStateValue } from '../StateProvider/StateProvider'
import Order from './Order'
const Orders = () => {
    const [{ cart, user}, dispatch] = useStateValue()
    const [orders, setOrders] = useState([])

    useEffect(() => {

        if(user) {

       

        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => ( 
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
        } else {
            setOrders([])
        }
    }, [user])

  return (
    <div className='orders'>
        <h1>Orders Placed</h1>

        <div classNAME="ordersOrder">
            {orders?.map(order => (
                <Order order={order} />
            ))}
        </div>
    </div>
  )
}

export default Orders
