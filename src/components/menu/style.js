import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MenuWrapper = styled.div` 
    display: flex;
    flex-direction: column;
    


`
export const Links = styled(Link) ` 
    color:  #F77B57;
    background:  #44495D;
    text-decoration: none;
    font-size:25px;
    padding: 10px;
    transition: color 1s;
    
    &:hover{
        color: #1fa1f2;
    }
`