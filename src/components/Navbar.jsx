import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const links = [
  { label: 'Inicio',      id: 'inicio' },
  { label: 'Compañia',   id: 'compania' },
  { label: 'Recursos',   id: 'recursos' },
  { label: 'Nosotros',   id: 'nosotros' },
  { label: 'Contáctanos', id: 'contactanos' },
]

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setNav(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='text-3xl font-bold text-[#00df9a] cursor-pointer select-none'>
          Data analytics.
        </h1>

        {/* Desktop nav */}
        <ul className='hidden md:flex items-center'>
          {links.map(({ label, id }) => (
            <li
              key={id}
              onClick={() => scrollTo(id)}
              className='relative px-4 py-2 mx-1 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer group'
            >
              {label}
              <span className='absolute bottom-0 left-4 right-4 h-[2px] bg-[#00df9a] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left' />
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setNav(!nav)}
          className='block md:hidden text-white hover:text-[#00df9a] transition-colors cursor-pointer'
          aria-label='Abrir menú'
        >
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </button>
      </div>

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 md:hidden transition-opacity duration-300 ${
          nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setNav(false)}
      />

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 left-0 w-[65%] max-w-xs h-full bg-[#000300] border-r border-gray-800 z-50 transition-transform duration-300 ease-in-out ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex items-center justify-between px-5 h-20 border-b border-gray-800'>
          <h1 className='text-xl font-bold text-[#00df9a]'>Data analytics.</h1>
          <button
            onClick={() => setNav(false)}
            className='text-gray-400 hover:text-white cursor-pointer p-1'
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
        <ul className='py-4'>
          {links.map(({ label, id }) => (
            <li
              key={id}
              onClick={() => scrollTo(id)}
              className='px-5 py-4 text-sm font-medium text-gray-300 hover:text-[#00df9a] hover:bg-white/5 transition-colors cursor-pointer border-b border-gray-800/50'
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
