import { motion } from "framer-motion"
import profile from "../assets/profile.png"
import hackerBg from "../assets/hacker-bg.jpg"
import ParticlesBg from "./ParticlesBg"

export default function Hero(){

return(

<section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">

{/* Background Image */}

<div
className="absolute inset-0 bg-cover bg-center opacity-30"
style={{ backgroundImage:`url(${hackerBg})` }}
/>

{/* Dark Overlay */}

<div className="absolute inset-0 bg-black opacity-80"></div>

{/* Particles */}

<div className="absolute inset-0">
<ParticlesBg/>
</div>

{/* Main Content */}

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

{/* LEFT SIDE */}

<motion.div
initial={{opacity:0,x:-60}}
animate={{opacity:1,x:0}}
transition={{duration:1}}
>

<p className="text-red-400 text-lg mb-4">
👋 Hello World
</p>

<h1 className="text-6xl font-bold text-red-500 glow">
Sakshi Kumari
</h1>

<h2 className="text-2xl mt-4 text-gray-200">
Full Stack Developer | Blockchain Developer
</h2>

<p className="mt-6 text-gray-400 max-w-lg text-lg">
I build scalable full-stack applications and blockchain systems.
Passionate about solving complex problems and building impactful products.
</p>

<div className="mt-10 flex gap-6">

<a
href="#projects"
className="bg-red-600 px-8 py-3 rounded hover:bg-red-500 transition shadow-lg"
>
View Projects
</a>

<a
href="/resume.pdf"
target="_blank"
rel="noopener noreferrer"
className="border border-red-500 px-8 py-3 rounded hover:bg-red-600 transition"
>
View Resume
</a>

</div>

</motion.div>

{/* RIGHT SIDE PROFILE */}

<motion.div
initial={{opacity:0,x:60}}
animate={{opacity:1,x:0}}
transition={{duration:1}}
className="flex justify-center relative"
>

<div className="absolute w-96 h-96 bg-red-500 blur-3xl opacity-20 rounded-full"></div>

<motion.img
src={profile}
alt="profile"
className="w-80 h-80 object-cover rounded-full border-4 border-red-500 shadow-2xl relative z-10"
animate={{
y:[0,-20,0]
}}
transition={{
duration:6,
repeat:Infinity
}}
/>

</motion.div>

</div>

</section>
)
}