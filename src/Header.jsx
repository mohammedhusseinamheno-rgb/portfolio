import { useState } from 'react'
import { TfiAlignJustify, TfiClose } from "react-icons/tfi"
import './index.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header flex items-center justify-between bg-elevated p-8 fixed top-0 w-full z-10 h-20">
      {/* Navigation */}
        <h1 className="text-3xl font-bold font-poppins cursor-pointer">M7</h1>
      {isMenuOpen ? (
        <TfiClose
          className="text-3xl right-0 top-0 cursor-pointer z-50 hover:text-red-500"
          role="button"
          onClick={() => setIsMenuOpen(false)}
        />
      ) : (
        <TfiAlignJustify
          className="text-3xl right-0 top-0 cursor-pointer z-50"
          role="button"
          onClick={() => setIsMenuOpen(true)}
        />
      )}

      <ul
        className={`nav flex flex-col bg-elevated fixed top-20 right-0 w-full md:w-1/3 h-[calc(100vh-5rem)] justify-around text-center font-mono text-xl md:text-2xl
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} font-poppins font-bold`}
      >
        <a href="#intro" className="w-full h-1/4 flex items-center justify-center hover:bg-sky-700 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:underline hover:decoration-white hover:underline-offset-4" onClick={() => setIsMenuOpen(false)}>Main</a>
        <a href="#about" className="w-full h-1/4 flex items-center justify-center hover:bg-sky-700 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:underline hover:decoration-white hover:underline-offset-4" onClick={() => setIsMenuOpen(false)}>About Me</a>
        <a href="#services" className="w-full h-1/4 flex items-center justify-center hover:bg-sky-700 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:underline hover:decoration-white hover:underline-offset-4" onClick={() => setIsMenuOpen(false)}>Services</a>
        <a href="#contact" className="w-full h-1/4 flex items-center justify-center hover:bg-sky-700 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:underline hover:decoration-white hover:underline-offset-4" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </ul>
    </header>
  )
}

export default Header