import React, { useState } from 'react'
import useInView from '../hooks/useInView'
import Modal from './Modal'

const Emails = () => {
  const [ref, inView] = useInView()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [modalOpen, setModalOpen] = useState(false)

  const fade = (delay = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) {
      setError('Por favor ingresa tu correo.')
      return
    }
    setError('')
    setModalOpen(true)
    setEmail('')
  }

  return (
    <>
      <div id='recursos' className='w-full py-20 text-white px-4' ref={ref}>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-10 items-center'>
          <div className='lg:col-span-2' style={fade(0)}>
            <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold leading-snug'>
              ¿Quieres consejos para{' '}
              <span className='text-[#00df9a]'>optimizar tu flujo?</span>
            </h2>
            <p className=' mt-3 text-sm leading-relaxed max-w-lg'>
              Suscríbete a nuestro boletín y mantente al día con las últimas
              tendencias en análisis de datos e inteligencia de negocios.
            </p>
          </div>

          <div style={fade(200)}>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
              <div className='flex flex-col sm:flex-row gap-3'>
                <input
                  type='email'
                  placeholder='tu@correo.com'
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError('') }}
                  className={`flex-1 bg-white/5 border ${
                    error ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00df9a] transition-colors text-sm`}
                />
                <button
                  type='submit'
                  className='bg-[#00df9a] text-black font-bold rounded-lg px-6 py-3 hover:bg-[#00bf84] active:scale-95 transition-all cursor-pointer whitespace-nowrap text-sm'
                >
                  Suscribirme
                </button>
              </div>
              {error && (
                <p className='text-red-400 text-xs'>{error}</p>
              )}
              <p className='text-gray-600 text-xs'>
                Respetamos tu privacidad.{' '}
                <span className='text-[#00df9a] cursor-pointer hover:underline'>
                  Política de privacidad
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title='¡Ya eres parte de la comunidad!'
      >
        <div className='text-center py-2'>
          <div className='w-16 h-16 rounded-full bg-[#00df9a]/10 border border-[#00df9a]/30 flex items-center justify-center mx-auto mb-5'>
            <span className='text-[#00df9a] text-2xl font-bold'>✓</span>
          </div>
          <p className='text-gray-300 mb-2 font-medium'>
            Suscripción registrada exitosamente.
          </p>
          <p className='text-gray-500 text-sm mb-7'>
            Pronto recibirás nuestros mejores consejos y novedades.
          </p>
          <button
            onClick={() => setModalOpen(false)}
            className='w-full bg-[#00df9a] text-black font-bold py-3 rounded-lg hover:bg-[#00bf84] transition-colors cursor-pointer'
          >
            ¡Perfecto!
          </button>
        </div>
      </Modal>
    </>
  )
}

export default Emails
