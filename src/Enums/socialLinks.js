import React from 'react';
import {Github} from "@styled-icons/boxicons-logos/Github";
import {LinkedinSquare} from "@styled-icons/boxicons-logos/LinkedinSquare";
import {Twitter} from "@styled-icons/boxicons-logos/Twitter";
import {InstagramAlt} from "@styled-icons/boxicons-logos/InstagramAlt";
import {Youtube} from "@styled-icons/boxicons-logos/Youtube";
import {Facebook} from "@styled-icons/boxicons-logos/Facebook";
import {WhatsappSquare} from "@styled-icons/boxicons-logos/WhatsappSquare";
import {GooglePlus} from "@styled-icons/boxicons-logos/GooglePlus";
import {Behance} from "@styled-icons/boxicons-logos/Behance";

export const socialLinksEnum = {
    GITHUB : 'github',
    LINKEDIN : 'linkedin',
    TWITTER : 'twitter',
    INSTAGRAM : 'instagram',
    YOUTUBE : 'youtube',
    FACEBOOK : 'facebook',
    GOOGLE : 'google',
    PINTEREST : 'pinterest',
    WHATSAPP : 'whatsapp',
    BEHANCE : 'behance',
}

export const getSocialLinkLogos = (sociallink) => {
    switch(sociallink) {
        case socialLinksEnum.GITHUB:
            return <Github size={50}/>
        case socialLinksEnum.LINKEDIN:
            return <LinkedinSquare size={50}/>
        case socialLinksEnum.TWITTER:
            return <Twitter size={50}/>
        case socialLinksEnum.INSTAGRAM:
            return <InstagramAlt size={50}/>
        case socialLinksEnum.YOUTUBE:
            return <Youtube size={50}/>
        case socialLinksEnum.FACEBOOK:
            return <Facebook size={50}/>
        case socialLinksEnum.GOOGLE:
            return <GooglePlus size={50}/>
        case socialLinksEnum.WHATSAPP:
            return <WhatsappSquare size={50}/>
        case socialLinksEnum.BEHANCE:
            return <Behance size={50}/>
        default:
            return <Github size={50}/>
    }
}
