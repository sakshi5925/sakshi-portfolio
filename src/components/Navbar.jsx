export default function Navbar(){
return(
<nav className="fixed w-full bg-black border-b border-red-500 z-50">
<div className="max-w-6xl mx-auto flex justify-between p-4">
<h1 className="text-red-500 font-bold glow">Sakshi.dev</h1>

<div className="space-x-6 text-sm">
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>
</div>

</div>
</nav>
)
}