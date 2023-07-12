import { useProgress } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect } from "react"
import { styled } from "styled-components"

const Container = styled.div`
position:absolute;
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
width:100%;
height:100%;
background: rgba(0, 0, 0, 1);
transition : all 2s ease;
transition-delay: 1250ms;
z-index:99999999999999;
opacity:1;
&.loaded {
    background: rgba(0, 0, 0, 0.5); 
}

&.start {
    background: rgba(0, 0, 0, 0) !important; 
    pointer-events:none;
    opacity:0;
}
`
const Button = styled.button`
padding: 1rem 1.66rem;
background:transparent;
opacity:0;
border: 2px solid white;
font-size:16px;
color:white;
transition: all 1s ease;
transition-delay: 1250ms;
&.showButton {
    opacity:1;
}
`
const Header1 = styled.h1`
position:absolute;
font-size: 128px;
font-weight:400;
color:white;
opacity:1;
transition: all 1s ease;
&.completed {
opacity:0;
}
`
const Header1Anim = styled.h1`
margin:0;
padding-bottom: 0px;
font-size: 128px;
font-weight:400;
color:white;
opacity:0;
transition: all 1s ease;
transition-delay: 1250ms;
&.completed {
opacity:1;
}
`

const ParDesc = styled.p`
font-size: 16px;
max-width:900px;
color:white;
letter-spacing: 0.05rem;
line-height: 2;
opacity:0;
font-weight: 300;
padding-bottom:2rem;
text-align:center;
transition: all 1s ease;
transition-delay: 1250ms;
&.completed {
opacity:1;
}
`

const LoadingScreen = (props) => {
    const {progress} = useProgress()
    return(
    <Container className={`${progress >= 100 ? "loaded" : ""} ${props.hideLoader ? "start" : ""}`}>
    {!props.hideLoader && <Header1 className={`${progress >= 100 ? "completed" : ""}`}>{progress}</Header1>}
    <Header1Anim className={`${progress >= 100 ? "completed" : ""}`}>Hear The Noize</Header1Anim>
    <ParDesc className={`${progress >= 100 ? "completed" : ""}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti quas voluptates quidem accusantium aliquam quia laudantium magnam. Cum, suscipit. Quaerat eos quisquam obcaecati debitis enim sequi omnis aliquid voluptatem!</ParDesc>
    <Button className={`${progress >= 100 ? "showButton" : ""}`} onClick={props.hideLoaderFunction}>Hear The Journey</Button>
    </Container>)
}
export default LoadingScreen