export default function Footer() {
return (
<footer className="bg-white border-t mt-12">
<div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-start justify-between gap-6">
<div>
<h3 className="text-xl font-semibold">Mi primer Puerto</h3>
<p className="text-sm text-gray-600 mt-1">Dirección · Teléfono · Horarios</p>
</div>


<div className="flex-1">
<h4 className="font-medium">Suscríbete</h4>
<p className="text-sm text-gray-600">Recibe novedades y eventos</p>
<form className="mt-3 flex max-w-md">
<input placeholder="tu@correo.cl" className="flex-1 rounded-l-md border px-3 py-2" />
<button className="bg-sky-600 text-white px-4 rounded-r-md">Enviar</button>
</form>
</div>


<div className="text-sm text-gray-600">
<div>© {new Date().getFullYear()} Mi primer Puerto</div>
</div>
</div>
</footer>
)
}