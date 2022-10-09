import React, { useEffect } from 'react';
import './App.css';
import Navbar from './NavbarComponents/Navbar'
import { Route, Routes}  from 'react-router-dom';
import Mens from './mensComponents/Mens'
import Footer from './footerComponents/Footer'
import Locations from './locationsComponents/Locations'

import AboutUs from './aboutUsComponents/AboutUs'
import Home from './homeComponents/Home'
import SignIn from './SignInComponents/SignIn'
import Checkout from './CheckoutComponents/Checkout'
import Orders from './CheckoutComponents/Orders'
import { auth} from './firebase'
import { useStateValue} from './StateProvider/StateProvider'
import Payment from './CheckoutComponents/Payment'
import Shoe2 from './Shoes/Shoe2'
import {loadStripe} from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Shoe3 from './Shoes/Shoe3'
import Shoe4 from './Shoes/Shoe4'
import Shoe5 from './Shoes/Shoe5'

const promise = loadStripe(
  'pk_test_51Lpj8GB9BpPVdpoxY5Vjdduu9MklYgkWMZorcIg4ZULntiCWVc3LnueTvDDduB6TECeUekEAqW567FefB6Kr26mt00AjDW5xUb')

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    //only run once when app component loads.
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>> ', authUser)
      if (authUser) {
        //user just logged in or was logged in
        
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Mens' element={<Mens/>} />
          <Route path='/Locations' element={<Locations/>} />
          <Route path='/AboutUs' element={<AboutUs/>} />
          <Route path='/SignIn' element={<SignIn/>} />
          <Route path='/Checkout' element={<Checkout/>} />
          <Route path='/Shoe2' element={<Shoe2/>}/>
          <Route path='/Shoe3' element={<Shoe3/>}/>
          <Route path='/Shoe4' element={<Shoe4/>}/>
          <Route path='/Shoe5' element={<Shoe5/>}/>
          <Route path='/Orders' element={<Orders/>}/>

          <Route path='/Payment' element={(<Elements stripe={promise}>
            
              <Payment/>
            </Elements>
          )}/>

            

        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
