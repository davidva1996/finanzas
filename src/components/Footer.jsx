import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'
import useInView from '../hooks/useInView'

const socialIcons = [
  { Icon: FaFacebookSquare, label: 'Facebook' },
  { Icon: FaInstagram, label: 'Instagram' },
  { Icon: FaTwitterSquare, label: 'Twitter' },
  { Icon: FaGithubSquare, label: 'GitHub' },
  { Icon: FaDribbbleSquare, label: 'Dribbble' },
]

const footerLinks = {
  Soluciones: ['Analítica', 'Marketing', 'Commerce', 'Insights'],
  Soporte: ['Precios', 'Documentación', 'Guías', 'API Status'],
  Compañia: ['Nosotros', 'Blog', 'Empleos', 'Carreras'],
  Legal: ['Términos y Política'],
}

const Footer = () => {
  const [ref, inView] = useInView(0.05)

  return (
    <footer
      id='contactanos'
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transition: 'opacity 0.8s ease',
      }}
    >
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-10 text-gray-400 border-t border-gray-800'>
        {/* Brand col */}
        <div>
          <h1 className='text-3xl font-bold text-[#00df9a] mb-4'>
            Data analytics.
          </h1>
          <p className='text-sm leading-relaxed text-gray-500 max-w-[260px]'>
            Impulsamos el crecimiento de tu negocio con análisis de datos
            inteligentes y en tiempo real.
          </p>
          <div className='flex gap-4 mt-6'>
            {socialIcons.map(({ Icon, label }) => (
              <Icon
                key={label}
                size={26}
                aria-label={label}
                className='text-gray-600 hover:text-[#00df9a] cursor-pointer transition-colors duration-200'
              />
            ))}
          </div>
        </div>

        {/* Links cols */}
        <div className='lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-8 mt-2'>
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section}>
              <h6 className='font-semibold text-gray-300 mb-3 text-sm'>
                {section}
              </h6>
              <ul className='space-y-2'>
                {items.map((item) => (
                  <li
                    key={item}
                    className='text-sm text-gray-500 hover:text-[#00df9a] cursor-pointer transition-colors duration-200'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className='border-t border-gray-800 py-6 text-center text-gray-700 text-xs'>
        © {new Date().getFullYear()} Data analytics. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
