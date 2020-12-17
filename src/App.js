import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

import './scss/app.scss';

const categories = {
  category: [
    { id: 1, name: 'Мясные' },
    { id: 2, name: 'Вегетарианская' },
    { id: 3, name: 'Гриль' },
    { id: 4, name: 'Острые' },
    { id: 5, name: 'Закрытые' },
  ],
};

function App() {
  return (
    <div className="wrapper">
      <Route path="/" component={Header} />
      <div className="content">
        <Route path="/" exact render={() => <Home categories={categories} />} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
