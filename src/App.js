import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CaraouselPage from './Carausel';
import Game from './components/tic-toe';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carousel" element={<CaraouselPage />} />
      <Route path="/game" element={<Game n={3} />} />
    </Routes>
  );
}

export default App;