import React,{ useEffect } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import js from '../../assets/images/javascript.png'
import web from '../../assets/images/unnamed.png'
import node from '../../assets/images/nodejs_logo.png'
import react from '../../assets/images/react.svg'
import mysql from '../../assets/images/mysql.png'
import python from '../../assets/images/python-logo.png'
import { SkillWrapper, Div } from './style'
import { TweenMax } from 'gsap'


const Skills = () =>{

    useEffect(()=>{
        TweenMax.from('.wrapper', 2,{
            opacity:0
        })
   })
    return (
        <SkillWrapper className='wrapper'>
            <Div>
            <div>
                <img src={js}/>
                <h2>javascript</h2>
            </div>
                <p>Essa é a linguagem que mais uso e estudo.</p>
                <div >
                    <CircularProgressbar value={75} text={`75%`} />
                </div>
            </Div>
            <Div>
            <div>
                <img src={web}/>
                <h2>HTML5 + CSS </h2>
            </div>
                <p>Tenho bom desenvolvimento com html e css. Foi por onde comecei.</p>
                <div >
                    <CircularProgressbar value={90} text={`90%`} />
                </div>
            </Div>
            <Div>
            <div>
                <img src={node}/>
                <h2>NodeJs</h2>
            </div>
                <p>Desnvolvo APIs com certa facilidade, mas estou me desenvolvendo ainda.</p>
                <div >
                    <CircularProgressbar value={55} text={`55%`} />
                </div>
            </Div>
            <Div>
            <div>
                <img src={react}/>
                <h2>React</h2>
            </div>
                <p>Este site foi feito com React. É das tecnologias que mais gosto.</p>
                <div >
                    <CircularProgressbar value={70} text={`70%`} />
                </div>
            </Div>
            <Div>
            <div>
                <img src={mysql}/>
                <h2>MySql</h2>
            </div>
                <p>Tenho conhecimentos médios em Bancos SQL e NO-SQL(MongoDb)</p>
                <div >
                    <CircularProgressbar value={50} text={`50%`} />
                </div>
            </Div>
            <Div>
            <div>
                <img src={python}/>
                <h2>Python</h2>
            </div>
                <p>Aprendi lógica de programação e aprendi um pouco de IA com Python</p>
                <div >
                    <CircularProgressbar value={40} text={`40%`} />
                </div>
            </Div>
        </SkillWrapper>
    )
}
export default Skills