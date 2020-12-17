import React from 'react';
import axios from 'axios';
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
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then((response) => {
      setPizzas(response.data);
    });
  }, []);

  return (
    <div className="wrapper">
      <Route path="/" component={Header} />
      <div className="content">
        <Route path="/" exact render={() => <Home categories={categories} items={pizzas} />} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
