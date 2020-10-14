import React from 'react'
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { InstagramAlt } from '@styled-icons/boxicons-logos/InstagramAlt'
import { WhatsappSquare } from '@styled-icons/boxicons-logos/WhatsappSquare'

import { SocialWrapper } from './style'

const Social = () =>{
    return(
        <SocialWrapper>
            <span><a className="linkedin" href="https://www.linkedin.com/in/valter-tonon-5a8986162/" target='blank'><LinkedinSquare width='50px'/></a></span>
            <span><a className="github" href="https://github.com/valter-tonon" target='blank'><Github width='50px'/></a></span>
            <span><a className="instagram" href="https://www.instagram.com/valtertonon/" target='blank'><InstagramAlt width='50px'/></a></span>
            <span><a className="whats" href=" https://wa.me/5547992752417?text=Olá!!!" target='blank'><WhatsappSquare width='50px'/></a></span>
        </SocialWrapper>
    )
}
export default Social