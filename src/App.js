import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CaraouselPage from './Carausel';
import Game from './components/tic-toe';
import { routes } from './routes';
import Barchart from './components/barchart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carousel" element={<CaraouselPage />} />
      <Route path="/tik-toe" element={<Game n={3} />} />
      <Route path="/barchart" element={<div className='flex justify-center'><Barchart /></div>} />
    </Routes>
  );
}

export default App;