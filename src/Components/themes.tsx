import React, { useState, useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Button = ({ label, color }: { label: string; color: string }) => (
  <div className={`h-[40px] w-[fit-content] bg-gray-200 flex items-center justify-center rounded-md border border-black shadow-button p-1 gap-1 ${color}`}>
    {label}
  </div>
);

const Themes = () => {
  const [showButtons, setShowButtons] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col items-start gap-4 bg-gray-100 p-6 md:p-10 lg:p-10 xl:p-10">
      <div className={`flex ${isMobile ? 'flex' : 'justify-between'} items-center w-full`}>
        <div>
          <h1 className="text-4xl md:text-7xl font-bold  md:block hidden ">Tutti i temi</h1>
        </div>
        {!isMobile && (
          <div className="flex  gap-3">
            <Button label="AMBIENTE" color="bg-green-200" />
            <Button label="ECONOMIA" color="bg-gray-200" />
            <Button label="MONDO" color="bg-pink-200" />
            <Button label="NON PROFIT" color="bg-white" />
            <Button label="POLITICA" color="bg-yellow-200" />
            <Button label="SOCIETÀ" color="bg-white" />
            <Button label="WELFARE" color="bg-white" />
          </div>
        )}
        {isMobile ? (
          <button
            className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-md text-4xl font-bold"
            onClick={() => setShowButtons(!showButtons)}
          >
            Tutti i temi
            <FaAngleDown className={`transform transition-transform ${showButtons ? 'rotate-180' : ''}`} />
          </button>
        ) : null}
      </div>
      {showButtons && isMobile && (
        <div className="grid grid-cols-4  gap-3">
          <Button label="AMBIENTE" color="bg-green-200" />
          <Button label="ECONOMIA" color="bg-gray-200" />
          <Button label="MONDO" color="bg-pink-200" />
          <Button label="NON PROFIT" color="bg-white" />
          <Button label="POLITICA" color="bg-yellow-200" />
          <Button label="SOCIETÀ" color="bg-white" />
          <Button label="WELFARE" color="bg-white" />
        </div>
      )}
    </div>
  );
};

export default Themes;
