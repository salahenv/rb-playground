import React from 'react';
import { Link } from 'react-router-dom';

const routes = [
  {
    label: 'Lazy and Suspense',
    to: '/lazy-loading',
  },
  {
    label: 'Store',
    to: '/store',
  }
]

function Home() {
  return (
    <div>
      <h1>Demo Page</h1>
      {
          // eslint-disable-next-line react/jsx-no-undef
          routes.map(({label, to}) => <div style={{margin: '10px'}}><Link to = {to}>{label}</Link></div>)
      }
    </div>
  );
}

export default Home;