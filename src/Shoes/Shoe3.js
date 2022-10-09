import React, {useState}from 'react'
import { useStateValue} from '../StateProvider/StateProvider'
import './Shoe.css'
import ImageSlider from '../SliderComponents/ImageSlider'
import Dropdown from './Dropdown'


const Shoe3 = () => {
  

  const SliderData2 =[
    {
        image: 'https://cdn.flightclub.com/750/TEMPLATE/254938/1.jpg'
    },
    {
      image: 'https://cdn.flightclub.com/750/TEMPLATE/254938/2.jpg'
  },
  {
      image: 'https://cdn.flightclub.com/750/TEMPLATE/254938/3.jpg'
  },
  {
      image: 'https://cdn.flightclub.com/750/TEMPLATE/254938/4.jpg'
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
              id: "This red suede Air Jordan 5 Retro dropped in 2009 as part of the 2009 DMP ‘Raging Bull’ Pack, which also featured a black reflective Jordan 5. Here, a red suede upper is accented with contrasting black hits on the shoe’s molded eyelets, collar lining and midsole. The latter is embellished with the Jordan 5’s signature ‘shark tooth’ design, finished in white with red tips for a blood-chilling detail.",
              title: 'Jordan V',
              image: 'https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/052/891/412/original/724738_01.jpg.jpeg?action=crop&width=1600',
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
            Jordan V
        </div>
        <div className='shoeh4'>
        This red suede Air Jordan 5 Retro dropped in 2009 as part of the 2009 DMP ‘Raging Bull’ Pack, which also featured a black reflective Jordan 5. 
        Here, a red suede upper is accented with contrasting black hits on the shoe’s molded eyelets, collar lining and midsole. 
        The latter is embellished with the Jordan 5’s signature ‘shark tooth’ design, finished in white with red tips for a blood-chilling detail
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

export default Shoe3

