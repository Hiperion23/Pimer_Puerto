import Hero from '../Components/Hero'


export default function Home() {
return (
<div>
<Hero />


<section className="max-w-6xl mx-auto px-4 py-12">
<h3 className="text-2xl font-semibold">Platos destacados</h3>
<p className="text-gray-600 mt-2">Una selección de nuestras especialidades.</p>


<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{/* reemplaza con datos reales o map */}
<div className="col-span-1 bg-white rounded-2xl p-6">Tarjeta de ejemplo</div>
<div className="col-span-1 bg-white rounded-2xl p-6">Tarjeta de ejemplo</div>
<div className="col-span-1 bg-white rounded-2xl p-6">Tarjeta de ejemplo</div>
</div>
</section>
</div>
)
}