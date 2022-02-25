import React, {useEffect} from 'react'
import {Div, SkillWrapper} from './style'
import {TweenMax} from 'gsap'
import {httpApi} from "../../utils/http/http-axios";
import {Loading} from "../../components/loader";


const Skills = () =>{
    const [skills, setSkills] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        httpApi.get('/skills').then(res => {
            setSkills(res.data);
        }).finally(() => {
            setIsLoading(false);
        });
    },[])

    useEffect(()=>{
        TweenMax.from('.wrapper', 2,{
            opacity:0
        })
   },[])
    return (
        <>
            {
                isLoading ? <Loading/>:
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
            }
        </>

    )
}
export default Skills
