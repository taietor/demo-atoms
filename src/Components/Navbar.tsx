import React, { useState } from 'react';
import { FaUser, FaBars, FaSearch } from 'react-icons/fa';
import CustomSwitch from './CustomSwitch';
import { motion } from 'framer-motion';
import FullscreenMenu from './Menu';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      {/* Container per Contribuisci, Abbonati, Accedi */}
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

      {/* Container per icone menu burger e ricerca */}
      <div className="w-full px-4 flex justify-between items-center border-t border-b border-gray-300">
        <div className="flex items-center border-r border-gray-300">
        <button onClick={toggleMenu} className="text-red-500 hover:text-red-700 p-8">
            {isMenuOpen ? (
              <motion.div animate={{ rotate: 45 }}>
                <FaBars className="w-6 h-6 mr-2 transform rotate-45" />
              </motion.div>
            ) : (
              <motion.div animate={{ rotate: 0 }}>
                <FaBars className="w-6 h-6 mr-2" />
              </motion.div>
            )}
          </button>
        </div>
        <div className="flex items-center border-l border-gray-300">
          <button className="text-red-500 hover:text-red-700 p-8">
            <FaSearch className="w-6 h-6 ml-3" />
          </button>
        </div>
      </div>

      {/* Container per i vari pulsanti tematici */}
      <div className="hidden md:flex w-full px-4 md:px-10 py-4 border-b border-gray-300 justify-between items-center">
        <div className="flex items-center gap-10">
          <button className="text-gray-500 hover:text-gray-700 font-bold text-xl border-b-4 border-transparent hover:border-red-500 pb-2">
            Tutti i temi
          </button>
          <button className="text-gray-500 hover:text-gray-700 font-bold text-xl border-b-4 border-transparent hover:border-red-500 pb-2">
            Ambiente
          </button>
          <button className="text-gray-500 hover:text-gray-700 font-bold text-xl border-b-4 border-transparent hover:border-red-500 pb-2">
            Economia
          </button>
          <button className="text-gray-500 hover:text-gray-700 font-bold text-xl border-b-4 border-transparent hover:border-red-500 pb-2">
            Mondo
          </button>
          <button className="text-gray-500 hover:text-gray-700 font-bold text-xl border-b-4 border-transparent hover:border-red-500 pb-2">
            Non Profit
          </button>
          <button className="text-gray-500 hover:text-gray-700 font-bold text-xl border-b-4 border-transparent hover:border-red-500 pb-2">
            Politica
          </button>
          <button className="text-gray-500 hover:text-gray-700 font-bold text-xl border-b-4 border-transparent hover:border-red-500 pb-2">
            Società
          </button>
          <button className="text-gray-500 hover:text-gray-700 font-bold text-xl border-b-4 border-transparent hover:border-red-500 pb-2">
            Welfare
          </button>
        </div>

        <div className="flex items-center">
          <CustomSwitch />
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 border-t border-gray-300">
          <button className="w-full text-left text-gray-500 hover:text-gray-700 font-bold text-xl py-2">Tutti i temi</button>
          <button className="w-full text-left text-gray-500 hover:text-gray-700 font-bold text-xl py-2">Ambiente</button>
          <button className="w-full text-left text-gray-500 hover:text-gray-700 font-bold text-xl py-2">Economia</button>
          <button className="w-full text-left text-gray-500 hover:text-gray-700 font-bold text-xl py-2">Mondo</button>
          <button className="w-full text-left text-gray-500 hover:text-gray-700 font-bold text-xl py-2">Non Profit</button>
          <button className="w-full text-left text-gray-500 hover:text-gray-700 font-bold text-xl py-2">Politica</button>
          <button className="w-full text-left text-gray-500 hover:text-gray-700 font-bold text-xl py-2">Società</button>
          <button className="w-full text-left text-gray-500 hover:text-gray-700 font-bold text-xl py-2">Welfare</button>
        </div>
      )}

      {/* Menu mobile */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </nav>
  );
};

export default Navbar;
