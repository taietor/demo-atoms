import React from 'react';
import './index.css';
import Navbar from './Components/Navbar';
import Themes from './Components/themes';
import Main from './Components/Main';
import Footer from './Components/Footer';


const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Themes />
      <Main />
      <Footer />
      
    </div>
  );
}

export default App;
