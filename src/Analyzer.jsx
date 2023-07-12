import { Sphere } from "@react-three/drei";
import { useFrame , extend } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from 'three'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import { shaderMaterial } from "@react-three/drei"

const ShaderParticleMaterial = shaderMaterial(
    {
      uTime: 0,
      uSize :  33.0,
      uSoundData : 0
    },
    vertexShader,
    fragmentShader
  )
  
  extend({ShaderParticleMaterial})

const Analyzer = ({ sound }) =>  {
    const count = 500;
    const vertices = new Float32Array(count * 3)
    const scales = new Float32Array(count * 1)
    const portalMaterial = useRef()
    let radius = 2
    const mesh = useRef()
    const analyser = useRef()
    let data = 0

    for(let i = 0; i < count  ; i++) {
        // Positions Array 
         const i3 = i * 3; 
          let angle = ((Math.random()* 64)) /( 64) * Math.PI * 2
          vertices[i3 + 0] = Math.cos(angle) * radius
          vertices[i3 + 1] = Math.random() * 1
          vertices[i3 + 2] = Math.sin(angle) * radius
          // Scales Array 
          scales[i] = Math.random()
          // Increment Radius
          radius+= 0.0004
       }

    useEffect(
      () => void (analyser.current = new THREE.AudioAnalyser(sound.current, 32)),[]
    )

    useFrame((state,delta) => {
        portalMaterial.current.uTime += delta * 1
      if (analyser.current) {
        data = analyser.current.getAverageFrequency()
        portalMaterial.current.uSoundData = data
      }
    })
    
    return (
        <points>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position" 
            array={vertices}
            count={vertices.length/3} 
            itemSize={3} 
          />
          <bufferAttribute
            attach="attributes-aScale" 
            array={scales}
            count={scales.length}
            itemSize={1} 
          />
        </bufferGeometry>
        <shaderParticleMaterial ref={portalMaterial}/>
      </points>
    )

  }
  export default Analyzer