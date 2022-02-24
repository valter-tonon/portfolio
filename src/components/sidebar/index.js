import React, {useEffect, useState} from 'react'
import {SideWrapper} from './style'
import Avatar from '../avatar'
import Social from '../socialLinks'
import MenuLinks from '../menu/menuLinks'
import {httpApi} from "../../utils/http/http-axios";
//import { logo } from '../assets/images/'

const SideBar = () =>{

    const [user, setUser] = useState({})

    useEffect(() => {
        getUserInfo()
    },[])
    async function getUserInfo(){
        const res = await httpApi.get('user-info')
        setUser(res.data)
    }

    return (
        <SideWrapper>
            <Avatar urlImage = { user.avatar }/>
            <h2>{user.name}</h2>
            <h3>{user.title}</h3>
            <p>{user.email}</p>
            <p>+55 {user.phone}</p>
            <Social/>
            <MenuLinks/>
        </SideWrapper>
    )
}



export default SideBar
