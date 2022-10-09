import React, {useEffect, useState} from 'react'
import './Payment.css'
import { useStateValue} from '../StateProvider/StateProvider'
import CheckoutProduct from '../CheckoutComponents/CheckoutProduct'
import { Link, useNavigate } from 'react-router-dom'
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import {getCartTotal} from '../StateProvider/Reducer'
import axios from './Axios'
import {db} from '../firebase'

const Payment = () => {
    const navigate = useNavigate ();
    const [{cart, user}, dispatch] = useStateValue();



    const stripe = useStripe();
    const elements = useElements()

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState('')
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        //generate stripe secret which allows charging to a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',

                // stripe wants total in subunits (so cents for usd)
                url: `/payments/create?total=${getCartTotal(cart) * 100 }`
            })
            setClientSecret(response.data.clientSecret)
            console.log(response.data.clientSecret)
        }

        getClientSecret()
    }, [cart])

    console.log('the secret is > ', clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setProcessing(true)
        
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent }) => {
            //paymentIntent = paymentConfirmation

            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_CART'
            })

            navigate('/Orders', {replace:true})
        })

    }

    const handleChange = event => {
        setDisabled(event.empty)
        setError(event.error ? event.error.message : '')
    }

  return (
    <div className='payment'>
        <div className='paymentContainer'>

            <h1>
                Checkout (
                    <Link to='/checkout'>
                        {cart?.length} items
                    </Link>)
            </h1>

            <div className='paymentSection'>
                <div className='paymentTitle'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='paymentAddress'>
                    <p>{user?.email}</p>
                    <p>123 address lane</p>
                    <p> coder state, cs</p>
                </div>
            </div>
            <div className='paymentSection'>
                <div className='paymentTitle'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='paymentItems'>
                    {/* products */}
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
            <div className='paymentSection'>
                <div className='paymentTitle'>
                    <h3>Payment Method</h3>
                </div>
                <div className='paymentDetails'>
                    
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />

                        <div className='paymentPriceContainer'> 
                            <h3>Order Total: ${getCartTotal(cart)}.00</h3>
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> :
                                'Buy Now'}
                                </span>
                            </button>
                        </div>

                        {error && <div>{error}</div>}

                    </form>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Payment
