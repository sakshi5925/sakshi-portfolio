import { motion } from "framer-motion"
import { FaReact, FaNodeJs } from "react-icons/fa"
import {
SiNextdotjs,
SiMongodb,
SiMysql,
SiJavascript,
SiSolidity,
SiEthereum,
SiTailwindcss
} from "react-icons/si"

export default function About(){

return(

<section id="about" className="py-24 max-w-7xl mx-auto px-6">

<h2 className="text-4xl text-red-500 font-bold text-center mb-16 glow">
About Me
</h2>

<div className="grid md:grid-cols-2 gap-10 items-stretch">


{/* LEFT CARD */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
className="bg-black/60 border border-red-500 rounded-xl p-8 flex flex-col gap-8"
>

{/* CODE INTRO */}

<div className="font-mono text-sm">

<p className="text-gray-500">const developer = {"{"}</p>

<p className="ml-4 text-gray-300">
name: <span className="text-red-400">"Sakshi Kumari"</span>,
</p>

<p className="ml-4 text-gray-300">
role: <span className="text-red-400">"Full Stack Developer"</span>,
</p>

<p className="ml-4 text-gray-300">
education: <span className="text-red-400">"IIIT Vadodara"</span>,
</p>

<p className="ml-4 text-gray-300">
interests: ["Web Dev", "Blockchain", "Systems"],
</p>

<p className="ml-4 text-gray-300">
focus: ["DSA","Smart Contracts","Scalable Apps"]
</p>

<p className="text-gray-500">{"}"}</p>

</div>


{/* SHORT BIO */}

<div>

<h3 className="text-red-400 text-lg mb-3">
💡 Developer Summary
</h3>

<p className="text-gray-400 text-sm leading-relaxed">
Passionate full-stack developer focused on building scalable
web applications and blockchain systems. Interested in
distributed systems, real-time collaboration tools, and
modern web technologies.
</p>

</div>


{/* CORE SKILLS */}

<div>

<h3 className="text-red-400 text-lg mb-4">
⚙️ Core Skills
</h3>

<div className="flex flex-wrap gap-3 text-sm">

<span className="fact">C / C++</span>
<span className="fact">Python</span>
<span className="fact">JavaScript</span>
<span className="fact">SQL</span>
<span className="fact">REST APIs</span>
<span className="fact">WebSockets</span>

</div>

</div>


{/* FUN FACTS */}

<div>

<h3 className="text-red-400 text-lg mb-4">
🚀 Fun Facts
</h3>

<div className="grid grid-cols-2 gap-4 text-sm">

<div className="fact">⚡ 1000+ DSA</div>
<div className="fact">🏆 HackIIITV Winner</div>
<div className="fact">💻 Backend Intern</div>
<div className="fact">🧠 System Builder</div>

</div>

</div>

</motion.div>



{/* RIGHT CARD */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
className="bg-black/60 border border-red-500 rounded-xl p-8 flex flex-col justify-between"
>

{/* EDUCATION */}

<div>

<h3 className="text-red-400 text-lg mb-3">
🎓 Education
</h3>

<p className="text-gray-300">
B.Tech Information Technology
</p>

<p className="text-gray-400">
IIIT Vadodara
</p>

</div>



<div className="mt-8">

<h3 className="text-red-400 text-lg mb-4">
💼 Internships
</h3>

<div className="space-y-3">

<div className="fact">
Backend Developer Intern — Yugant Industries Pvt Ltd
</div>

<div className="fact">
Research Intern — IIIT Vadodara (IKS Project)
</div>

</div>

</div>


{/* TECH STACK */}

<div className="mt-8">

<h3 className="text-red-400 text-lg mb-6">
💻 Tech Stack
</h3>

<div className="grid grid-cols-3 gap-6 text-center text-gray-300">

<Tech icon={<FaReact size={28}/>} name="React"/>
<Tech icon={<SiNextdotjs size={28}/>} name="Next"/>
<Tech icon={<FaNodeJs size={28}/>} name="Node"/>

<Tech icon={<SiMongodb size={28}/>} name="Mongo"/>
<Tech icon={<SiMysql size={28}/>} name="MySQL"/>
<Tech icon={<SiJavascript size={28}/>} name="JS"/>

<Tech icon={<SiTailwindcss size={28}/>} name="Tailwind"/>
<Tech icon={<SiSolidity size={28}/>} name="Solidity"/>
<Tech icon={<SiEthereum size={28}/>} name="Ethereum"/>

</div>

</div>


{/* CURRENT LEARNING */}

<div className="mt-8">

<h3 className="text-red-400 text-lg mb-3">
📚 Currently Learning
</h3>

<p className="text-gray-400 text-sm">
Blockchain Development, Smart Contracts, 
Cloud Computing, and DevOps while improving
problem solving with Data Structures & Algorithms.
</p>

</div>

</motion.div>

</div>

</section>
)
}


function Tech({icon,name}){
return(
<div className="flex flex-col items-center gap-2 hover:text-red-400 transition">
{icon}
<p className="text-xs">{name}</p>
</div>
)
}