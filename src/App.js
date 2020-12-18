import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

import { Header } from './components';
import { Home, Cart } from './pages';

import './scss/app.scss';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzasAction(data));
    });
  }, []);

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
