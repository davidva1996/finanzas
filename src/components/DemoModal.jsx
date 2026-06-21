import React, { useState } from 'react'
import Modal from './Modal'

const DemoModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', empresa: '' })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setSubmitted(false)
      setForm({ nombre: '', email: '', empresa: '' })
    }, 300)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={submitted ? '¡Solicitud recibida!' : 'Solicitar Demo Gratuita'}
      subtitle={!submitted ? 'Nuestro equipo te contactará en menos de 24 horas.' : undefined}
    >
      {submitted ? (
        <div className='text-center py-2'>
          <div className='w-16 h-16 rounded-full bg-[#00df9a]/10 border border-[#00df9a]/30 flex items-center justify-center mx-auto mb-5'>
            <span className='text-[#00df9a] text-2xl font-bold'>✓</span>
          </div>
          <p className='text-gray-300 mb-1'>
            Gracias, <span className='text-white font-semibold'>{form.nombre}</span>.
          </p>
          <p className='text-gray-500 text-sm mb-7'>
            Enviaremos información a{' '}
            <span className='text-gray-300'>{form.email}</span>
          </p>
          <button
            onClick={handleClose}
            className='w-full bg-[#00df9a] text-black font-bold py-3 rounded-lg hover:bg-[#00bf84] transition-colors cursor-pointer'
          >
            Cerrar
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div>
            <label className='text-gray-400 text-sm mb-1.5 block'>
              Nombre completo
            </label>
            <input
              required
              name='nombre'
              type='text'
              placeholder='Juan García'
              value={form.nombre}
              onChange={handleChange}
              className='w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00df9a] transition-colors'
            />
          </div>
          <div>
            <label className='text-gray-400 text-sm mb-1.5 block'>
              Correo electrónico
            </label>
            <input
              required
              name='email'
              type='email'
              placeholder='juan@empresa.com'
              value={form.email}
              onChange={handleChange}
              className='w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00df9a] transition-colors'
            />
          </div>
          <div>
            <label className='text-gray-400 text-sm mb-1.5 block'>
              Empresa{' '}
              <span className='text-gray-600 font-normal'>(opcional)</span>
            </label>
            <input
              name='empresa'
              type='text'
              placeholder='Mi Empresa S.A.S'
              value={form.empresa}
              onChange={handleChange}
              className='w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00df9a] transition-colors'
            />
          </div>
          <button
            type='submit'
            className='mt-1 bg-[#00df9a] text-black font-bold py-3 rounded-lg hover:bg-[#00bf84] active:scale-[0.98] transition-all cursor-pointer'
          >
            Enviar solicitud →
          </button>
        </form>
      )}
    </Modal>
  )
}

export default DemoModal
