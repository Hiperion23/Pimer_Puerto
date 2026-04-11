import { useState } from 'react'
import DishCard from '../Components/DishCard'
import type { Dish } from '../Components/DishCard'
import DishModal from '../Components/DishModal'

// Imágenes genéricas (puedes repetir hasta tener fotos reales)
import cevicheImg from '../assets/images/dishes/ceviche.png'
import cevicheMixtoImg from '../assets/images/dishes/CeviMixto.jpeg'
import picanteImg from '../assets/images/dishes/picante.png'
import lomoImg from '../assets/images/dishes/lomo.png'
import chaufaImg from '../assets/images/dishes/chaufa.png'
import arrozImg from '../assets/images/dishes/arroz.png'
import chicharronImg from '../assets/images/dishes/chicharron.png'
import ChicharronLechonImg from '../assets/images/dishes/ChicharronLechon.png'
import pulpoImg from '../assets/images/dishes/pulpo.png'
import anticuchoImg from '../assets/images/dishes/anticucho.png'
import pastaImg from '../assets/images/dishes/pasta.png'

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
import sudadoImg from '../assets/images/dishes/sudado_pescado.png'
import risoto_camaronImg from '../assets/images/dishes/risoto_camaron.png'
import papaRusticaImg from '../assets/images/dishes/papa_rustica.png'
import papaFritaImg from '../assets/images/dishes/papa_frita.png'
import camoteImg from '../assets/images/dishes/chifle_camote.png'
import canchaImg from '../assets/images/dishes/canchita.png'
import arrozBlancoImg from '../assets/images/dishes/arroz_blanco.png'
import costillar1Img from '../assets/images/dishes/costillar1.png'
import costillar2Img from '../assets/images/dishes/costillar2.png'
import polloPapaImg from '../assets/images/dishes/pollo_papa.png'
import polloChaufaImg from '../assets/images/dishes/pollo_chaufa.png'
import pescadoFritoImg from '../assets/images/dishes/pescado_frito.png'
import arozChaufaImg from '../assets/images/dishes/arroz_chaufa.png'
import papaDoradaImg from '../assets/images/dishes/papa_dorada.png'
import lecheDeTigreImg from '../assets/images/dishes/leche_tigre.png'
import risottoVeganoImg from '../assets/images/dishes/risotto_vegano.png'
import SaltadoVeganoImg from '../assets/images/dishes/saltado_vegano.png'
import pulpoParrilla1Img from '../assets/images/dishes/pulpo_parrilla1.png'
import pulpoParrilla2Img from '../assets/images/dishes/pulpo_parrilla2.png'
import duoImg from '../assets/images/dishes/duo.png'
import trioImg from '../assets/images/dishes/trio.png'
import fettu_huancainaImg from '../assets/images/dishes/fettu_huanca.png'
import chaufa_camaronImg from '../assets/images/dishes/chaufa_camaron.png'

import torticasImg from '../assets/images/dishes/Tortitas.jpeg'
import torticas2Img from '../assets/images/dishes/TortitasChoclo.jpeg'
import causaImg from '../assets/images/dishes/CausaCamaron.jpeg'
import causaPulpoImg from '../assets/images/dishes/CausaPulpo.jpeg'
import causaPulpo2Img from '../assets/images/dishes/CausaPulpoP.jpeg'
import lechonImg from '../assets/images/dishes/LechonT.jpeg'
import cevicheBrazaImg from '../assets/images/dishes/CevicheBraza.jpeg'
//import trioCausaImg from '../assets/images/dishes/TrioCausa.jpeg'

const dishes: Dish[] = [

  // ======================
  // 🐟 CARTA CEVICHERA
  // ======================
  {
    id: '1',
    name: 'Ceviche de Pescado',
    price: '$8.000',
    description: 'Ceviche clásico peruano.',
    image: cevicheImg,
    images: [cevicheImg],
    tags: ['Carta Cevichera'],
    ingredients: ['Pescado fresco', 'Limón', 'Cebolla morada', 'Cilantro', 'Ají limo', 'Camote', 'Choclo'],
    allergens: ['Pescado'],
  },
  {
    id: '2',
    name: 'Ceviche Braza Mi Primer Puerto',
    price: '$10.000',
    description: 'Ceviche especial de la casa.',
    image: cevicheBrazaImg,
    images: [cevicheBrazaImg],
    tags: ['Carta Cevichera'],
    ingredients: [],
    allergens: ['Pescado'],
  },
  {
    id: '3',
    name: 'Ceviche Mixto',
    price: '$10.000',
    description: 'Ceviche con mariscos.',
    image: cevicheMixtoImg,
    images: [cevicheMixtoImg],
    tags: ['Carta Cevichera'],
    ingredients: ['Pescado', 'Pulpo', 'Camarón', 'Calamar', 'Limón', 'Ají limo'],
    allergens: ['Pescado', 'Mariscos'],
  },
  {
    id: '4',
    name: 'Pulpo al Olivo',
    price: '$8.000',
    description: 'Pulpo suave con salsa de aceituna.',
    image: pulpoImg,
    images: [pulpoImg],
    tags: ['Carta Cevichera'],
    ingredients: ['Pulpo', 'Aceituna negra', 'Mayonesa', 'Papa cocida'],
    allergens: ['Mariscos'],
  },
  {
    id: '5',
    name: 'Leche de Tigre Tradicional Mi Primer Puerto',
    price: '$8.000',
    description: 'Leche de tigre tradicional con acompañamientos.',
    image: lecheDeTigreImg,
    images: [lecheDeTigreImg],
    tags: ['Carta Cevichera'],
    ingredients: [
      'Salsa de rocoto',
      'Salsa de ají amarillo',
      'Chicharrón',
      'Cancha',
      'Chifle',
      'Camote',
    ],
    allergens: ['Pescado'],
  },

  // ======================
  // 🥗 ENTRADAS
  // ======================
  {
    id: '6',
    name: 'Causa Limeña',
    price: '$8.000',
    description: 'Causa limeña tradicional.',
    image: causaImg,
    images: [causaImg],
    tags: ['Entradas'],
    ingredients: [],
    allergens: undefined,
  },
  {
    id: '7',
    name: 'Causa Crocante Pulpo Parrilla',
    price: '$9.000',
    description: 'Causa con pulpo a la parrilla.',
    image: causaPulpoImg,
    images: [causaPulpo2Img],
    tags: ['Entradas'],
    ingredients: ['Pulpo'],
    allergens: ['Mariscos'],
  },
  {
    id: '8',
    name: 'Torticas de Choclo Acevichadas',
    price: '$7.000',
    description: 'Torticas de choclo tradicionales.',
    image: torticasImg,
    images: [torticas2Img],
    tags: ['Entradas'],
    ingredients: ['Choclo'],
    allergens: undefined,
  },
/*   {
    id: '9',
    name: 'Choritos a la Chalaca',
    price: '$7.000',
    description: 'Choritos a la chalaca.',
    image: choritosImg,
    images: [choritosImg],
    tags: ['Entradas'],
    ingredients: ['Choritos', 'Cebolla', 'Tomate', 'Limón'],
    allergens: ['Mariscos'],
  },
 */  {
    id: '10',
    name: 'Pulpo a la Chalaca',
    price: '$7.000',
    description: 'Pulpo a la chalaca.',
    image: pulpoImg,
    images: [pulpoImg],
    tags: ['Entradas'],
    ingredients: ['Pulpo', 'Cebolla', 'Tomate', 'Limón'],
    allergens: ['Mariscos'],
  },
/*   {
    id: '11',
    name: 'Empanadita Ají de Gallina',
    price: '$7.000',
    description: 'Empanaditas rellenas de ají de gallina.',
    image: empanadaImg,
    images: [empanadaImg],
    tags: ['Entradas'],
    ingredients: ['Pollo', 'Ají amarillo', 'Queso'],
    allergens: ['Gluten', 'Lácteos'],
  },
  {
    id: '12',
    name: 'Empanadita de Pulpo Queso',
    price: '$7.000',
    description: 'Empanaditas rellenas de pulpo y queso.',
    image: empanadaImg,
    images: [empanadaImg],
    tags: ['Entradas'],
    ingredients: ['Pulpo', 'Queso'],
    allergens: ['Gluten', 'Mariscos', 'Lácteos'],
  },
  {
    id: '13',
    name: 'Papa a la Huancaina',
    price: '$4.500',
    description: 'Papa con salsa huancaína.',
    image: huancainaImg,
    images: [huancainaImg],
    tags: ['Entradas'],
    ingredients: ['Papa', 'Ají amarillo', 'Queso', 'Leche'],
    allergens: ['Lácteos'],
  },
 */
  // ======================
  // 🌶️ CARTA PICANTERA
  // ======================
  {
    id: '14',
    name: 'Picante de Guata',
    price: '$9.000',
    description: 'Plato típico tarapacino.',
    image: guataImg,
    images: [guataImg],
    tags: ['Carta Picantera'],
    ingredients: ['Guata', 'Ají colorado', 'Papa', 'Cebolla', 'Ajo'],
    allergens: undefined,
  },
  {
    id: '15',
    name: 'Picante de Pulpo',
    price: '$10.990',
    description: 'Pulpo en salsa picante.',
    image: picanteImg,
    images: [picanteImg],
    tags: ['Carta Picantera'],
    ingredients: ['Pulpo', 'Ají colorado', 'Papa'],
    allergens: ['Mariscos'],
  },
  {
    id: '16',
    name: 'Picante de Camarón',
    price: '$9.990',
    description: 'Camarones en salsa tradicional.',
    image: camaronImg,
    images: [camaronImg],
    tags: ['Carta Picantera'],
    ingredients: ['Camarón', 'Ají colorado', 'Papa'],
    allergens: ['Mariscos'],
  },
  {
    id: '17',
    name: 'Picante Mixto',
    price: '$11.990',
    description: 'Pulpo, camarón y calamar.',
    image: picanteImg,
    images: [picanteImg],
    tags: ['Carta Picantera'],
    ingredients: ['Pulpo', 'Camarón', 'Calamar', 'Ají colorado'],
    allergens: ['Mariscos'],
  },

  // ======================
  // 🥩 LOMO SALTADO
  // ======================
  {
    id: '18',
    name: 'Saltado de Carne',
    price: '$9.000',
    description: 'Clásico peruano.',
    image: lomoImg,
    images: [lomoImg],
    tags: ['Lomo Saltado'],
    ingredients: ['Carne de res', 'Cebolla', 'Tomate', 'Papas fritas', 'Arroz'],
    allergens: undefined,
  },
  {
    id: '19',
    name: 'Saltado de Pollo',
    price: '$7.990',
    description: 'Pollo salteado al wok.',
    image: polloSaltadoImg,
    images: [polloSaltadoImg],
    tags: ['Lomo Saltado'],
    ingredients: ['Pollo', 'Cebolla', 'Tomate', 'Papas fritas'],
    allergens: undefined,
  },
  {
    id: '20',
    name: 'Saltado de Pescado',
    price: '$9.000',
    description: 'Pescado salteado estilo peruano.',
    image: lomoImg,
    images: [lomoImg],
    tags: ['Lomo Saltado'],
    ingredients: ['Pescado', 'Cebolla', 'Tomate', 'Papas fritas'],
    allergens: ['Pescado'],
  },
  {
    id: '21',
    name: 'Saltado Mar y Tierra',
    price: '$12.000',
    description: 'Carne, camarón y pulpo.',
    image: marytierraImg,
    images: [marytierraImg],
    tags: ['Lomo Saltado'],
    ingredients: ['Carne', 'Pulpo', 'Camarón', 'Papas fritas'],
    allergens: undefined,
  },
  {
    id: '22',
    name: 'Lomo saltado con Fettucini',
    price: '$10.000',
    description: 'Lomo saltado servido con fettucini Huancaina.',
    image: fettu_huancainaImg,
    images: [fettu_huancainaImg],
    tags: ['Lomo Saltado'],
    ingredients: ['Carne', 'Cebolla', 'Tomate', 'Fetuccini'],
    allergens: ['Mariscos'],
  },

  // ======================
  // 🍚 CHAUFAS
  // ======================
  {
    id: '23',
    name: 'Chaufa de Pollo',
    price: '$7.990',
    description: 'Arroz chaufa tradicional.',
    image: chaufaPolloImg,
    images: [chaufaPolloImg],
    tags: ['Chaufas'],
    ingredients: ['Arroz', 'Pollo', 'Huevo', 'Cebollín', 'Sillao'],
    allergens: undefined,
  },
  {
    id: '24',
    name: 'Chaufa de Chicharrón de Lechón',
    price: '$8.000',
    description: 'Chaufa con cerdo crocante.',
    image: chaufaLechonImg,
    images: [chaufaLechonImg],
    tags: ['Chaufas'],
    ingredients: ['Arroz', 'Lechón', 'Huevo', 'Cebollín'],
    allergens: undefined,
  },
  {
    id: '25',
    name: 'Chaufa de Mariscos',
    price: '$10.000',
    description: 'Chaufa marino.',
    image: chaufaImg,
    images: [chaufaImg],
    tags: ['Chaufas'],
    ingredients: ['Pulpo', 'Camarón', 'Calamar', 'Arroz'],
    allergens: ['Mariscos'],
  },
  {
    id: '26',
    name: 'Chaufa de Pulpo',
    price: '$10.000',
    description: 'Pulpo salteado con arroz.',
    image: chaufaImg,
    images: [chaufaImg],
    tags: ['Chaufas'],
    ingredients: ['Pulpo', 'Arroz', 'Huevo'],
    allergens: ['Mariscos'],
  },
  {
    id: '27',
    name: 'Chaufa de Carne',
    price: '$8.000',
    description: 'Carne salteada al wok.',
    image: chaufaCarneImg,
    images: [chaufaCarneImg],
    tags: ['Chaufas'],
    ingredients: ['Carne de res', 'Arroz', 'Huevo'],
    allergens: undefined,
  },
  {
    id: '28',
    name: 'Chaufa de Camarón',
    price: '$10.000',
    description: 'Chaufa con camarón.',
    image: chaufa_camaronImg,
    images: [chaufa_camaronImg],
    tags: ['Chaufas'],
    ingredients: ['Camarón', 'Arroz', 'Huevo'],
    allergens: ['Mariscos'],
  },

  // ======================
  // 🍚 ARROCES
  // ======================
  {
    id: '29',
    name: 'Arroz con Mariscos',
    price: '$12.000',
    description: 'Arroz cremoso marino.',
    image: arrozImg,
    images: [arrozImg],
    tags: ['Arroces'],
    ingredients: ['Pulpo', 'Camarón', 'Calamar', 'Arroz'],
    allergens: ['Mariscos'],
  },

  // ======================
  // 🍖 CHICHARRONES
  // ======================
  {
    id: '30',
    name: 'Chicharrón de Camarón',
    price: '$10.000',
    description: 'Camarón frito crocante.',
    image: chicharonMixtoImg,
    images: [chicharonMixtoImg],
    tags: ['Chicharrones'],
    ingredients: ['Camarón', 'Harina', 'Papas doradas'],
    allergens: ['Mariscos'],
  },
  {
    id: '31',
    name: 'Chicharrón de Pulpo',
    price: '$10.000',
    description: 'Pulpo frito crocante.',
    image: chicharonMixtoImg,
    images: [chicharonMixtoImg],
    tags: ['Chicharrones'],
    ingredients: ['Pulpo', 'Harina', 'Papas doradas'],
    allergens: ['Mariscos'],
  },
  {
    id: '32',
    name: 'Chicharrón de Pollo',
    price: '$7.990',
    description: 'Pollo crocante.',
    image: chicharonPolloImg,
    images: [chicharonPolloImg],
    tags: ['Chicharrones'],
    ingredients: ['Pollo', 'Harina', 'Papas doradas'],
    allergens: undefined,
  },
  {
    id: '33',
    name: 'Chicharrón de Pescado',
    price: '$8.990',
    description: 'Pescado frito.',
    image: chicharronImg,
    images: [chicharronImg],
    tags: ['Chicharrones'],
    ingredients: ['Pescado', 'Harina', 'Papas doradas'],
    allergens: ['Pescado'],
  },
  {
    id: '34',
    name: 'Chicharrón de lechón tierno tradicional',
    price: '$8.990',
    description: 'Chicharrón de lechón tierno.',
    image: lechonImg,
    images: [ChicharronLechonImg, lechonImg],
    tags: ['Chicharrones'],
    ingredients: ['Sarza Criolla', 'Camote', 'Papas doradas', 'Lechón', 'Canchita'],
    allergens: undefined,
  },
  {
    id: '35',
    name: 'Chicharrón Mixto Marino',
    price: '$10.990',
    description: 'Mariscos fritos.',
    image: chicharonMixtoImg,
    images: [chicharonMixtoImg],
    tags: ['Chicharrones'],
    ingredients: ['Pulpo', 'Camarón', 'Calamar'],
    allergens: ['Mariscos'],
  },

  // ======================
  // 🍲 SUDADOS
  // ======================
  {
    id: '36',
    name: 'Sudado de Pescado Entero',
    price: '$10.000',
    description: 'Sudado tradicional.',
    image: sudadoImg,
    images: [sudadoImg],
    tags: ['Sudados'],
    ingredients: ['Pescado entero', 'Cebolla', 'Tomate', 'Cilantro'],
    allergens: ['Pescado'],
  },
  {
    id: '37',
    name: 'Sudado de Pescado con Mariscos',
    price: '$12.990',
    description: 'Sudado con mariscos.',
    image: sudadoImg,
    images: [sudadoImg],
    tags: ['Sudados'],
    ingredients: ['Pescado entero', 'Pulpo', 'Camarón', 'Calamar'],
    allergens: ['Pescado', 'Mariscos'],
  },

  // ======================
  // ⭐ ESPECIALIDADES
  // ======================
  {
    id: '38',
    name: 'Pulpo a la Parrilla Mi primer puerto',
    price: '$12.990',
    description: 'Pulpo tierno de las costas ariqueñas, bañado en salsa anticuchera y chimichurri, acompañado de papas rústicas.',
    image: pulpoParrilla1Img,
    images: [pulpoParrilla1Img, pulpoParrilla2Img],
    tags: ['Especialidades'],
    ingredients: ['Pulpo', 'Ají panca', 'Chimichurri', 'Papas rústicas'],
    allergens: ['Mariscos'],
  },
  {
    id: '39',
    name: 'Anticucho de Corazón',
    price: '$7.000',
    description: 'Anticucho peruano tradicional.',
    image: anticuchoImg,
    images: [anticuchoImg],
    tags: ['Especialidades'],
    ingredients: ['Corazón de res', 'Ají panca', 'Papa', 'Choclo'],
    allergens: undefined,
  },
  {
    id: '40',
    name: 'Tallarín Saltado de Carne',
    price: '$9.000',
    description: 'Fideos salteados al wok.',
    image: tallarinSaltadoImg,
    images: [tallarinSaltadoImg],
    tags: ['Especialidades'],
    ingredients: ['Tallarines', 'Carne de res', 'Cebolla', 'Tomate'],
    allergens: ['Gluten'],
  },
  {
    id: '41',
    name: 'Fetuccini al Ajillo con Camarones',
    price: '$10.000',
    description: 'Pasta al ajillo.',
    image: pastaImg,
    images: [pastaImg],
    tags: ['Especialidades'],
    ingredients: ['Fetuccini', 'Camarones', 'Ajo', 'Aceite de oliva'],
    allergens: ['Gluten', 'Mariscos'],
  },

  // ======================
  // 🍝 PASTAS
  // ======================
  {
    id: '42',
    name: 'Fetuccini Fruto del Mar',
    price: '$10.990',
    description: 'Pasta en salsa americana con mariscos.',
    image: pastaImg,
    images: [pastaImg],
    tags: ['Pastas'],
    ingredients: ['Fetuccini', 'Salsa americana', 'Camarón', 'Pulpo', 'Calamar'],
    allergens: ['Gluten', 'Mariscos'],
  },

  // ======================
  // 🍝 RISOTTOS
  // ======================
  {
    id: '43',
    name: 'Risotto de Camarones',
    price: '$10.000',
    description: 'Risotto cremoso con camarones.',
    image: risoto_camaronImg,
    images: [risoto_camaronImg],
    tags: ['Risottos'],
    ingredients: ['Arroz arborio', 'Camarones', 'Queso', 'Mantequilla'],
    allergens: ['Mariscos', 'Lácteos'],
  },
  {
    id: '44',
    name: 'Risotto Fruto del Mar',
    price: '$10.990',
    description: 'Risotto marino cremoso.',
    image: risoto_camaronImg,
    images: [risoto_camaronImg],
    tags: ['Risottos'],
    ingredients: ['Arroz arborio', 'Pulpo', 'Camarón', 'Calamar'],
    allergens: ['Mariscos', 'Lácteos'],
  },

  // ======================
  // 🥬 VEGETARIANO
  // ======================
  {
    id: '45',
    name: 'Saltado Vegetariano',
    price: '$8.000',
    description: 'Salteado de verduras al wok.',
    image: SaltadoVeganoImg,
    images: [SaltadoVeganoImg],
    tags: ['Vegetariano'],
    ingredients: ['Champiñones', 'Verduras mixtas', 'Sillao', 'Papa frita'],
    allergens: undefined,
  },
  {
    id: '46',
    name: 'Risotto Vegetariano',
    price: '$8.000',
    description: 'Risotto de champiñones y verduras.',
    image: risottoVeganoImg,
    images: [risottoVeganoImg],
    tags: ['Vegetariano'],
    ingredients: ['Arroz arborio', 'Champiñones', 'Verduras'],
    allergens: ['Lácteos'],
  },

  // ======================
  // 🍖 CARNES
  // ======================
  {
    id: '47',
    name: 'Costillar al Horno BBQ',
    price: '$10.000',
    description: 'Costillar al horno con salsa BBQ.',
    image: costillar1Img,
    images: [costillar1Img, costillar2Img],
    tags: ['Carnes'],
    ingredients: ['Costillar de cerdo', 'Salsa BBQ', 'Papa rústica', 'Merkén'],
    allergens: undefined,
  },
  {
    id: '48',
    name: 'Pollo Broaster',
    price: '$8.000',
    description: 'Pollo crujiente acompañado a elección.',
    image: polloChaufaImg,
    images: [polloChaufaImg, polloPapaImg],
    tags: ['Carnes'],
    ingredients: ['Pollo broaster', 'Chaufa o papa frita (a elección)'],
    allergens: ['Gluten'],
  },

  // ======================
  // 🐟 PESCADOS
  // ======================
  {
    id: '49',
    name: 'Pescado Frito Mi Primer Puerto',
    price: '$10.000',
    description: 'Pesca del día frita.',
    image: pescadoFritoImg,
    images: [pescadoFritoImg],
    tags: ['Pescados'],
    ingredients: ['Pesca del día (zargo, lenguado, bonito, cojinova)'],
    allergens: ['Pescado'],
  },

  // ======================
  // 🤝 DÚO
  // ======================
  {
    id: '50',
    name: 'Dúo Personal',
    price: '$12.900',
    description: 'Elige 2 platos a elección.',
    image: duoImg,
    images: [duoImg],
    tags: ['Dúo'],
    ingredients: [
      'Elige 2 platos:',
      'Ceviche de pescado',
      'Arroz con mariscos',
      'Chicharrón de pescado',
      'Chaufa de mariscos',
    ],
    allergens: ['Pescado', 'Mariscos'],
  },
  {
    id: '51',
    name: 'Dúo para Dos Personas',
    price: '$15.990',
    description: 'Ideal para compartir. Elige 2 platos.',
    image: duoImg,
    images: [duoImg],
    tags: ['Dúo'],
    ingredients: [
      'Elige 2 platos:',
      'Ceviche de pescado',
      'Arroz con mariscos',
      'Chicharrón de pescado',
      'Chaufa de mariscos',
    ],
    allergens: ['Pescado', 'Mariscos'],
  },

  // ======================
  // 🤝 TRÍO
  // ======================
  {
    id: '52',
    name: 'Trío para Tres Personas',
    price: '$24.990',
    description: 'Perfecto para compartir. Elige 3 platos.',
    image: trioImg,
    images: [trioImg],
    tags: ['Trío'],
    ingredients: [
      'Elige 3 platos:',
      'Ceviche de pescado',
      'Arroz con mariscos',
      'Chicharrón de pescado',
      'Chaufa de mariscos',
    ],
    allergens: ['Pescado', 'Mariscos'],
  },

  // ======================
  // 🍟 GUARNICIONES
  // ======================
  {
    id: '53',
    name: 'Papa Rústica',
    price: '$2.500',
    description: 'Guarnición.',
    image: papaRusticaImg,
    images: [papaRusticaImg],
    tags: ['Guarniciones'],
    ingredients: ['Papa'],
    allergens: undefined,
  },
  {
    id: '54',
    name: 'Arroz Chaufa',
    price: '$3.000',
    description: 'Guarnición.',
    image: arozChaufaImg,
    images: [arozChaufaImg],
    tags: ['Guarniciones'],
    ingredients: ['Arroz', 'Huevo', 'Cebollín'],
    allergens: undefined,
  },
  {
    id: '55',
    name: 'Chifle de Camote',
    price: '$2.500',
    description: 'Guarnición.',
    image: camoteImg,
    images: [camoteImg],
    tags: ['Guarniciones'],
    ingredients: ['Camote'],
    allergens: undefined,
  },
  {
    id: '56',
    name: 'Canchita',
    price: '$2.000',
    description: 'Guarnición.',
    image: canchaImg,
    images: [canchaImg],
    tags: ['Guarniciones'],
    ingredients: ['Maíz'],
    allergens: undefined,
  },
  {
    id: '57',
    name: 'Papa Dorada',
    price: '$2.500',
    description: 'Guarnición.',
    image: papaDoradaImg,
    images: [papaDoradaImg],
    tags: ['Guarniciones'],
    ingredients: ['Papa'],
    allergens: undefined,
  },
  {
    id: '58',
    name: 'Arroz blanco',
    price: '$2.500',
    description: 'Guarnición.',
    image: arrozBlancoImg,
    images: [arrozBlancoImg],
    tags: ['Guarniciones'],
    ingredients: ['Arroz'],
    allergens: undefined,
  },
  {
    id: '59',
    name: 'Papa Frita',
    price: '$2.500',
    description: 'Guarnición.',
    image: papaFritaImg,
    images: [papaFritaImg],
    tags: ['Guarniciones'],
    ingredients: ['Papa'],
    allergens: undefined,
  },

];
export default function Menu() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)
  const [search, setSearch] = useState('')

  const filteredDishes = dishes.filter(d => {
    const text = search.toLowerCase()

    return (
      d.name.toLowerCase().includes(text) ||
      d.description?.toLowerCase().includes(text) ||
      d.tags?.some(tag => tag.toLowerCase().includes(text)) ||
      d.ingredients?.some(ing => ing.toLowerCase().includes(text))
    )
  })

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-2">Nuestra Carta</h2>
      <p className="text-gray-600 mb-4">
        Tradición peruana con sabor casero.
      </p>

      {/* 🔍 BUSCADOR */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Buscar platos, ingredientes o combos..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      {/* 🧾 LISTA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDishes.map(d => (
          <DishCard key={d.id} dish={d} onClick={() => setSelectedDish(d)} />
        ))}
      </div>

      {filteredDishes.length === 0 && (
        <p className="text-center text-slate-400 mt-10">
          No se encontraron platos 😕
        </p>
      )}

      {selectedDish && (
        <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
      )}
    </section>
  )
}
