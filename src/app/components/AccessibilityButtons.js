'use client' // Marca o componente como cliente

import { useState } from 'react';

const AccessibilityButtons = () => {
  const [fontSize, setFontSize] = useState(16);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const increaseFont = () => setFontSize(fontSize + 2);
  const decreaseFont = () => setFontSize(fontSize - 2);
  const toggleContrast = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="flex flex-col gap-4 fixed bottom-10 right-3 z-30">
      <button
        id="Audio"
        onClick={increaseFont}
        title="Áudio"
        className="p-2 bg-grodape text-white rounded hover:bg-green-900"
      >
      <img src="/ImgGeral/vetor-audio.svg" alt="Ícone de áudio" className="h-6 w-6" />
      </button>
      <button
        id="increaseFont"
        onClick={decreaseFont}
        title="Diminuir Fonte"
        className="p-2 bg-grodape text-white rounded hover:bg-green-900"
      >
        +
      </button>

      <button
        id="decreaseFont"
        onClick={decreaseFont}
        title="Diminuir Fonte"
        className="p-2 bg-grodape text-white rounded hover:bg-green-900"
      >
        -
      </button>

      <button
        id="contrast"
        onClick={toggleContrast}
        title="Alternar Contraste"
        className="p-2 bg-grodape text-white rounded hover:bg-green-900"
      >
        <img src="/ImgGeral/vetor-lua.svg" alt="Ícone de áudio" className="h-6 w-6" />
      </button>
    </div>
  );
};

export default function Layout() {
  return (
    <>
      {/* Componente de Acessibilidade */}
      <AccessibilityButtons />
    </>
  );
}
