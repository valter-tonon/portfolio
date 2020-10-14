import React ,{useEffect}from 'react'
import { Wrapper } from './style'
import { TweenMax } from 'gsap'


const Home = () =>{
    useEffect(()=>{
        TweenMax.from('.wrapper', 1.5,{
            opacity:0
        })
   },[])
    return (
        <Wrapper className='wrapper'>
        <h1>Sobre mim</h1>
        <p> Sou Valter Luciano Tonon, nascido em Rio do Sul/SC em 1982. Vivi a maior parte da minha vida em Rio do Sul e é onde resido atualmente.

    </p>
    <p> Trabalhei em algumas empresas como vendedor externo ou interno onde adquiri grande conhecimento na área moveleira, mais especificamente
    na parte sob-medida. Neste período me interessei também por projetos de interiores utilizando alguns softwares como Promob e AutoCad, este último fiz um curso. Após alguns anos vendendo para revendas de matéria-prima de móveis e projetando para alguns fabricantes de móveis, 
    acabei dando aulas de Promob por um curto período de tempo.   </p>
    <p>Devido a circunstâncias, acabei abrindo a minha própria marcenaria, cuja qual administrei por cerca de 4 anos, até que acabei tendo que vendê-la.
    Após esse período comecei a me dedicar ao mercado financeiro e acabei descobrindo a programação, cuja qual estou estudando
    até hoje e desenvolvi grande interesse.
</p><br/>
     <p>
        Venho estudando desde meados de 2019 e comecei em fevereiro de 2020 a faculdade de Análise e desenvolvimento de Sistemas.
        Tenho bom conhecimento em algumas linguagens, frameworks e bancos de dados cujos quais estão listados na página 
        Skills deste site. Aprendo rápido o que for necessário.
     </p>
        </Wrapper>
        
      
    )
}
export default Home