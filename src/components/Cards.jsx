import React, { useState } from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import useInView from '../hooks/useInView'
import Modal from './Modal'

const plans = [
  {
    name: 'Un usuario',
    icon: Single,
    price: 149,
    features: ['500 GB de almacenamiento', '1 usuario', 'Envío hasta 2 GB'],
    popular: false,
    dark: false,
  },
  {
    name: 'Dos usuarios',
    icon: Double,
    price: 200,
    features: ['1 TB de almacenamiento', '2 usuarios', 'Envío hasta 10 GB'],
    popular: true,
    dark: true,
  },
  {
    name: 'Tres usuarios',
    icon: Triple,
    price: 250,
    features: ['1.5 TB de almacenamiento', '3 usuarios', 'Envío hasta 20 GB'],
    popular: false,
    dark: false,
  },
]

const TrialModal = ({ isOpen, onClose, plan }) => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => { setSubmitted(false); setEmail('') }, 300)
  }

  if (!plan) return null

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={submitted ? '¡Prueba activada!' : `Iniciar prueba — ${plan.name}`}
      subtitle={!submitted ? '14 días gratis. Sin tarjeta de crédito.' : undefined}
    >
      {submitted ? (
        <div className='text-center py-2'>
          <div className='w-16 h-16 rounded-full bg-[#00df9a]/10 border border-[#00df9a]/30 flex items-center justify-center mx-auto mb-5'>
            <span className='text-[#00df9a] text-2xl font-bold'>✓</span>
          </div>
          <p className='text-gray-300 mb-1 font-medium'>Tu prueba está lista.</p>
          <p className='text-gray-500 text-sm mb-7'>
            Revisa tu correo en{' '}
            <span className='text-gray-300'>{email}</span> para acceder.
          </p>
          <button
            onClick={handleClose}
            className='w-full bg-[#00df9a] text-black font-bold py-3 rounded-lg hover:bg-[#00bf84] transition-colors cursor-pointer'
          >
            ¡Genial!
          </button>
        </div>
      ) : (
        <>
          {/* Plan summary */}
          <div className='flex items-center justify-between bg-white/5 border border-gray-800 rounded-xl px-5 py-4 mb-5'>
            <div>
              <p className='text-gray-500 text-xs uppercase tracking-wider mb-1'>
                Plan seleccionado
              </p>
              <p className='text-white font-semibold'>{plan.name}</p>
            </div>
            <div className='text-right'>
              <p className='text-[#00df9a] text-2xl font-bold'>${plan.price}</p>
              <p className='text-gray-600 text-xs'>/mes</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div>
              <label className='text-gray-400 text-sm mb-1.5 block'>
                Correo electrónico
              </label>
              <input
                required
                type='email'
                placeholder='tu@empresa.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00df9a] transition-colors'
              />
            </div>
            <button
              type='submit'
              className='bg-[#00df9a] text-black font-bold py-3 rounded-lg hover:bg-[#00bf84] active:scale-[0.98] transition-all cursor-pointer'
            >
              Comenzar prueba gratis →
            </button>
          </form>
        </>
      )}
    </Modal>
  )
}

const Cards = () => {
  const [ref, inView] = useInView(0.1)
  const [selectedPlan, setSelectedPlan] = useState(null)

  return (
    <>
      <div id='nosotros' className='w-full py-24 px-4 bg-white' ref={ref}>
        <div className='max-w-[1240px] mx-auto'>
          {/* Header */}
          <div
            className='text-center mb-14'
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              willChange: inView ? 'auto' : 'opacity, transform',
            }}
          >
            <p className='text-[#00df9a] font-bold tracking-[0.15em] text-xs uppercase mb-3'>
              Precios
            </p>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
              Elige tu plan
            </h2>
            <p className='text-gray-500 mt-3 text-sm max-w-sm mx-auto'>
              14 días de prueba gratis en cualquier plan. Sin compromiso.
            </p>
          </div>

          {/* Cards grid */}
          <div className='grid md:grid-cols-3 gap-8 items-center'>
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(32px)',
                  transition: `opacity 0.6s ease ${120 + i * 100}ms, transform 0.6s ease ${120 + i * 100}ms`,
                  willChange: inView ? 'auto' : 'opacity, transform',
                }}
                className={`relative flex flex-col rounded-2xl p-8 transition-transform duration-300 hover:scale-[1.03] ${
                  plan.dark
                    ? 'bg-[#000300] text-white shadow-2xl ring-2 ring-[#00df9a] scale-[1.02]'
                    : 'bg-white text-gray-900 shadow-xl border border-gray-100'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                    <span className='bg-[#00df9a] text-black text-xs font-bold px-5 py-1.5 rounded-full shadow-lg shadow-[#00df9a]/25 whitespace-nowrap'>
                      Más popular
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center ${plan.dark ? 'bg-white' : ''}`}>
                  <img
                    className='w-12'
                    src={plan.icon}
                    alt={plan.name}
                  />
                </div>

                <h3
                  className={`text-xl font-bold text-center mb-2 ${
                    plan.dark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.name}
                </h3>

                <div className='text-center mb-6'>
                  <span
                    className={`text-5xl font-bold ${
                      plan.dark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`text-sm ml-1 ${
                      plan.dark ? 'text-gray-500' : 'text-gray-400'
                    }`}
                  >
                    /mes
                  </span>
                </div>

                <ul className='space-y-3 mb-8 flex-1'>
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-center gap-3 text-sm ${
                        plan.dark ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      <span className='w-5 h-5 rounded-full bg-[#00df9a]/20 flex items-center justify-center flex-shrink-0'>
                        <span className='text-[#00df9a] text-[10px] font-bold'>✓</span>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full rounded-lg font-bold py-3 text-sm transition-all active:scale-95 cursor-pointer ${
                    plan.dark
                      ? 'bg-[#00df9a] text-black hover:bg-[#00bf84]'
                      : 'bg-gray-900 text-[#00df9a] hover:bg-black'
                  }`}
                >
                  Iniciar prueba gratis
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TrialModal
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        plan={selectedPlan}
      />
    </>
  )
}

export default Cards
