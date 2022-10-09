import React from 'react';
import {
      BgContainer,
      
      BackgroundVideo,
      CompBg,
    
      Component2Content,
    
      Component2h,
      Component3p,
      Row
}
from './BackgroundElements'
import Video from '../images/mensLandingTrimmed.mp4'

import { default as adidas } from '../images/adidas.svg'
import { default as asics } from '../images/asics.svg'
import { default as gucci } from '../images/gucci.svg'
import { default as jordan } from '../images/jordan.svg'
import { default as nike } from '../images/nike.svg'
import { default as prada } from '../images/prada.svg'
import { default as fendi } from '../images/fendi.svg'
import { default as calvinKlein } from '../images/calvin-klein.svg'
import { default as louisVuitton } from '../images/louisVuitton.svg'



const FirstComponent = () => {
  return (
  
    
    
    <BgContainer>
      <CompBg>
        <BackgroundVideo autoPlay loop muted src={Video} type='video.mp4'/>
      </CompBg>
 
      <Component2Content>
        Timeless Authentic Classics
      </Component2Content>
      <Component2h>
        For the shoe enthusiast 
      </Component2h>
      <Row>
        <Component3p>
          <img src={nike} alt=''/>
        </Component3p> 
        <Component3p>
          <img src={adidas} alt=''/>
        </Component3p>
        <Component3p>
          <img src={jordan} alt=''/>
        </Component3p>
        <Component3p>
          <img src={asics} alt=''/>
        </Component3p>
        <Component3p>
          <img src={gucci} alt=''/>
        </Component3p>
        <Component3p>
          <img src={prada} alt=''/>
        </Component3p>
        <Component3p>
          <img src={fendi} alt=''/>
        </Component3p>
        <Component3p>
          <img src={calvinKlein} alt=''/>
        </Component3p>
        <Component3p>
          <img src={louisVuitton} alt=''/>
        </Component3p>
      </Row>
    </BgContainer>
    
  )
}

export default FirstComponent