import styled from 'styled-components'


export const Wrapper = styled.div ` 
    display: flex;
    flex-direction:row;
    width: 100%;
    overflow: hidden;
    background:  #F77B57;

    h1,h2,h3,h4,p,span{
        color: #222;
        background: none;

    }
    
`
export const DivLeft = styled.div `
    display: flex;
    flex-direction: column;
    width: 520px;
    border-right:1px solid  #F77B57;
    justify-content:flex-start;
    padding-top:10px;
    z-index:1;
    
    

    
    
`
export const DivRight = styled.div `
  display: flex;
    flex-direction: column;
    width:520px;
    border-left:1px solid  #F77B57;
    justify-content:flex-start;
    padding-top: 120px;
    
`

export const Div3 = styled.div ` 
    align-self: flex-end;
    display: flex;
    background: linear-gradient(270deg, #7159c1,purple);
    flex-direction:column;
    width: 300px;
    height: 150px;
    border:1px solid #999;
    margin: 0 5px 5px 0;
    border-radius: 4px;
    position: relative;
    .iconL{
        margin-top: 40px;
        align-self: flex-end;
        background: none;
    }

    span{
        align-self: flex-end;
        background:#1fa1f2;
        width:60px;
        height:60px;
        border-radius: 50%;
        justify-content: center;
        margin-right: -35px;
        

        svg{
            filter:drop-shadow(1px 1px 5px #222);
        } 
    
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
        
    }
     
    h2{
        padding: 30px;
        margin-top: -120px;
        font-size: 20px;
        
        
    }

    h1,h3,p{
        margin-top:-30px;
        margin-left: 30px;
    }


`
export const DivR = styled.div ` 
    display: flex;
    background: linear-gradient(90deg, #7159c1,purple);
    flex-direction:column;
    width: 300px;
    height: 150px;
    border:1px solid #999;
    margin: 0 0 75px 5px;
    border-radius: 4px;
    .icon{
        margin-top: 50px;
        background: none;
    }

    span{
        align-self: flex-start;
        background:#1fa1f2;
        width:60px;
        height:60px;
        border-radius: 50%;
        justify-content: center;
        margin-left: -35px;
    

        svg{
            filter:drop-shadow(1px 1px 5px #222);
        }
    }
  
    h2{
        
        padding: 30px;
        margin-top: -120px;
        font-size: 20px;

    }

    h1,h3,p{
        
        margin-top:-30px;
        text-align: center;
        margin-left: 30px;
    }
   


`
export const Div = styled.div ` 
    align-self: flex-end;
    display: flex;
    background: linear-gradient(270deg, #7159c1,purple);
    flex-direction:column;
    width: 300px;
    height: 150px;
    border:1px solid #999;
    margin: 0 5px 75px 0;
    border-radius: 4px;
    position: relative;
    .iconL{
        margin-top: 40px;
        align-self: flex-end;
        background: none;
    }

    span{
        align-self: flex-end;
        background:#1fa1f2;
        width:60px;
        height:60px;
        border-radius: 50%;
        justify-content: center;
        margin-right: -35px;
        

        svg{
            filter:drop-shadow(1px 1px 5px #222);
        } 
    
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
        
    }
     
    h2{
        padding: 30px;
        margin-top: -120px;
        font-size: 20px;
        
        
    }

    h1,h3,p{
        margin-top:-30px;
        margin-left: 30px;
    }


`