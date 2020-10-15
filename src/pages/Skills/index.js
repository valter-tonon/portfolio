import React,{ useEffect } from 'react'

import js from '../../assets/images/javascript.png'
import web from '../../assets/images/unnamed.png'
import node from '../../assets/images/nodejs_logo.png'
import react from '../../assets/images/react.svg'
import mysql from '../../assets/images/mysql.png'
import python from '../../assets/images/python-logo.png'
import php from '../../assets/images/php-logo.png'
import reactnative from '../../assets/images/react-native.png'
import mongo from '../../assets/images/mongo.png'
import salesforce from '../../assets/images/angularjs-logo.png'
import wordpress from '../../assets/images/WordPress.png'
import graphql from '../../assets/images/Moby.png'
import { SkillWrapper, Div } from './style'
import { TweenMax } from 'gsap'


const Skills = () =>{

    useEffect(()=>{
        TweenMax.from('.wrapper', 2,{
            opacity:0
        })
   },[])
    return (
        <SkillWrapper className='wrapper'>
            <Div>
            <div>
                <img src={js} alt="javascript"/>
                <h2>javascript</h2>
            </div>
                
                
                  
                
            </Div>
            <Div>
            <div>
                <img src={web} alt="HTML/CSS"/>
                <h2>HTML5 + CSS </h2>
            </div>
                
              
            </Div>
            <Div>
            <div>
                <img src={node} alt="nodejs"/>
                <h2>NodeJs</h2>
            </div>
              
              
            </Div>
            <Div>
            <div>
                <img src={react} alt="react"/>
                <h2>React</h2>
            </div>
              
               
            </Div>
            <Div>
            <div>
                <img src={mysql} alt="mysql"/>
                <h2>MySql</h2>
            </div>
                
                <div >
                 
                </div>
            </Div>
            <Div>
            <div>
                <img src={python} alt="python"/>
                <h2>Python</h2>
            </div>
            </Div>
            <Div>
                <div>
                    <img src={php} alt="python"/>
                    <h2>Php</h2>
                </div>
            </Div>
            <Div>
                <div>
                    <img src={reactnative} alt="python"/>
                    <h2>React-Native</h2>
                </div>
            </Div>
            <Div>
                <div>
                    <img src={mongo} alt="python"/>
                    <h2>MongoDB</h2>
                </div>
            </Div>
            <Div>
                <div>
                    <img src={salesforce} alt="python"/>
                    <h2>AngularJs</h2>
                </div>
            </Div>
            <Div>
                <div>
                    <img src={wordpress} alt="python"/>
                    <h2>WordPress</h2>
                </div>
            </Div>
            <Div>
                <div>
                    <img src={graphql} alt="python"/>
                    <h2>Docker</h2>
                </div>
            </Div>
        </SkillWrapper>
    )
}
export default Skills