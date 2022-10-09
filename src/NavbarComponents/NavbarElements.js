import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

//below is for the entire background
export const Nav = styled.nav`
    background: #fff;
    position: sticky;
    top: 0;
    height: 40px;
    display: flex;
    justify-content: center;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-indez: 10;
  
    z-index:1000;
`

//each section
export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    background: #fff;
    &.active {
        color: 	#818589;
    }


    
`
//the hamburger menu
export const Bars = styled(FaBars)`
    display: none;
    color: #000;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
        
    }

    
`

export const Close = styled(FaTimes)`
    display: none;
    color: #000;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
        
    }

    
`


export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
    
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
    
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border:none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;


&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`
export const shoppingBasket = styled.div`
    display: flex;
    align-items: center;
    
`

export const shoppingCount = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    
`


export const NavLinkMobile = styled(Link)`
    margin-top: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &.active {
        color: 	#FF0000;
    }
    &:hover{
        transform: scale(1.3);
        transition: all 0.4s ease-in-out;
        cursor: pointer;

}


    
`