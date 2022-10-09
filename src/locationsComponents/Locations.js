import React from 'react'
import './Locations.css'


const Locations = () => {
  return (
    <div className="location">
      <div className='locationTitle'>
        Locations
      </div>
      <div className="locationContainer">
        <div className="locationRow">

          <div className= 'locationCardNY'>
            <div className= 'locationWrapper'>
              <h1>Kicks New York</h1>
              <h2>812 Broadway</h2>
              <h2>New York, NY 1003</h2>
              <h3>Store Hours</h3>
              <h2>Monday - Sunday 11AM- 7PM ET</h2>
              <h3>Consignment</h3>
              <h2>Monday - Sunday 11AM- 5PM ET</h2>
            </div>
          </div>

          <div className= 'locationCardPhx'>
          <div className= 'locationWrapper'>
            <h1>Kicks Phoenix</h1>
            <h2>123 Street Avenue</h2>
            <h2>Phoenix, AZ 55555</h2>
            <h3>Store Hours</h3>
            <h2>Monday - Sunday 11AM- 7PM ET</h2>
            <h3>Consignment</h3>
            <h2>Monday - Sunday 11AM- 5PM ET</h2>
          </div>
          </div>
        
          <div className= 'locationCardMiami'>
            <div className= 'locationWrapper'>
            <h1>Kicks Miami</h1>
            <h2>432 Coder Road</h2>
            <h2>Miami, FL 14244</h2>
            <h3>Store Hours</h3>
            <h2>Monday - Sunday 11AM- 7PM ET</h2>
            <h3>Consignment</h3>
            <h2>Monday - Sunday 11AM- 5PM ET</h2>
            </div>
          </div>

          <div className= 'locationCardLA'>
          <div className= 'locationWrapper'>
            <h1>Kicks Los Angeles</h1>
            <h2>123 Hollywood Street</h2>
            <h2>Los Angeles, CA 10403</h2>
            <h3>Store Hours</h3>
            <h2>Monday - Sunday 11AM- 7PM ET</h2>
            <h3>Consignment</h3>
            <h2>Monday - Sunday 11AM- 5PM ET</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Locations
