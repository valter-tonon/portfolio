import React, { useEffect } from 'react'
import { Wrapper } from './styled'
import Social from '../../components/socialLinks'
import TextLoop from 'react-text-loop'
import TweenMax from 'gsap'


const Home = ()=>{
 useEffect(()=>{
     TweenMax.from(".wrapper",1.5,{
         opacity:0
     })
 },[])
    return(
        <Wrapper className="wrapper">
            <h1>Valter L. Tonon</h1>
            <span> <TextLoop className="trans" springConfig={{ stiffness: 70, damping: 31 }}
            adjustingSpeed={500}>
            <span className="trans">Front-end </span>
            <span className="trans">Back-end </span>
             <span className="trans">Mobile </span>
 
            </TextLoop> Developer</span>
          
               
            <Social />
        </Wrapper>
        
    )
}

export default Home