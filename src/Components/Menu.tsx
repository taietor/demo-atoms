// FullscreenMenu.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
 

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white z-50 flex flex-col"
        >
          <div className="w-full px-4 md:px-10 py-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <button className="text-black-500 hover:text-gray-700">Contribuisci</button>
          <button className="text-black-500 hover:text-gray-700">Abbonati</button>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-black-500 hover:text-gray-700 flex items-center">
            <FaUser className="w-4 h-4 mr-2" />
            Accedi
          </button>
        </div>
      </div>


          <div className="w-full px-4 flex justify-between items-center border-t border-b border-gray-300 ">
          <div className="flex items-center border-r border-gray-300">
            <button className="text-red-500 hover:text-red-700 p-8" onClick={onClose}>
              <FaTimes className="w-8 h-8" />
            </button>
            </div>
          </div>

          <div className="flex w-full h-full">
  <div className="grid grid-cols-1 md:grid-cols-3 w-full ">
    <button className="border p-4 md:p-8 text-left flex flex-col">
      <span className="block text-3xl md:text-5xl font-bold mb-1 md:mb-3 mt-auto">Articoli</span>
      <span className="block text-base md:text-lg text-gray-700">Trend, dati e novità del Terzo Settore</span>
    </button>
    <button className="border p-4 md:p-8 text-left flex flex-col">
      <span className="block text-3xl md:text-5xl font-bold mb-1 md:mb-3 mt-auto">Storie</span>
      <span className="block text-base md:text-lg text-gray-700">Letture ed approfondimenti del fenomeni complessi</span>
    </button>
    <button className="border p-4 md:p-8 text-left flex flex-col">
      <span className="block text-3xl md:text-5xl font-bold mb-1 md:mb-3 mt-auto">Interviste</span>
      <span className="block text-base md:text-lg text-gray-700">Racconti reali di persone ed organizzazioni.</span>
    </button>
    <button className="border p-4 md:p-8 text-left flex flex-col">
      <span className="block text-3xl md:text-5xl font-bold mb-1 md:mb-3 mt-auto">Opinioni</span>
      <span className="block text-base md:text-lg text-gray-700">Riflessioni e confronti dei nostri opinionisti.</span>
    </button>
    <button className="border p-4 md:p-8 text-left flex flex-col">
      <span className="block text-3xl md:text-5xl font-bold mb-1 md:mb-3 mt-auto">Podcast</span>
      <span className="block text-base md:text-lg text-gray-700">Un luogo per dare voce ai protagonisti della sostenibilità.</span>
    </button>
    <button className="border p-4 md:p-8 text-left flex flex-col">
      <span className="block text-3xl md:text-5xl font-bold mb-1 md:mb-3 mt-auto">Bookazine</span>
      <span className="block text-base md:text-lg text-gray-700">Una rivista da leggere e un libro da conservare.</span>
    </button>
  </div>
</div>
<div className="grid grid-cols-6 w-full md:grid md:block hidden">
    <button className="border p-8 text-left flex flex-col">
      <span className="block text-xl font-bold mb-3 mt-auto">Chi siamo</span>
      
    </button>
    <button className="border p-8 text-left flex flex-col">
      <span className="block text-xl font-bold mb-3 mt-auto">Comitato editoriale</span>
     
    </button>
    <button className="border p-8 text-left flex flex-col">
      <span className="block text-xl font-bold mb-3 mt-auto">Servizi</span>
      
    </button>
    <button className="border p-8 text-left flex flex-col">
      <span className="block text-xl font-bold mb-3 mt-auto">Agenda / Eventi</span>
     
    </button>
    <button className="border p-8 text-left flex flex-col">
      <span className="block text-xl font-bold mb-3 mt-auto">Mappa dell’attivismo</span>
    
    </button>
    <button className="border p-8 text-left flex flex-col">
      <span className="block text-xl font-bold mb-3 mt-auto">Inchieste crowdfunding</span>
     
    </button>
  </div>



        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullscreenMenu;
