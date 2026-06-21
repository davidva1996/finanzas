import React, { useState } from 'react'
import Laptop from '../assets/laptop.jpg'
import useInView from '../hooks/useInView'
import DemoModal from './DemoModal'

const features = [
  'Reportes en tiempo real',
  'Integración con múltiples plataformas',
  'Alertas y notificaciones inteligentes',
]

const Analytics = () => {
  const [ref, inView] = useInView()
  const [modalOpen, setModalOpen] = useState(false)

  const fade = (delay = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  })

  return (
    <>
      <div id='compania' className='w-full bg-white py-20 px-4' ref={ref}>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12 items-center'>
          {/* Image */}
          <div style={fade(0)}>
            <img
              className='w-full max-w-[480px] mx-auto rounded-2xl shadow-2xl shadow-black/15 object-cover'
              src={Laptop}
              alt='Panel de análisis de datos'
            />
          </div>

          {/* Content */}
          <div className='flex flex-col justify-center' style={fade(150)}>
            <p className='text-[#00df9a] font-bold tracking-[0.15em] text-xs uppercase mb-3'>
              Panel de análisis de datos
            </p>
            <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold text-gray-900 leading-snug'>
              Administre el análisis de datos de forma centralizada
            </h2>
            <p className='text-gray-500 mt-4 leading-relaxed text-sm'>
              Obtenga visibilidad completa sobre el rendimiento de su negocio.
              Tome decisiones basadas en datos en tiempo real y optimice cada
              etapa de su flujo de trabajo con herramientas intuitivas y
              potentes.
            </p>
            <ul className='mt-6 space-y-3'>
              {features.map((f) => (
                <li key={f} className='flex items-center gap-3 text-gray-600 text-sm'>
                  <span className='w-5 h-5 rounded-full bg-[#00df9a]/15 flex items-center justify-center flex-shrink-0'>
                    <span className='text-[#00df9a] text-[10px] font-bold'>✓</span>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setModalOpen(true)}
              className='mt-8 bg-black text-[#00df9a] w-[180px] rounded-lg font-bold py-3 text-sm hover:bg-gray-900 active:scale-95 transition-all cursor-pointer'
            >
              Ver demo →
            </button>
          </div>
        </div>
      </div>

      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

export default Analytics
