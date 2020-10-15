import React from 'react'
import {SideWrapper} from './style'
import Avatar from '../avatar'
import Social from '../socialLinks'
import MenuLinks from '../menu/menuLinks'
//import { logo } from '../assets/images/'

const SideBar = () =>{

    return (
        <SideWrapper>
            <Avatar/>
            <h2>Valter L. Tonon</h2>
            <h3>Desenvolvedor FullStack</h3>
            <p>contato@valtertonon.tech</p>
            <p>+55 (47)99275-2417</p>
            <Social/>
            <MenuLinks/>
        </SideWrapper>
    )
}

export default SideBar