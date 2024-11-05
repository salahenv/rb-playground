import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import LazyLoading from './LazyLoading';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lazy-loading" element={<LazyLoading />} />
        <Route path="/store" element={<LazyLoading />} />
      </Routes>
    </div>
  );
}

export default App;