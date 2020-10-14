import React ,{useEffect, useState }from 'react'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import {Form, Input, Textarea } from '@rocketseat/unform'
import { Wrapper } from './style'
import { TweenMax } from 'gsap'


const schema = Yup.object().shape({
    name:Yup.string()
        .required('Seu nome é importante!'),
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é importante!'),
    message: Yup.string()
        .required('Sua mensagem precisa ser preenchida.')
    
})
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }


const Contratar = () =>{
    useEffect(()=>{
        TweenMax.from('.wrapper', 1.5,{
            opacity:0
        })
   },[])
       
    const initialState = {
        email: '',
        name: '',
        message: ''

    }
    const [fields, setFields]= useState(initialState)

    const handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...fields })
        }).then(() => toast('E-mail enviado com sucesso!')).catch(error => alert(error))
        //e.preventDefault()
        setFields(initialState)

      };
  
      const handleChange = e => setFields({...fields, [e.currentTarget.name]: e.currentTarget.value });
   

   
    return (
        
        <Wrapper className='wrapper'>
       
        <Form id='contact-form' name='contact' schema={schema} onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <input type='hidden' name='contact_number'/>
     <h1>Fale Comigo</h1>
            <Input className='nome' type="text" name="name" value={fields.name} placeholder="Digite seu nome" onChange={handleChange}/><br/>
            <Input type="email" name="email"   placeholder="Seu email" value={fields.email} onChange={handleChange}/><br/>
            <Textarea name='message'  placeholder="Deixe uma mensagem" value={fields.message} onChange={handleChange}></Textarea><br/>
            <button type='submit'>ENVIAR MENSAGEM</button>
        </Form>
       
        </Wrapper>
    )
}
export default Contratar