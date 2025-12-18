export default function About() {
return (
<section className="max-w-4xl mx-auto px-4 py-12">
<h2 className="text-3xl font-semibold">Nuestra historia</h2>
<p className="text-gray-600 mt-4">Mi primer Puerto nació de la pasión por los sabores del litoral y la búsqueda de una cocina honesta, creativa y cercana.</p>


<div className="mt-8 grid md:grid-cols-2 gap-6">
<div className="rounded-2xl bg-gray-50 p-6">Imagen o testimonio</div>
<div>
<h3 className="font-semibold">Nuestro equipo</h3>
<p className="text-gray-600 mt-2">Cocineros, pescadores y proveedores locales que comparten valores.</p>
</div>
</div>
</section>
)
}