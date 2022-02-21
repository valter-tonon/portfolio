import React from 'react'
import {AvatarWrapper} from "./style";

const Avatar = (props) =>{
    return(
        <AvatarWrapper src={`${process.env.REACT_APP_API_HOST}/storage/${props.urlImage}`} alt=""/>
    )
}

export default Avatar
