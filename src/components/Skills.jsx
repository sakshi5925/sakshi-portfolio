import { motion } from "framer-motion"

import { FaReact, FaNodeJs, FaAws, FaDocker, FaPython } from "react-icons/fa"

import {
SiNextdotjs,
SiMongodb,
SiMysql,
SiJavascript,
SiSolidity,
SiEthereum,
SiTailwindcss,
SiTerraform,
SiAnsible,
SiCplusplus,
SiSupabase,
SiGithub,
SiGit
} from "react-icons/si"

import { DiLinux } from "react-icons/di"

export default function Skills(){

return(

<section id="skills" className="py-24 max-w-7xl mx-auto px-6">

<h2 className="text-4xl text-red-500 text-center font-bold mb-16 glow">
Skills
</h2>


<div className="grid md:grid-cols-3 gap-10">


{/* FRONTEND */}

<SkillCard title="Frontend">

<Skill icon={<FaReact size={32}/>} name="React"/>
<Skill icon={<SiNextdotjs size={32}/>} name="Next.js"/>
<Skill icon={<SiTailwindcss size={32}/>} name="Tailwind"/>
<Skill icon={<SiJavascript size={32}/>} name="JavaScript"/>

</SkillCard>


{/* BACKEND */}



<SkillCard title="Backend">

<Skill icon={<FaNodeJs size={32}/>} name="Node.js"/>
<Skill icon={<SiMongodb size={32}/>} name="MongoDB"/>
<Skill icon={<SiMysql size={32}/>} name="MySQL"/>
<Skill icon={<SiSupabase size={32}/>} name="Supabase"/>

</SkillCard>


{/* CLOUD & DEVOPS */}

<SkillCard title="Cloud & DevOps">

<Skill icon={<FaAws size={32}/>} name="AWS"/>
<Skill icon={<SiTerraform size={32}/>} name="Terraform"/>
<Skill icon={<SiAnsible size={32}/>} name="Ansible"/>
<Skill icon={<DiLinux size={32}/>} name="Shell / Linux"/>

</SkillCard>


{/* BLOCKCHAIN */}

<SkillCard title="Blockchain">

<Skill icon={<SiEthereum size={32}/>} name="Ethereum"/>
<Skill icon={<SiSolidity size={32}/>} name="Solidity"/>

</SkillCard>


{/* TOOLS */}


<SkillCard title="Tools">

<Skill icon={<FaDocker size={32}/>} name="Docker"/>
<Skill icon={<SiGit size={32}/>} name="Git"/>
<Skill icon={<SiGithub size={32}/>} name="GitHub"/>
<Skill icon={<DiLinux size={32}/>} name="Linux"/>

</SkillCard>


{/* PROGRAMMING */}

<SkillCard title="Programming">

<Skill icon={<SiCplusplus size={32}/>} name="C++"/>

<Skill icon={<FaPython size={32}/>} name="Python"/>

<Skill icon={<SiJavascript size={32}/>} name="JavaScript"/>

<Skill icon={<DiLinux size={32}/>} name="Shell scripting"/>

</SkillCard>

</div>

</section>

)
}


function SkillCard({title, children}){

return(

<motion.div
whileHover={{scale:1.05}}
className="bg-black/60 border border-red-500 rounded-xl p-6"
>

<h3 className="text-red-400 text-lg mb-6 text-center">
{title}
</h3>

<div className="grid grid-cols-2 gap-6 text-center text-gray-300">

{children}

</div>

</motion.div>

)
}


function Skill({icon,name}){

return(

<div className="flex flex-col items-center gap-2 hover:text-red-400 transition">

{icon}

<p className="text-sm">{name}</p>

</div>

)
}