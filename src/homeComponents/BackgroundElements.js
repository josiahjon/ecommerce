import styled from 'styled-components'

export const BgContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1058px;
    position: relative;
    z-index:1
    
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, 
            rgba(0,0,0, 0.2) 0%, 
            rgba(0,0,0, 0.6) 100%
            ), 
            linear-gradient(180deg, rgba(0,0,0 ,0.2) 0%, transparent 100%);
        z-index: 2;
            
    }

`
export const CompBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const BackgroundVideo = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    mask-image: linear-gradient(to bottom, rgba(0,0,
    0,1), rgba(0,0,0,0));
 
`



export const Component2Content = styled.div`
    font-size: 30px;
    z-index: 3;
    max-width: 1200px;
   
    padding: 8px 24px;
    display: flex;
    font-family: 'Oswald', sans-serif;
  
    color: #fff;
    align-items: middle;
`

export const Component2h = styled.div`
    z-index: 3;
    max-width: 1200px;
   
    padding: 8px 24px;
    display: flex;
    font-family: 'Oswald', sans-serif;

    color: #fff;
    align-items: middle;
`



export const Component3p = styled.div`
    z-index: 3;
  

    
`

export const Row = styled.div`
justify-content: center;
align-items: center;
    display: flex;
    margin-top: 30px;
    flex-wrap: wrap;
 
`

///////////////////////////////

