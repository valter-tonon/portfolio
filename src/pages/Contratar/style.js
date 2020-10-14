import styled from 'styled-components'
import  write  from '../../assets/images/icons8-teclado-100.png'
import mail from '../../assets/images/icons8-mensagem-100.png'
import user from '../../assets/images/icons8-nome-100.png'
import 'react-toastify/dist/ReactToastify.css'
export const Wrapper = styled.form ` 
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    overflow: auto;
    

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 250px;
        
    }

    h1{
        margin-bottom: 20px;
        color: #fff;
    }
    input.nome{
        margin-top: 10px;
        width: 500px;
        padding:20px 0px 20px 40px; 
        background: rgba(0,0,0,0.2);
        background-image: url(${user});
        background-repeat: no-repeat;
        background-position-x: 5px;
        background-position-y: 10px;
        background-size:30px;
        border: #999;
        border-radius: 4px;
        color: #fff;
    }

    input{
        margin-top: 10px;
        width: 500px;
        padding:20px 0px 20px 40px; 
        background: rgba(0,0,0,0.2);
        background-image: url(${mail});
        background-repeat: no-repeat;
        background-position-x: 5px;
        background-position-y: 10px;
        background-size:30px;
        border: #999;
        border-radius: 4px;
        color: #fff;
    }
    textarea{
        margin-top: 10px;
        background-color: rgba(0,0,0,0.2);
        background-image: url(${write}) ;
        background-repeat: no-repeat;
        background-position-x: 5px;
        background-size: 30px;
        width: 500px;
        height:200px;
        padding: 10px 0px 10px 40px;
        border: #999;
        border-radius: 4px;
        font-size: 16px;
        color: #fff;

    }
    span{
        color: #f64c75;
    }
    button{
        background:  #F77B57;
        padding: 20px 20px;
        border: none;
        border-radius: 4px;
        transition: background 1s;

        &:hover{
            background: #1fa1f2;
        }

    }
`