import { useState } from 'react'
import DishCard from '../Components/DishCard'
import type { Dish } from '../Components/DishCard'
import DishModal from '../Components/DishModal'

// Imágenes genéricas (puedes repetir hasta tener fotos reales)
import cevicheImg from '../assets/images/dishes/ceviche.png'
import picanteImg from '../assets/images/dishes/picante.png'
import lomoImg from '../assets/images/dishes/lomo.png'
import chaufaImg from '../assets/images/dishes/chaufa.png'
import arrozImg from '../assets/images/dishes/arroz.png'
import chicharronImg from '../assets/images/dishes/chicharron.png'
import pulpoImg from '../assets/images/dishes/pulpo.png'
import anticuchoImg from '../assets/images/dishes/anticucho.png'
import pastaImg from '../assets/images/dishes/pasta.png'

import mixtoImg from '../assets/images/dishes/mixto.png'
import guataImg from '../assets/images/dishes/guata.png'
import camaronImg from '../assets/images/dishes/camaron.png'
import polloSaltadoImg from '../assets/images/dishes/pollo_saltado.png'
import marytierraImg from '../assets/images/dishes/marytierra.png'
import chaufaPolloImg from '../assets/images/dishes/chaufa_pollo.png'
import chaufaLechonImg from '../assets/images/dishes/chaufa_lechon.png'
import chaufaCarneImg from '../assets/images/dishes/chaufa_carne.png'
import chicharonPolloImg from '../assets/images/dishes/chicharon_pollo.png'
import chicharonMixtoImg from '../assets/images/dishes/chicharon_mixto.png'
import tallarinSaltadoImg from '../assets/images/dishes/tallarin_saltado.png'
const dishes: Dish[] = [
  // ======================
  // 🐟 CARTA CEVICHERA
  // ======================
  {
    id: '1',
    name: 'Ceviche de Pescado',
    price: '$6.000',
    description: 'Ceviche clásico peruano.',
    image: cevicheImg,
    images: [cevicheImg],
    tags: ['Carta Cevichera'],
    ingredients: ['Pescado fresco', 'Limón', 'Cebolla morada', 'Cilantro', 'Ají limo', 'Camote', 'Choclo'],
    allergens: ['Pescado']
  },
  {
    id: '2',
    name: 'Ceviche Mixto',
    price: '$7.000',
    description: 'Ceviche con mariscos.',
    image: mixtoImg,
    images: [mixtoImg],
    tags: ['Carta Cevichera'],
    ingredients: ['Pescado', 'Pulpo', 'Camarón', 'Calamar', 'Limón', 'Ají limo'],
    allergens: ['Pescado', 'Mariscos']
  },
  {
    id: '3',
    name: 'Pulpo al Olivo',
    price: '$6.000',
    description: 'Pulpo suave con salsa de aceituna.',
    image: pulpoImg,
    images: [pulpoImg],
    tags: ['Carta Cevichera'],
    ingredients: ['Pulpo', 'Aceituna negra', 'Mayonesa', 'Papa cocida'],
    allergens: ['Mariscos']
  },

  // ======================
  // 🌶️ CARTA PICANTERA
  // ======================
  {
    id: '4',
    name: 'Picante de Guata',
    price: '$6.000',
    description: 'Plato típico tarapacino.',
    image: guataImg,
    images: [guataImg],
    tags: ['Carta Picantera'],
    ingredients: ['Guata', 'Ají colorado', 'Papa', 'Cebolla', 'Ajo'],
    allergens: undefined
  },
  {
    id: '5',
    name: 'Picante de Pulpo',
    price: '$7.000',
    description: 'Pulpo en salsa picante.',
    image: picanteImg,
    images: [picanteImg],
    tags: ['Carta Picantera'],
    ingredients: ['Pulpo', 'Ají colorado', 'Papa'],
    allergens: ['Mariscos']
  },
  {
    id: '6',
    name: 'Picante de Camarón',
    price: '$7.000',
    description: 'Camarones en salsa tradicional.',
    image: camaronImg,
    images: [camaronImg],
    tags: ['Carta Picantera'],
    ingredients: ['Camarón', 'Ají colorado', 'Papa'],
    allergens: ['Mariscos']
  },
  {
    id: '7',
    name: 'Picante Mixto',
    price: '$8.000',
    description: 'Pulpo, camarón y calamar.',
    image: picanteImg,
    images: [picanteImg],
    tags: ['Carta Picantera'],
    ingredients: ['Pulpo', 'Camarón', 'Calamar', 'Ají colorado'],
    allergens: ['Mariscos']
  },

  // ======================
  // 🥩 LOMO SALTADO
  // ======================
  {
    id: '8',
    name: 'Saltado de Carne',
    price: '$7.000',
    description: 'Clásico peruano.',
    image: lomoImg,
    images: [lomoImg],
    tags: ['Lomo Saltado'],
    ingredients: ['Carne de res', 'Cebolla', 'Tomate', 'Papas fritas', 'Arroz'],
    allergens: undefined
  },
  {
    id: '9',
    name: 'Saltado de Pollo',
    price: '$6.000',
    description: 'Pollo salteado al wok.',
    image: polloSaltadoImg,
    images: [polloSaltadoImg],
    tags: ['Lomo Saltado'],
    ingredients: ['Pollo', 'Cebolla', 'Tomate', 'Papas fritas'],
    allergens: undefined
  },
  {
    id: '10',
    name: 'Saltado de Pescado',
    price: '$7.000',
    description: 'Pescado salteado estilo peruano.',
    image: lomoImg,
    images: [lomoImg],
    tags: ['Lomo Saltado'],
    ingredients: ['Pescado', 'Cebolla', 'Tomate', 'Papas fritas'],
    allergens: ['Pescado']
  },
  {
    id: '11',
    name: 'Saltado Mar y Tierra',
    price: '$8.000',
    description: 'Carne, camarón y pulpo.',
    image: marytierraImg,
    images: [marytierraImg],
    tags: ['Lomo Saltado'],
    ingredients: ['Carne', 'Pulpo', 'Camarón', 'Papas fritas'],
    allergens: ['Mariscos']
  },

  // ======================
  // 🍚 CHAUFAS Y ARROCES
  // ======================
  {
    id: '12',
    name: 'Chaufa de Pollo',
    price: '$6.000',
    description: 'Arroz chaufa tradicional.',
    image: chaufaPolloImg,
    images: [chaufaPolloImg],
    tags: ['Chaufas'],
    ingredients: ['Arroz', 'Pollo', 'Huevo', 'Cebollín', 'Sillao'],
    allergens: undefined
  },
  {
    id: '13',
    name: 'Chaufa de Chicharrón de Lechón',
    price: '$7.000',
    description: 'Chaufa con cerdo crocante.',
    image: chaufaLechonImg,
    images: [chaufaLechonImg],
    tags: ['Chaufas'],
    ingredients: ['Arroz', 'Lechón', 'Huevo', 'Cebollín'],
    allergens: undefined
  },
  {
    id: '14',
    name: 'Chaufa de Mariscos',
    price: '$8.000',
    description: 'Chaufa marino.',
    image: chaufaImg,
    images: [chaufaImg],
    tags: ['Chaufas'],
    ingredients: ['Pulpo', 'Camarón', 'Calamar', 'Arroz'],
    allergens: ['Mariscos']
  },
  {
    id: '15',
    name: 'Chaufa de Pulpo',
    price: '$8.000',
    description: 'Pulpo salteado con arroz.',
    image: chaufaImg,
    images: [chaufaImg],
    tags: ['Chaufas'],
    ingredients: ['Pulpo', 'Arroz', 'Huevo'],
    allergens: ['Mariscos']
  },
  {
    id: '16',
    name: 'Chaufa de Carne',
    price: '$8.000',
    description: 'Carne salteada al wok.',
    image: chaufaCarneImg,
    images: [chaufaCarneImg],
    tags: ['Chaufas'],
    ingredients: ['Carne de res', 'Arroz', 'Huevo'],
    allergens: undefined
  },
  {
    id: '17',
    name: 'Arroz con Mariscos',
    price: '$8.000',
    description: 'Arroz cremoso marino.',
    image: arrozImg,
    images: [arrozImg],
    tags: ['Arroces'],
    ingredients: ['Pulpo', 'Camarón', 'Calamar', 'Arroz'],
    allergens: ['Mariscos']
  },

  // ======================
  // 🍖 CHICHARRONES
  // ======================
  {
    id: '18',
    name: 'Chicharrón de Pollo',
    price: '$6.000',
    description: 'Pollo crocante.',
    image: chicharonPolloImg,
    images: [chicharonPolloImg],
    tags: ['Chicharrones'],
    ingredients: ['Pollo', 'Harina', 'Papas doradas'],
    allergens: undefined
  },
  {
    id: '19',
    name: 'Chicharrón de Pescado',
    price: '$6.000',
    description: 'Pescado frito.',
    image: chicharronImg,
    images: [chicharronImg],
    tags: ['Chicharrones'],
    ingredients: ['Pescado', 'Harina', 'Papas doradas'],
    allergens: ['Pescado']
  },
  {
    id: '20',
    name: 'Chicharrón Mixto Marino',
    price: '$8.000',
    description: 'Mariscos fritos.',
    image: chicharonMixtoImg,
    images: [chicharonMixtoImg],
    tags: ['Chicharrones'],
    ingredients: ['Pulpo', 'Camarón', 'Calamar'],
    allergens: ['Mariscos']
  },

  // ======================
  // ⭐ ESPECIALIDADES
  // ======================
  {
    id: '21',
    name: 'Pulpo a la Parrilla',
    price: '$10.000',
    description: 'Pulpo anticuchero con papas rústicas.',
    image: pulpoImg,
    images: [pulpoImg],
    tags: ['Especialidades'],
    ingredients: ['Pulpo', 'Ají panca', 'Chimichurri', 'Papas rústicas'],
    allergens: ['Mariscos']
  },
  {
    id: '22',
    name: 'Anticucho de Corazón',
    price: '$6.000',
    description: 'Anticucho peruano tradicional.',
    image: anticuchoImg,
    images: [anticuchoImg],
    tags: ['Especialidades'],
    ingredients: ['Corazón de res', 'Ají panca', 'Papa', 'Choclo'],
    allergens: undefined
  },
  {
    id: '23',
    name: 'Tallarín Saltado de Carne',
    price: '$8.000',
    description: 'Fideos salteados al wok.',
    image: tallarinSaltadoImg,
    images: [tallarinSaltadoImg],
    tags: ['Especialidades'],
    ingredients: ['Tallarines', 'Carne de res', 'Cebolla', 'Tomate'],
    allergens: ['Gluten']
  },
  {
    id: '24',
    name: 'Fetuccini al Ajillo con Camarones',
    price: '$8.000',
    description: 'Pasta al ajillo.',
    image: pastaImg,
    images: [pastaImg],
    tags: ['Especialidades'],
    ingredients: ['Fetuccini', 'Camarones', 'Ajo', 'Aceite de oliva'],
    allergens: ['Gluten', 'Mariscos']
  }
]

export default function Menu() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-2">Nuestra Carta</h2>
      <p className="text-gray-600 mb-8">
        Tradición peruana con sabor casero.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dishes.map(d => (
          <DishCard key={d.id} dish={d} onClick={() => setSelectedDish(d)} />
        ))}
      </div>

      {selectedDish && (
        <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
      )}
    </section>
  )
}
