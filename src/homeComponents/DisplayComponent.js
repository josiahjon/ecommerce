import React from 'react'
import './DisplayComponent.css'
import {useNavigate} from 'react-router-dom';

const DisplayComponent = () => {

    const navigate = useNavigate();
    const navigateJordan = () => {
      navigate('/Shoe3');
    };

    const navigateNike = () => {
    navigate('/Shoe4');
    };

    const navigateAsics = () => {
        navigate('/Shoe5');
    };


  return (
    <div className='body'>
    <h1 className='header'>OUR LATEST DROPS</h1>
      <div class="container">
        <div class="card1">
            <div class="imgBx">
                <img src="https://image.goat.com/1000/attachments/product_template_pictures/images/052/891/410/original/724738_00.png.png"/>
            </div>
            <div class="contentBx">
                <h2>Jordan V Raging Bull</h2>
                <div class="price">
                    <h3>Price</h3>
                    <span>$299</span>
                    
                </div>
            <div class="size">
                <h3>Sizing</h3>
                <span>8 - 14</span>
                
            </div>
                <button className='buttonDirect' onClick={navigateJordan}>
                    Buy Now
                </button>
            </div>
        </div>
        

        <div class="card2">
            <div class="imgBx">
                <img src="https://image.goat.com/glow-4-5-25/375/attachments/product_template_pictures/images/073/720/045/original/935629_00.png.png"/>
            </div>
            <div class="contentBx">
                <h2>Nike Off-White</h2>
                <div class="price">
                    <h3>Price</h3>
                    <span>$1250</span>
                    
                </div>
            <div class="size">
                <h3>Sizing</h3>
                <span>8 - 14</span>
                
            </div>
                <button className='buttonDirect' onClick={navigateNike}>Buy Now</button>
            </div>
        </div>

        <div class="card3">
            <div class="imgBx">
                <img src="https://image.goat.com/1000/attachments/product_template_pictures/images/041/258/685/original/610024_00.png.png"/>
            </div>
            <div class="contentBx">
                <h2>Asics Atmos</h2>
                <div class="price">
                    <h3>Price</h3>
                    <span>$299</span>
                    
                </div>
            <div class="size">
                <h3>Sizing</h3>
                <span>8 - 14</span>
                
            </div>
                <button className='buttonDirect' onClick={navigateAsics}>Buy Now</button>
            </div>
        </div>


    </div>




    </div>
  )
}

export default DisplayComponent
