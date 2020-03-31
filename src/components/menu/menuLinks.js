import React from 'react'
import { MenuWrapper, Links } from './style.js'

const MenuLinks = () =>{
    return(
        <MenuWrapper>
            
                <Links to='/'>Home</Links>
                <Links to='/skills'>Skills</Links>
                <Links to='/experiencias'>Experiências</Links>
                <Links to='/contratar'>Contrate-me</Links>
            
        </MenuWrapper>
    )
}
export default MenuLinks