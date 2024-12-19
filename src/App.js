import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CaraouselPage from './Carausel';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carousel" element={<CaraouselPage />} />

    </Routes>
  );
}

export default App;