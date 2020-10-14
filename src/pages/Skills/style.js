import styled from 'styled-components'

export const SkillWrapper = styled.section ` 
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    width:100%;
    height: 100%;
    color: #fff;
    overflow: hidden;
`
export const Div = styled.div ` 
    display: flex;
    
   
    width: 300px;
    height: 110px;
    border:1px solid #999;
    margin: 5px;
    transition: transform 0.5s;
    border-radius:4px;

    &:hover{
        transform: scale(1.1);
 }
    
    img{
        width: 100px;
        height: 100px;
    }
    h2{
        padding: 20px;
    }

    h1,h2,h3,p{
        margin-top:20px;
        text-align: center;
      
    }

    

`