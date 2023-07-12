import { useScroll } from "@react-three/drei"

const Interface = () => {
   const scrollVal =  useScroll()

return( 
    <div style={{display:"flex", height:"100%", justifyContent:"center" , alignItems:"center"}}>
        <h1 style={{position:"absolute", top:`${scrollVal.el.scrollTop}` ,}}>asda</h1>
    </div>
)
}
export default Interface