import React, { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({ isOpen, onClose, title, subtitle, children }) => {
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center px-4'>
      <div
        className='absolute inset-0 bg-black/75 backdrop-blur-sm'
        onClick={onClose}
      />
      <div className='modal-content relative bg-[#080808] border border-gray-800 rounded-2xl p-8 w-full max-w-md shadow-2xl shadow-black/60'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-600 hover:text-white transition-colors cursor-pointer p-1 rounded-md hover:bg-white/5'
        >
          <AiOutlineClose size={18} />
        </button>
        {title && (
          <div className='mb-6'>
            <h2 className='text-2xl font-bold text-white'>{title}</h2>
            {subtitle && (
              <p className='text-gray-500 text-sm mt-2'>{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  )
}

export default Modal
