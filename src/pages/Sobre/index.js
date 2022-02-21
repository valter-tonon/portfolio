import React, {useEffect, useState} from 'react'
import { Wrapper } from './style'
import { TweenMax } from 'gsap'
import {httpApi} from "../../utils/http/http-axios";


const Home = () =>{
    const [about, setAbout] = useState({});

    useEffect(() => {
        httpApi.get('about').then(res => {
            setAbout(res.data);
        })
    }, [])

    useEffect(()=>{
        TweenMax.from('.wrapper', 1.5,{
            opacity:0
        })
    },[])

    return (
        <Wrapper className='wrapper'>
            <h1>{about.title}</h1>
            <span dangerouslySetInnerHTML={{__html : about.text}}/>
        </Wrapper>
    )
}
export default Home
