import React, {useEffect, useState} from 'react'
import { TweenMax } from 'gsap'
import {httpApi} from "../../utils/http/http-axios";
import {Loading} from "../../components/loader";
import { Wrapper } from './style'


const Home = () =>{
    const [about, setAbout] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        httpApi.get('about').then(res => {
            setAbout(res.data);
        }).finally(() => {
            setLoading(false);
        });
    }, [])

    useEffect(()=>{
        TweenMax.from('.wrapper', 1.5,{
            opacity:0
        })
    },[])

    return (
        <>
            {
                loading ? <Loading /> :
                    <Wrapper className='wrapper'>
                        <h1>{about.title}</h1>
                        <span dangerouslySetInnerHTML={{__html : about.text}}/>
                    </Wrapper>
            }

        </>

)
}
export default Home
