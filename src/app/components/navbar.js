'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gverdinho">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/ImgGeral/logo.ico" alt="Logo" width={60} height={60} />
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-gbege1">GuiaVerde</span>
        </a>

        <div className="flex md:hidden w-full text-lg xl:w-auto xl-w-full lg:w-full lg:w-auto md:w-full md:w-auto">
  <ul className="flex flex-row justify-end items-start w-full space-x-8 p-4 md:p-0 -mt-[65px]">
    <li><a href="/" className="block py-2 text-gbege1 hover:text-gbege2">Home</a></li>
    <li><a className="block text-3xl -mt-1 text-gbege1 font-mono">.</a></li>
    <li><a href="/plantas" className="block py-2 text-gbege1 hover:text-gbege2">Plantas</a></li>
    <li><a className="block text-3xl -mt-1 text-gbege1 font-mono">.</a></li>
    <li><a href="/sobre" className="block py-2 text-gbege1 hover:text-gbege2">Sobre</a></li>
    <li><a className="block text-3xl -mt-1 text-gbege1 font-mono">.</a></li>
    <li><a href="/login" className="block py-2 text-gbege1 rounded hover:text-gbege2">Login</a></li>
  </ul>
</div>





        {/* Botão Hamburguer (aparece apenas em telas pequenas) */}
        <div className="hidden md:block items-center">
          <button onClick={toggleMenu} className="text-gbege1">
            {/* Botão hamburguer */}
            <div className={`w-6 h-0.5 bg-gbege1 my-1 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-gbege1 my-1 ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-gbege1 my-1 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Menu hamburguer (aparece apenas em telas pequenas quando aberto) */}
      {isOpen && (
        <div className="hidden md:block flex-col items-center bg-gverdinho absolute top-[-1] right-0 p-[70px] py-[100px] space-y-8">
        <a href="/">
    <img src="/ImgGeral/logo.ico" alt="Logo" className="block w-[80px] h-[80px] py-[-20px] mt-[-90px]" />
  </a>
        <a href="/" className="block py-2 text-gbege1 hover:text-gbege2">Home</a>
        <a href="/plantas" className="block py-2 text-gbege1 hover:text-gbege2">Plantas</a>
        <a href="/sobre" className="block py-2 text-gbege1 hover:text-gbege2">Sobre</a>
        <a href="/login" className="block py-2 text-gbege1 rounded hover:text-gbege2">Login</a>
      </div>
      
      )}
    </nav>
  );
}
