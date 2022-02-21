import React, {useEffect} from 'react'
import {Div, SkillWrapper} from './style'
import {TweenMax} from 'gsap'
import {httpApi} from "../../utils/http/http-axios";


const Skills = () =>{
    const [skills, setSkills] = React.useState([]);

    useEffect(() => {
        httpApi.get('/skills').then(res => {
            setSkills(res.data);
        })
    },[])

    useEffect(()=>{
        TweenMax.from('.wrapper', 2,{
            opacity:0
        })
   },[])
    return (
        <SkillWrapper className='wrapper'>
            {
                Object.entries(skills).map(([key, value]) => {
                    return (
                        <Div key={key}>
                            <img src={`${process.env.REACT_APP_API_HOST}/storage/${value.image}`} alt={value.name}/>
                            <h2>{value.name}</h2>
                        </Div>
                    )
                })
            }
        </SkillWrapper>
    )
}
export default Skills
