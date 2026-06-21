import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'
import { AiOutlineDown } from 'react-icons/ai'
import DemoModal from './DemoModal'

const Hero = () => {
  const typedRef = useRef(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['BTB', 'BTC', 'SaaS'],
      typeSpeed: 120,
      backSpeed: 140,
      loop: true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <>
      <div id='inicio' className='text-white hero-bg min-h-screen flex items-center'>
        <div className='max-w-[800px] w-full mx-auto text-center px-4 py-28'>
          <p className='text-[#00df9a] font-bold tracking-[0.2em] text-xs uppercase mb-4'>
            Creciendo con análisis de datos
          </p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold leading-tight'>
            Crece con big data
          </h1>
          <div className='flex justify-center items-center flex-wrap gap-x-3 mt-4'>
            <p className='md:text-4xl sm:text-3xl text-xl font-bold text-gray-200'>
              Financiamiento rápido para
            </p>
            <span
              ref={typedRef}
              className='md:text-4xl sm:text-3xl text-xl font-bold text-[#00df9a]'
            />
          </div>
          <p className='md:text-lg text-base  max-w-[540px] mx-auto mt-6 leading-relaxed'>
            Supervise sus análisis de datos para aumentar los ingresos de las
            plataformas BTB, BTC y SaaS.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className='mt-10 bg-[#00df9a] text-black font-bold rounded-lg px-8 py-4 text-sm tracking-wide hover:bg-[#00bf84] active:scale-95 transition-all duration-200 cursor-pointer shadow-lg shadow-[#00df9a]/20'
          >
            Empezar gratis →
          </button>

          {/* Scroll indicator */}
          <div className='mt-20 flex flex-col items-center gap-1 animate-bounce-slow select-none'>
            <span className='text-[10px] tracking-[0.2em] uppercase'>Scroll</span>
            <AiOutlineDown size={13} />
          </div>
        </div>
      </div>

      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

export default Hero
