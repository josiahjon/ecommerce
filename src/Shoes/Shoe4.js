import React, {useState}from 'react'
import { useStateValue} from '../StateProvider/StateProvider'
import './Shoe.css'
import ImageSlider from '../SliderComponents/ImageSlider'
import Dropdown from './Dropdown'


const Shoe4 = () => {
  

  const SliderData2 =[
    {
        image: 'https://cdn.flightclub.com/2200/TEMPLATE/311965/1.jpg'
    },
    {
      image: 'https://cdn.flightclub.com/750/TEMPLATE/311965/2.jpg'
  },
  {
      image: 'https://cdn.flightclub.com/750/TEMPLATE/311965/3.jpg'
  },
  {
      image: 'https://cdn.flightclub.com/750/TEMPLATE/311965/4.jpg'
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
              id: "The Off-White x Nike Air Force 1 Low 'Brooklyn' features the same color block and details first seen in the 2019 'MCA' iteration and the 2021 'Lemonade' version. The 'Brooklyn' colorway features a vivid green leather upper, with classic Abloh details such as exposed foam construction and medial side text in Helvetica. The silver foil Swooshes return with black zigzag stitching, along with 'AIR' stamped on the lateral midsole.",
              title: 'Nike Off-White X Brookyln',
              image: 'https://cdn.flightclub.com/2200/TEMPLATE/311965/1.jpg',
              price:  1250,
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
            Nike Off-White X Brookyln
        </div>
        <div className='shoeh4'>
        The Off-White x Nike Air Force 1 Low 'Brooklyn' features the same color block and details first seen in the 2019 'MCA' iteration and the 2021 'Lemonade' version. 
        The 'Brooklyn' colorway features a vivid green leather upper, with classic Abloh details such as exposed foam construction and medial side text in Helvetica. 
        The silver foil Swooshes return with black zigzag stitching, along with 'AIR' stamped on the lateral midsole.
        </div> 
            Select Size US Mens
            <Dropdown selected={selected} setSelected={setSelected}  />
            {selected === 'Select Size' ? <Text /> : null}
          

        <div className='shoeh3'>
            Price: $1250
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

export default Shoe4
