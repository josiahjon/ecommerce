import {useState}  from 'react'
import './Shoe.css'



const Dropdown = ({selected, setSelected}) => {
    const [isActive, setIsActive] = useState(false)
    const options = ['8', '8.5', '9', '9.5', '10' , '10.5', '11', '11.5', '12', '12.5', '13', '13.5', '14']

  return (
    <div className='dropdown'>
          <div className='dropdownButton' 
          onClick={(e) => setIsActive(!isActive)}>
            {selected}
            <div className='carret'></div>
          </div>
          {isActive && (
            <div className='dropdownContent'>
                {options.map((option) => (
                    <div onClick={(e) => {
                    setSelected(option)
                    setIsActive(false)
                    }} 
                    className='dropdownItem'
                    >
                        {option}
                    </div>
                

                ))}
            
             
            </div>
             )}
        </div>
  )
}

export default Dropdown
