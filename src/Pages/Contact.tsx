

export default function Contact() {
return (
<section className="max-w-3xl mx-auto px-4 py-12">
<h2 className="text-3xl font-semibold">Contacto & Reservas</h2>
<p className="text-gray-600 mt-2">Escríbenos o reserva una mesa.</p>


<form className="mt-6 grid gap-4">
<input placeholder="Nombre" className="border rounded-md px-3 py-2" />
<input placeholder="Correo" className="border rounded-md px-3 py-2" />
<textarea placeholder="Mensaje" className="border rounded-md px-3 py-2" />
<div className="flex gap-3">
<input placeholder="Fecha" className="border rounded-md px-3 py-2" />
<input placeholder="Hora" className="border rounded-md px-3 py-2" />
</div>
<button className="bg-sky-600 text-white px-4 py-2 rounded-md">Enviar</button>
</form>
</section>
)
}