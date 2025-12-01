'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm h-16 w-full">
      <div className="mx-auto px-2 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="logo ">
          {/* Logo will go here */}          
          <Link href="/" className="text-2xl font-bold"><img src="/img/logo_text.jpg" alt="" className='h-[32px]'/></Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block text-[18px] mt-[12px]">
          <ul className="flex space-x-4">
            <li><Link href="/about" className="hover:underline">Über uns</Link></li>
            <li><Link href="/pedagogy" className="hover:underline">Pädagogik</Link></li>
            <li><Link href="/official" className="hover:underline">Anmeldung</Link></li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button className="flex flex-col space-y-1.5" onClick={toggleMenu}>
            {isMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <>
                <span className="block w-6 h-0.5 bg-[#f29432]"></span>
                <span className="block w-6 h-0.5 bg-[#51b255]"></span>
                <span className="block w-6 h-0.5 bg-[#00b2dd]"></span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <ul className="flex flex-col space-y-4 pl-2 sm:pl-14">
            <li><Link href="/about" className="block hover:underline" onClick={toggleMenu}>Über uns</Link></li>
            <li><Link href="/pedagogy" className="block hover:underline" onClick={toggleMenu}>Pädagogik</Link></li>
            <li><Link href="/official" className="block hover:underline" onClick={toggleMenu}>Anmeldung</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
