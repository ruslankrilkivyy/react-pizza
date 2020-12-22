import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Route path="/" component={Header} />
      <div className="content">
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
