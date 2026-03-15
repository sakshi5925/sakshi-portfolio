import { motion } from "framer-motion"
import { FaTrophy, FaCode, FaLaptopCode, FaExternalLinkAlt } from "react-icons/fa"
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si"

export default function Achievements(){

return(

<section id="achievements" className="py-24 max-w-7xl mx-auto px-6">

<h2 className="text-4xl text-red-500 text-center font-bold mb-16 glow">
Achievements & Milestones
</h2>


{/* STATS GRID */}

<div className="grid md:grid-cols-3 gap-10">

<StatCard
icon={<SiLeetcode size={36}/>}
value="500+"
title="LeetCode Problems"
link="https://leetcode.com/u/202352326/"
/>

<StatCard
icon={<SiGeeksforgeeks size={36}/>}
value="600+"
title="GeeksforGeeks Problems"
link="https://www.geeksforgeeks.org/profile/sakshiiitv"
/>

<StatCard
icon={<FaTrophy size={36}/>}
value="1st Place"
title="HackIIITV Winner"
/>

<StatCard
icon={<FaCode size={36}/>}
value="DSA"
title="Strong Problem Solving"
/>

<StatCard
icon={<FaLaptopCode size={36}/>}
value="Full Stack"
title="Web Development"
/>

</div>


{/* TERMINAL MILESTONES */}

<div className="mt-20 bg-black/70 border border-red-500 rounded-xl p-8 font-mono text-sm">

<p className="text-gray-500">$ milestones.sh</p>

<p className="text-gray-300 mt-4">
&gt; solved <span className="text-red-400">1100+</span> algorithmic problems
</p>

<p className="text-gray-300">
&gt; built <span className="text-red-400">full stack applications</span>
</p>

<p className="text-gray-300">
&gt; developed <span className="text-red-400">blockchain projects</span>
</p>

<p className="text-gray-300">
&gt; winner of <span className="text-red-400">HackIIITV Hackathon</span>
</p>

<p className="text-gray-300">
&gt; exploring <span className="text-red-400">cloud, devops & distributed systems</span>
</p>

</div>

</section>

)
}



function StatCard({icon,value,title,link}){

return(

<motion.div
whileHover={{scale:1.08}}
className="bg-black/70 border border-red-500 rounded-xl p-8 text-center shadow-lg hover:shadow-red-500/40 transition"
>

<div className="flex justify-center text-red-400 mb-4">
{icon}
</div>

<h3 className="text-3xl text-red-400 font-bold">
{value}
</h3>

<p className="text-gray-400 mt-2">
{title}
</p>



</motion.div>

)
}