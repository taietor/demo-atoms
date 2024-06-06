import React from 'react';
import './index.css';
import Navbar from './Components/Navbar';
import Themes from './Components/themes';


const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Themes />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center">Benvenuto alla mia Web Page</h1>
        <p className="text-center mt-4">Questa è una semplice pagina creata con React, TypeScript e Tailwind CSS.</p>
      </main>
      
    </div>
  );
}

export default App;
