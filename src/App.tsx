import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-gray-800 bg-linear-to-b from-white via-sky-50 to-white">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
