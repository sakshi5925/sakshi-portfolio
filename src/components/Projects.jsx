import { useState } from "react"
import { projects } from "../data/portfolioData"
import { motion } from "framer-motion"

import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa"
import { HiOutlineArrowRight } from "react-icons/hi"

export default function Projects(){

const [showAll,setShowAll] = useState(false)

const visibleProjects = showAll ? projects : projects.slice(0,3)

return(

<section id="projects" className="py-24 max-w-7xl mx-auto px-6">

{/* TITLE */}

<h2 className="text-4xl text-red-500 text-center font-bold mb-16 glow">
Projects
</h2>


<div className="grid md:grid-cols-3 gap-10">

{visibleProjects.map((p,i)=>(

<motion.div
key={i}
whileHover={{y:-10}}
className="bg-black/70 border border-red-500 rounded-xl overflow-hidden shadow-lg group"
>


{/* TERMINAL HEADER */}

<div className="flex items-center gap-2 px-4 py-3 border-b border-red-500 bg-black/80">

<span className="w-3 h-3 bg-red-500 rounded-full"></span>
<span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
<span className="w-3 h-3 bg-green-500 rounded-full"></span>

<p className="text-xs text-gray-400 ml-3">
project.js
</p>

</div>


{/* PROJECT BODY */}

<div className="p-6 space-y-4">

<div className="flex items-center gap-3">

<FaCode className="text-red-400"/>

<h3 className="text-xl text-red-400 font-semibold">
{p.title}
</h3>

</div>


{/* TECH STACK */}

<div className="flex flex-wrap gap-2">

{p.tech.map((t,index)=>(
<span
key={index}
className="text-xs border border-red-500 px-2 py-1 rounded hover:bg-red-500 transition"
>
{t}
</span>
))}

</div>


{/* DESCRIPTION */}

<p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition duration-300">
{p.desc}
</p>


{/* LINKS */}

<div className="flex gap-4 pt-2">

{p.github && (

<a
href={p.github}
target="_blank"
className="flex items-center gap-2 text-sm border border-red-500 px-3 py-1 rounded hover:bg-red-500 transition"
>

<FaGithub/>
Code

</a>

)}

{p.live && (

<a
href={p.live}
target="_blank"
className="flex items-center gap-2 text-sm border border-red-500 px-3 py-1 rounded hover:bg-red-500 transition"
>

<FaExternalLinkAlt/>
Live

</a>

)}

</div>

</div>

</motion.div>

))}

</div>


{/* VIEW MORE BUTTON */}

<div className="flex justify-center mt-16">

<button
onClick={()=>setShowAll(!showAll)}
className="flex items-center gap-2 border border-red-500 px-6 py-3 rounded hover:bg-red-500 transition"
>

{showAll ? "Show Less" : "View All Projects"}

<HiOutlineArrowRight/>

</button>

</div>

</section>

)
}