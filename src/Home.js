import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './routes';

function Home() {
  return (
    <div>
      {routes.map(route => <div><Link to = {route.link}>{route.name}</Link></div>)}
    </div>
  );
}

export default Home;