import React, {useState}from 'react'
import { useStateValue} from '../StateProvider/StateProvider'
import './Shoe.css'
import ImageSlider from '../SliderComponents/ImageSlider'
import Dropdown from './Dropdown'

     
 
       




const Shoe5 = () => {
  

  const SliderData2 =[
    {
        image: 'https://cdn.flightclub.com/2200/TEMPLATE/193461/1.jpg'
    },
    {
      image: 'https://cdn.flightclub.com/750/TEMPLATE/193461/2.jpg'
  },
  {
      image: 'https://cdn.flightclub.com/750/TEMPLATE/193461/3.jpg'
  },
  {
      image: 'https://cdn.flightclub.com/750/TEMPLATE/193461/4.jpg'
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
              id: "A collaborative look, Sean Wotherspoon x Atmos x Gel Lyte 3 Corduroy gives the nod to both 20 years of atmos and 30 years of the retro runner. The shoes upper emerges with a vibrant corduroy construction sporting mismatched color blocking, with the right shoe drawing from Los Angeles and the left from Tokyo. The Tiger stripes are interchangeable, while Gel underfoot provides cushioning.",
              title: 'Asics Atmos',
              image: 'https://cdn.flightclub.com/2600/TEMPLATE/192945/1.jpg',
              price:  299,
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
                Asics Atmos
        </div>
        <div className='shoeh4'>
        A collaborative look, Sean Wotherspoon x Atmos x Gel Lyte 3 Corduroy gives the nod to both 20 years of atmos and 30 years of the retro runner. 
        The shoes upper emerges with a vibrant corduroy construction sporting mismatched color blocking, with the right shoe drawing from Los Angeles and 
        the left from Tokyo. The Tiger stripes are interchangeable, while Gel underfoot provides cushioning.
        </div> 
            Select Size US Mens
            <Dropdown selected={selected} setSelected={setSelected}  />
            {selected === 'Select Size' ? <Text /> : null}
          

        <div className='shoeh3'>
            Price: $299
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

export default Shoe5
