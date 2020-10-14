import React ,{ useEffect } from "react";
import { Work } from '@styled-icons/material/Work'
import { School } from '@styled-icons/material-twotone/School'
import { Wrapper, DivLeft, DivRight , Div, DivR, Div3, Div2} from './style'
import { TweenMax } from 'gsap'


const TimeLine = () => {
  useEffect(()=>{
    TweenMax.from('.divleft', 1,{
      x:-300,
      opacity:0
    })
    TweenMax.from('.divRight',1.5,{
      x: 300,
      opacity:0 ,
      delay:1.5
    })
    TweenMax.from('.icons',1.5,{
      x: 300,
      opacity:0 ,
      delay:1.5
    })
  },[])

  return(
  <Wrapper>
    <DivLeft className='divleft'>
      <Div >
        <div className='iconL'>
        <span><Work width='30px'/></span>
        </div>
        <div>
          <h2>2020-atual <br/>
             Climba Commerce
          </h2>
        </div>
        <p>Desenvolvedor Web</p>
      </Div>
      <Div2 className="icons">
          <div className='iconL1'>
            <span><School width='30px'/></span>
          </div>
      </Div2>
      <Div >
          <div className='iconL'>
             <span><Work width='30px'/></span>
          </div>
          <div>
             <h2>2015-2019 <br/>
                Casa Bella Móveis
             </h2>
          </div>
              <p>Administrador</p>
      </Div>
      <Div2 className="icons">
          <div className='iconL1'>
            <span><Work width='30px'/></span>
          </div>        
      </Div2>
      <Div3 >
        <div className='iconL'>
          <span><Work width='30px'/></span>
        </div>
        <div>
            <h2>2006 - 2010 <br/>
                Comercial Tomio</h2>
        </div>
            <p>Vendedor interno</p>
      </Div3>
    </DivLeft>
    <DivRight className='divRight'>
      <DivR>
        <div className='icon'>
          <span><School width='30px'/></span>
        </div>
        <div>
          <h2>2020-atual <br/>
              Unopar
          </h2>
        </div>
        <p>Curso Superior em Análise e desenvolvimento de sistemas</p>
      </DivR>     
      <DivR >
         <div className="icon">
            <span><Work width='30px'/></span>
         </div>
          <div>
            <h2>2010-2014 <br/>
               Ferromax
            </h2>
          </div>
          <p>Vendedor Externo</p>
      </DivR>
   
    </DivRight>
   
  </Wrapper>
)
  }

export default TimeLine