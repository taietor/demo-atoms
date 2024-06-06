import React, { useState } from 'react';
import { IoImageOutline } from 'react-icons/io5';

const CustomSwitch: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="relative inline-block w-20 h-10">
      {/* Sfondo dello switch */}
      <div
        className={`w-full h-full bg-gray-300 rounded-lg shadow-inner transition-colors duration-300 ${
          isActive ? 'bg-green-400' : 'bg-gray-300'
        }`}
      ></div>

      {/* Quadratto che rappresenta lo switch */}
      <div
        onClick={toggleSwitch}
        className={`absolute top-0 left-0 w-10 h-10 bg-white  shadow-md cursor-pointer transition-transform duration-300 ${
          isActive ? 'transform translate-x-full' : ''
        }`}
      >
        {/* Icona quando lo switch è attivo */}
        {isActive && (
          <div className="flex justify-center items-center h-full w-full text-green-600">
            <IoImageOutline />
          </div>
        )}
        {/* Testo quando lo switch è disattivo */}
        {!isActive && (
          <div className="flex justify-center items-center h-full w-full text-gray-600">
            Aa
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSwitch;
