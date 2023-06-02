import React from 'react'
import {FaDribbbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagram,FaTwitterSquare,} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
    <div>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Data analytics.</h1>
      <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
      <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
      </div>
    </div>
    <div className='lg:col-span-2 flex justify-between mt-6'>
  <div>
      <h6 className='font-medium text-gray-400'>Soluciones</h6>
      <ul>
          <li className='py-2 text-sm'>Analitica</li>
          <li className='py-2 text-sm'>Marketing</li>
          <li className='py-2 text-sm'>Commerce</li>
          <li className='py-2 text-sm'>Insights</li>
      </ul>
  </div>
  <div>
      <h6 className='font-medium text-gray-400'>Soporte</h6>
      <ul>
          <li className='py-2 text-sm'>Precios</li>
          <li className='py-2 text-sm'>Documentacion</li>
          <li className='py-2 text-sm'>Guias</li>
          <li className='py-2 text-sm'>API Status</li>
      </ul>
  </div>
  <div>
      <h6 className='font-medium text-gray-400'>Compañia</h6>
      <ul>
          <li className='py-2 text-sm'>Nosotros</li>
          <li className='py-2 text-sm'>Blog</li>
          <li className='py-2 text-sm'>Trabajos</li>
          <li className='py-2 text-sm'>Carreras</li>
      </ul>
  </div>
  <div>
      <h6 className='font-medium text-gray-400'>Legal</h6>
      <ul>
          <li className='py-2 text-sm'>Terminos y Politica</li>
      </ul>
  </div>
    </div>
  </div>
  )
}

export default Footer