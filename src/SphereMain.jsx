import { Sphere, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Vector3 } from "three"


const SphereMain = (props) => {
const sphereRef = useRef()
const step = 0.05;
const scrollVal = useScroll()
const vecSphere  = new Vector3(0.0,-2,0.0)

useFrame((state,delta)=>{
  if(props.playAudioState){
    sphereRef.current.position.lerp(vecSphere,step)
  }
})
return(
<Sphere
    ref={sphereRef}
    args={[3,64,64]}
    position={[0, 0, 0]}>
    <meshStandardMaterial
      roughness={0.3}
      color={"#151515"}>
    </meshStandardMaterial>
  </Sphere>)
}
export default SphereMain