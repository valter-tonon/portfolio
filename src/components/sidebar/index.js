import React from 'react'
import {SideWrapper} from './style'
import Avatar from '../avatar'
import Social from '../socialLinks'
import MenuLinks from '../menu/menuLinks'

const SideBar = () =>{

    return (
        <SideWrapper>
            <Avatar/>
            <h1>Valter L. Tonon</h1>
            <h3>Desenvolvedor FullStack Junior</h3>
            <p>tononvalter@gmail.com</p>
            <p>+55 (47)99275-2417</p>
            <Social/>
            <MenuLinks/>
        </SideWrapper>
    )
}

export default SideBar