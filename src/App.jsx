import { Canvas, useFrame } from '@react-three/fiber'
import Experience from './Experience'
import { Loader, Scroll, ScrollControls } from '@react-three/drei'
import Interface from './UI/Interface'
import { Suspense, useRef, useState } from 'react'
import LoadingScreen from './LoadingScreen'
import { styled } from 'styled-components'

const FullDiv = styled.div`
position:relative;
widht:100%;
height:1200vh;
`

const EndSection = styled.div`
position:absolute;
display:flex;
justify-content:flex-start;
align-items:center;
bottom:0;
text-align:center;
font-size: 8rem;
left:0;
width:100%;
height:100vh;

@media(max-width:964px){
  font-size: 2rem;
}
`

const ScrollMessage = styled.p`
position:absolute;
right:32px;
margin:0;
bottom:16px;
color:white;
font-size:24px;
z-index: 9999999999999;
`
const RelativeContainer = styled.div`
position:relative;
width:100%;
height:100%;
`

function App() {

  const [playAudio, setPlayAudio] = useState(false)
  const playAudioFunction = () => {
    setPlayAudio(true)
    
  }

  return (
    <RelativeContainer>
    {playAudio && <ScrollMessage>Scroll</ScrollMessage>}
      <LoadingScreen hideLoader={playAudio} hideLoaderFunction={playAudioFunction}></LoadingScreen>
      <Canvas
        shadows
        camera={{ position: [8, 3, 0] }}>
        <ScrollControls
          pages={12}
          damping={1}>
          <Scroll
            html
            style={{ width: "100%", position: "absolute", bottom: "0" }}>
                <FullDiv><EndSection><h1 style={{color:"white", fontWeight:"400",fontSize:"48px", margin:"0" ,padding:"16px", writingMode:"vertical-lr"}}>Noise is Everywhere</h1></EndSection></FullDiv>
          </Scroll>
        
          <Experience playAudioState={playAudio}></Experience>
        </ScrollControls>
      </Canvas>
    </RelativeContainer>
  )
}

export default App
