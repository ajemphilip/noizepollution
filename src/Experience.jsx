import { Box, Environment, FirstPersonControls, FlyControls, MeshReflectorMaterial, OrbitControls, PerspectiveCamera, Plane, PositionalAudio, ScrollControls, Sphere, Stage, Torus, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import AudioPiece from './AudioPiece'
import AudioFiles from './AudioFiles'
import SphereMain from './SphereMain'
const Experience = (props) => {

  const scrollVal = useScroll()

  useFrame((state, delta) => {
    state.camera.lookAt(new THREE.Vector3(0, 0, 0))
    state.camera.position.x = 1
    state.camera.position.y = 3 + scrollVal.offset * 500
  })

  const audioMapped = AudioFiles.map((datum, index) => <AudioPiece playAudioState={props.playAudioState} height={index * 8} sound={datum}></AudioPiece>)
  return (
    <>
      <ambientLight
        intensity={1}>
      </ambientLight>
      {audioMapped}
      <directionalLight
        castShadow
        intensity={0.7}
        position={[10, 6, 6]}
        shadow-mapSize={[1024, 1024]}>
      </directionalLight>
      <SphereMain playAudioState={props.playAudioState}>
      </SphereMain>
      <Plane
        castShadow
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        args={[1500, 1500]}>
        <MeshReflectorMaterial
          blur={[800, 300]}
          resolution={2048}
          mixBlur={1}
          mixStrength={20}
          depthScale={1}
          minDepthThreshold={0.85}
          color="#151515"
          metalness={1}
          roughness={1}
        />
      </Plane>
      <Environment
        preset="dawn" />
    </>
  )
}
export default Experience