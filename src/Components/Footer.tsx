import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between  items-start">
          <div className="lg:text-right justify-between">
            <ul className="flex flex-col lg:flex-row lg:space-x-4 mb-4 lg:mb-0 lg:ml-4">
              <li className='mb-4'>
                <a href="#" className="text-gray-600 font-bold hover:text-gray-800">
                  Il Gruppo
                </a>
              </li>
              <li className='mb-4'>
                <a href="#" className="text-gray-600 font-bold hover:text-gray-800">
                  Note Legali
                </a>
              </li>
              <li className='mb-4'>
                <a href="#" className="text-gray-600 font-bold hover:text-gray-800">
                  Chi Siamo
                </a>
              </li>
              <li className='mb-4'>
                <a href="#" className="text-gray-600 font-bold hover:text-gray-800">
                  Condizioni d'uso
                </a>
              </li>
              <li className='mb-4'>
                <a href="#" className="text-gray-600 font-bold hover:text-gray-800">
                  Privacy
                </a>
              </li>
              <li className='mb-4'>
                <a href="#" className="text-gray-600 font-bold hover:text-gray-800">
                  Scrivici
                </a>
              </li>
              <li className='mb-4'>
                <a href="#" className="text-gray-600 font-bold hover:text-gray-800">
                  Pubblicità
                </a>
              </li>
            </ul>
          </div>
          <p className="text-gray-600 text-sm lg:ml-4 mt-4 lg:mt-0 mb-4 lg:mb-0 sm:mt-4">
            © 1994-2022 Vita Società Editoriale S.p.A.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
