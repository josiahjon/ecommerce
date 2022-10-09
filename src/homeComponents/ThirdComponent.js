import React from 'react'
import { IoIosArrowForward} from 'react-icons/io'
import {useNavigate} from 'react-router-dom';

 import './Home.css' 


const ThirdComponent = () => {
  const navigate = useNavigate();
  const navigateCollection = () => {
    // 👇️ navigate to /
    navigate('/Mens');
  };
  return (
    <div className="thirdComponent">
        <div className="thirdComponentContainer">
        {/* <div className="animate-character">
            Elevate your fall look
   
        </div> */}
        <div className="animate-character">
          It's More Than Style
          <p className='thirdComponenth2'> It's a Life-Style</p>
        </div>
       <div>
        <button onClick={navigateCollection} className="Button">
            Shop Now <IoIosArrowForward/>
        </button>
        </div>
        </div>
    </div>
  )
}

export default ThirdComponent
