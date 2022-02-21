import React, {useEffect} from 'react'
import {SocialWrapper} from './style'
import {httpApi} from "../../utils/http/http-axios";
import {getSocialLinkLogos} from "../../Enums/socialLinks";
import {toArray} from "gsap/gsap-core";


const Social = () =>{
    const [links, setLinks] = React.useState({});
    useEffect(() => {
        httpApi.get('/social-links').then(res => {
            setLinks(res.data);
        });
    }, []);
    console.log(Object.entries(links));
    return(
        <SocialWrapper>
            {
                Object.entries(links).map(([key, value]) => {
                    return(
                        <a key={key} className={value.name} href={value.url} target="_blank" rel="noopener noreferrer">
                            {getSocialLinkLogos(value.name)}
                        </a>
                    )
                })
            }
        </SocialWrapper>
    )
}
export default Social
