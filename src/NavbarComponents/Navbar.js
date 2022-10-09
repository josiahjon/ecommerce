
import React, {useState} from 'react'

import {
    Nav, 
    NavLink, 
    Bars, 
    NavMenu,  
   
    NavLinkMobile
} from './NavbarElements';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from '../StateProvider/StateProvider';
import {auth} from '../firebase'
import './Navbar.css'
import {FaTimes} from 'react-icons/fa'


const Navbar = () => {
    const [{ cart, user }, dispatch] = useStateValue()

    const handleAuthentication = () =>{
        if (user) {
            auth.signOut()
        }
    }

    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
       
        setNavbarOpen(prev => !prev)
      }





  return (
    <>
      <Nav>
        <NavLink to="/">
            <img src={require('../images/iconForNav.png')} className='logo'style={{align:'left'}}/>
        </NavLink>


        <Bars onClick={handleToggle}/>
        { navbarOpen ? <div className='menuNav'>
            <div className="navWrapper">
            <NavLinkMobile to="/Mens" activeStyle onClick={handleToggle}>
                COLLECTION
            </NavLinkMobile>
            <NavLinkMobile to="/Locations" activeStyle onClick={handleToggle}>
                LOCATIONS
            </NavLinkMobile>
            <NavLinkMobile to='/AboutUs' activeStyle onClick={handleToggle}>
                ABOUT US
            </NavLinkMobile>
            <NavLinkMobile to='/Checkout' activeStyle onClick={handleToggle}>
                <ShoppingCartIcon className="shoppingBasket"/>
                <span className="shoppingCount">{cart?.length}</span>
            </NavLinkMobile>
            <NavLinkMobile to='/Orders' activeStyle onClick={handleToggle}>
                Orders
            </NavLinkMobile>
            <NavLinkMobile to={!user && '/SignIn'} activeStyle onClick={handleToggle}>
                <div onClick={handleAuthentication}>
                <span className='headerOptionLineOneMobile'>
                    {!user ? 'GUEST:' : user.email}
                    {user ? ' SIGN OUT' : ' SIGN IN'}</span>
                </div>
            </NavLinkMobile>
            <div className='close' onClick={handleToggle}><FaTimes/></div>
            </div>
            </div> : null}
        




        <NavMenu>
            <NavLink to="/Mens" activeStyle>
                COLLECTION
            </NavLink>
            <NavLink to="/Locations" activeStyle>
                LOCATIONS
            </NavLink>
            <NavLink to='/AboutUs' activeStyle>
                ABOUT US
            </NavLink>
            
            <NavLink to={!user && '/SignIn'} activeStyle>
                <div onClick={handleAuthentication}>
                <span className='headerOptionLineOne'>{!user ? 'Guest' : user.email}</span>
                <span className='headerOptionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </NavLink>
            
            <NavLink to='/Checkout' activeStyle>
                <ShoppingCartIcon className="shoppingBasket"/>
                <span className="shoppingCount">{cart?.length}</span>
            </NavLink>
            <NavLink to='/Orders' activeStyle>
                Orders
            </NavLink>
        </NavMenu>

      </Nav>
    </>
  )
}

export default Navbar;