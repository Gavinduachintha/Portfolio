'use client'

import React, { useState, useEffect } from 'react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['Home', 'About', 'Projects', 'Contact']

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/20' 
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <a 
            href="#" 
            className='group flex items-center gap-2'
          >
            <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
              <span className='text-white font-bold text-lg'>P</span>
            </div>
            <span className='text-white text-xl font-semibold tracking-tight group-hover:text-violet-400 transition-colors duration-300'>
              Portfolio
            </span>
          </a>

          {/* Navigation */}
          <nav className='hidden md:block'>
            <ul className='flex items-center gap-1'>
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setActiveLink(link)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                      activeLink === link
                        ? 'text-violet-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link}
                    {activeLink === link && (
                      <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-violet-500 rounded-full' />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className='flex items-center gap-4'>
            <a
              href="#contact"
              className='hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-sm font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5'
            >
              Let's Talk
              <svg 
                className='w-4 h-4' 
                fill='none' 
                stroke='currentColor' 
                viewBox='0 0 24 24'
              >
                <path 
                  strokeLinecap='round' 
                  strokeLinejoin='round' 
                  strokeWidth={2} 
                  d='M17 8l4 4m0 0l-4 4m4-4H3' 
                />
              </svg>
            </a>

            {/* Mobile Menu Button */}
            <button className='md:hidden p-2 text-gray-300 hover:text-white transition-colors'>
              <svg 
                className='w-6 h-6' 
                fill='none' 
                stroke='currentColor' 
                viewBox='0 0 24 24'
              >
                <path 
                  strokeLinecap='round' 
                  strokeLinejoin='round' 
                  strokeWidth={2} 
                  d='M4 6h16M4 12h16M4 18h16' 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header