import { motion } from "framer-motion"
import profile from "../assets/profile.png"
import hackerBg from "../assets/hacker-bg.jpg"
import ParticlesBg from "./ParticlesBg"

export default function Hero(){

return(

<section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">

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


{/* MAIN CONTENT */}

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">


{/* LEFT SIDE */}

<motion.div
initial={{opacity:0,x:-60}}
animate={{opacity:1,x:0}}
transition={{duration:1}}
className="text-center md:text-left"
>

<p className="text-red-400 text-base sm:text-lg mb-4">
👋 Hello World
</p>

<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-500 glow">
Sakshi Kumari
</h1>

<h2 className="text-lg sm:text-xl md:text-2xl mt-4 text-gray-200">
Full Stack Developer | Blockchain Developer
</h2>

<p className="mt-6 text-gray-400 max-w-lg mx-auto md:mx-0 text-sm sm:text-base md:text-lg">
I build scalable full-stack applications and blockchain systems.
Passionate about solving complex problems and building impactful products.
</p>


{/* BUTTONS */}

<div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">

<a
href="#projects"
className="bg-red-600 px-6 sm:px-8 py-3 rounded hover:bg-red-500 transition shadow-lg text-sm sm:text-base"
>
View Projects
</a>

<a
href="/resume.pdf"
target="_blank"
rel="noopener noreferrer"
className="border border-red-500 px-6 sm:px-8 py-3 rounded hover:bg-red-600 transition text-sm sm:text-base"
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
className="flex justify-center relative mt-12 md:mt-0"
>

<div className="absolute w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-red-500 blur-3xl opacity-20 rounded-full"></div>

<motion.img
src={profile}
alt="profile"
className="w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 object-cover rounded-full border-4 border-red-500 shadow-2xl relative z-10"
animate={{ y:[0,-20,0] }}
transition={{ duration:6, repeat:Infinity }}
/>

</motion.div>


</div>

</section>

)
}