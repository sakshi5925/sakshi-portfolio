import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Footer(){

return(

<footer className="mt-24 border-t border-red-500 bg-black/80">

<div className="max-w-7xl mx-auto px-6 py-10">


{/* TERMINAL LINE */}

<p className="text-gray-500 font-mono text-sm mb-6">
$ end_of_portfolio.sh
</p>


<div className="flex flex-col md:flex-row justify-between items-center gap-6">


{/* LEFT */}

<div className="text-center md:text-left">

<h3 className="text-red-400 text-lg font-semibold">
Sakshi Kumari
</h3>

<p className="text-gray-400 text-sm">
Full Stack Developer • Blockchain Enthusiast
</p>

</div>


{/* NAV LINKS */}

<div className="flex gap-6 text-gray-400 text-sm">

<a href="#about" className="hover:text-red-400 transition">
About
</a>

<a href="#skills" className="hover:text-red-400 transition">
Skills
</a>

<a href="#projects" className="hover:text-red-400 transition">
Projects
</a>

<a href="#contact" className="hover:text-red-400 transition">
Contact
</a>

</div>


{/* SOCIAL ICONS */}

<div className="flex gap-6 text-red-400 text-xl">

<a
href="https://github.com/sakshi5925"
target="_blank"
className="hover:scale-125 transition"
>

<FaGithub/>

</a>

<a
href="https://www.linkedin.com/in/sakshi-kumari-031683274/"
target="_blank"
className="hover:scale-125 transition"
>

<FaLinkedin/>

</a>

<a
href="mailto:sn125798@gmail.com"
className="hover:scale-125 transition"
>

<FaEnvelope/>

</a>

</div>

</div>


{/* BOTTOM TEXT */}

<div className="mt-8 border-t border-red-500 pt-6 text-center">

<p className="text-gray-500 text-sm font-mono">
console.log("Built with React & ❤️ by Sakshi");
</p>

<p className="text-gray-600 text-xs mt-2">
© {new Date().getFullYear()} Sakshi Kumari. All rights reserved.
</p>

</div>

</div>

</footer>

)
}