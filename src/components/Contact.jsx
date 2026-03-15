import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Contact(){

return(

<section id="contact" className="py-24 max-w-5xl mx-auto px-6 text-center">

{/* TITLE */}

<h2 className="text-4xl text-red-500 font-bold mb-6 glow">
Let's Connect
</h2>

<p className="text-gray-400 mb-16 max-w-xl mx-auto">
Interested in collaborating, discussing ideas, or building something amazing together?
Feel free to reach out — I'm always excited to connect with fellow developers and innovators.
</p>


{/* TERMINAL STYLE CONTACT BOX */}

<div className="bg-black/70 border border-red-500 rounded-xl p-8 font-mono">

<p className="text-gray-500 text-left">$ contact.sh</p>

<div className="mt-6 grid md:grid-cols-3 gap-6">


{/* EMAIL */}

<motion.a
whileHover={{scale:1.08}}
href="mailto:sn125798@gmail.com"
className="flex flex-col items-center gap-3 border border-red-500 p-6 rounded-lg hover:bg-red-500/20 transition"
>

<FaEnvelope size={28} className="text-red-400"/>

<p className="text-gray-300 text-sm">
Email
</p>

<p className="text-gray-400 text-xs">
sn125798@gmail.com
</p>

</motion.a>


{/* GITHUB */}

<motion.a
whileHover={{scale:1.08}}
href="https://github.com/sakshi5925"
target="_blank"
className="flex flex-col items-center gap-3 border border-red-500 p-6 rounded-lg hover:bg-red-500/20 transition"
>

<FaGithub size={28} className="text-red-400"/>

<p className="text-gray-300 text-sm">
GitHub
</p>

<p className="text-gray-400 text-xs">
github.com/sakshi
</p>

</motion.a>


{/* LINKEDIN */}

<motion.a
whileHover={{scale:1.08}}
href="https://www.linkedin.com/in/sakshi-kumari-031683274/"
target="_blank"
className="flex flex-col items-center gap-3 border border-red-500 p-6 rounded-lg hover:bg-red-500/20 transition"
>

<FaLinkedin size={28} className="text-red-400"/>

<p className="text-gray-300 text-sm">
LinkedIn
</p>

<p className="text-gray-400 text-xs">
linkedin.com/in/sakshi
</p>

</motion.a>


</div>

</div>


{/* FOOTER MESSAGE */}

<p className="text-gray-500 text-sm mt-12">
⚡ Always open to internships, collaborations, and exciting tech discussions.
</p>

</section>

)
}