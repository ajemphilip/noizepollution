import { Box, PositionalAudio, useScroll } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { Suspense, useEffect, useRef } from "react";
import * as THREE from 'three'
import Analyzer from "./Analyzer";

const AudioPiece = (props) => { 
const sound = useRef()
const rotation = useRef()

useFrame(()=>{
    if(sound.current) {
        rotation.current.rotation.y += Math.random() * 0.05
    }})

return(
    <Suspense>
      {props.playAudioState &&
      <group position={[0,props.height,0]}>
      <group 
      ref={rotation}
      rotation={[0, Math.PI * Math.random() * 2, 0]}
      >
      <PositionalAudio 
      ref={sound} 
      position={[4,0,4]} 
      autoplay
      loop
      distance={1}
      url={props.sound} >
      </PositionalAudio>
      <Box args={[0.1,0.1]} position={[4,0,4]} >
      </Box>
      </group>
      <Analyzer sound={sound}></Analyzer>
      </group>
      }
    </Suspense>
)
}
export default AudioPiece