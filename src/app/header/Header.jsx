'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-900">
              .tech<span className="text-blue-600">_</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Contact
            </a>
            <button className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a
              href="#about"
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <button className="w-full px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-medium mt-2">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
