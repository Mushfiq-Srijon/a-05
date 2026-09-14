import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImage from '../assets/logo-text.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 px-6 py-4 shadow-sm backdrop-blur">
      <div className="relative max-w-7xl mx-auto flex justify-between items-center">
        <button
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden text-gray-700 hover:text-accent transition"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center md:static md:translate-x-0 md:order-first">
          <img src={logoImage} alt="Dev Stack" className="h-9 w-auto" />
        </div>

        <div className="hidden md:flex gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition font-medium">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition font-medium">Technologies</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition font-medium">Projects</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition font-medium">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition font-medium">Contact</a>
        </div>

        <div className="flex gap-3 items-center">
          <button className="hidden sm:block text-gray-600 hover:text-gray-900 font-medium transition">
            Sign In
          </button>
          <button className="bg-brand-gradient text-white px-4 sm:px-6 py-2 rounded-full hover:opacity-90 transition font-semibold">
            Sign Up
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto pt-4 pb-2 border-t border-gray-100 mt-4">
          <div className="flex flex-col gap-3">
            {['Home', 'Technologies', 'Projects', 'About', 'Contact'].map((link) => (
              <a
                key={link}
                href={link === 'Technologies' ? '#technologies' : '#'}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900 transition font-medium"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}