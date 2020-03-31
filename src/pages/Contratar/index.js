import React ,{useEffect}from 'react'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import {Form, Input, Textarea } from '@rocketseat/unform'
import { Wrapper } from './style'
import { TweenMax } from 'gsap'
import { emailjs } from 'emailjs-com'

const schema = Yup.object().shape({
    name:Yup.string()
        .required('Seu nome é importante!'),
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é importante!'),
    texts: Yup.string()
        .required('Sua mensagem precisa ser preenchida.')
    
})



const Contratar = () =>{
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_6qlvIDEy', e.target, ' user_glnxvikiiln3NUVl7k4a4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
   
    useEffect(()=>{
     TweenMax.from('.wrapper', 1.5,{
         opacity:0
     })
})
    
    const sended = ()=> toast('E-mail enviado com sucesso!')
    return (
        <Wrapper className='wrapper'>
        
        <Form id='contact-form' schema={schema} onSubmit={sendEmail} >
        <input type='hidden' name='contact_number'/>
     <h1>Fale Comigo</h1>
            <Input className='nome' type="text" name="user_name" placeholder="Digite seu nome"/><br/>
            <Input type="email" name="user_email" placeholder="Seu email"/><br/>
            <Textarea name='message' placeholder="Deixe uma mensagem"></Textarea><br/>
            <button type='submit' onClick={sended}>ENVIAR MENSAGEM</button>
        </Form>
       
        </Wrapper>
    )
}
export default Contratar