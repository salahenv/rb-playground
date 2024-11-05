import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import LazyLoading from './components/LazyLoading';
import { Store } from './Store';
import StoreDemo from './components/StoreDemo';


function StoreDemoWrapper() {
  return (
    <Store>
      <StoreDemo/>
    </Store>
  )
}



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lazy-loading" element={<LazyLoading />} />
        <Route path="/store" element={<StoreDemoWrapper />} />
      </Routes>
    </div>
  );
}

export default App;