import styled from 'styled-components'
import fundo from '../../assets/images/gray-laptop-computer-showing-html-codes-in-shallow-focus-160107.jpg'

export const Wrapper= styled.div `
    width:100%;
    height: 100vh;
    background-image:url(${fundo});
    background-size: cover;
    display: flex;
    overflow: hidden;
    opacity: 0.9;
    filter: grayscale(0.7);
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: -1;

    h1{
        color: #FFF;
        background: none;
        font-size: 60px;
        font-weight: bold;
       

    }
    .icons{
        background: none;
    }
    p,span{
        color: #1fa1fb;
        font-size: 30px;
        background: none;
        font-weight: bold;
        margin-right:10px;
    }
  
   
`