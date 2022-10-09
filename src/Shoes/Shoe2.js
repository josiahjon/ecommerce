import React, {useState}from 'react'
import { useStateValue} from '../StateProvider/StateProvider'
import './Shoe.css'
import ImageSlider from '../SliderComponents/ImageSlider'
import {SliderData} from '../SliderComponents/SliderData'
import {useLocation} from "react-router-dom";
import Dropdown from './Dropdown'



const Shoe2 = () => {
  const location = useLocation()
  
  React.useEffect(() => {
    console.log(location.state.title)
  }, [])

  const SliderData2 =[
    {
        image: location.state.image2
    },
    {
      image: location.state.image3
  },
  {
      image: location.state.image4
  },
  {
      image: location.state.image5
  }
  ]


    const [{cart}, dispatch] = useStateValue()
    const [selected, setSelected] = useState('Select Size')
    
    const addToCart = () => {
      if (selected === 'Select Size'){
  
        return
      } else {
        
      dispatch({
            type: 'ADD_TO_CART',
            item: {
              id: location.state.id,
              title: location.state.title,
              image: location.state.image,
              price:  parseInt(location.state.price),
              size: selected
            },
    })
  }
    }

   


  // {location.state.title}
  return (
    <div className="shoe">
    <div className="shoeLeft">
      
        <ImageSlider slides={SliderData2}/>

        
     
     
    </div>
    <div className="shoeRight">
    <div className='shoeInfo'>
        <div className='shoeh1'>
          {location.state.title}
        </div>
        <div className='shoeh4'>
        {location.state.id}
        </div> 
            Select Size US Mens
            <Dropdown selected={selected} setSelected={setSelected}  />
            {selected === 'Select Size' ? <Text /> : null}
          

        <div className='shoeh3'>
            Price: ${location.state.price}
        </div>
        <div className='shoeh5'>
        Pay in 4 interest-free payments with Klarna, Affirm or Afterpay.
        </div>
       <button className='addCart' onClick={addToCart}>Add to cart</button>
    </div>
    </div>
  </div>
  )
}

const Text = () => <div className='warning'>Select a shoe size</div>;

export default Shoe2

