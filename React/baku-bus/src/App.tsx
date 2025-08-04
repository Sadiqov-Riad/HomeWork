import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n'; // Инициализация i18next
import Navbar from './components/Navbar'; 
import Home  from './pages/Home/Home';
import Footer from './pages/Home/Footer';
import Services from './pages/Services';

const App: React.FC = () => {
  return (
    <Router>
      <div className="w-full flex flex-col bg-neutral-50 min-h-screen">
        <Navbar />

        <div className="pt-[8ch] px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/tickets" element={<div>Tickets Page</div>} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>

        <Footer/>
      </div>
    </Router>
  );
};

export default App;
