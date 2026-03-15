import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function ParticlesBg(){

const particlesInit = async (main)=>{
await loadFull(main)
}

return(
<Particles
id="tsparticles"
init={particlesInit}

options={{
background:{color:"#0b0b0b"},
fpsLimit:60,
particles:{
number:{value:60},
color:{value:"#ff1e1e"},
links:{
enable:true,
color:"#ff1e1e",
distance:150
},
move:{
enable:true,
speed:1
}
}
}}
/>
)
}