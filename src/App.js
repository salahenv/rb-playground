import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import { routes } from './routes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {routes.map(({link, comp}) => <Route path={link} element={comp} />)}
    </Routes>
  );
}

export default App;