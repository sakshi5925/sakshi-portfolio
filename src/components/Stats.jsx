import { stats } from "../data/portfolioData"

export default function Stats(){

return(

<section className="py-20 max-w-6xl mx-auto">

<h2 className="text-3xl text-red-500 mb-10">Stats</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

{stats.map((s,i)=>(
<div key={i} className="text-center border border-red-500 p-6">

<h3 className="text-4xl text-red-500">{s.value}+</h3>

<p className="mt-2 text-gray-300">{s.label}</p>

</div>
))}

</div>

</section>

)
}