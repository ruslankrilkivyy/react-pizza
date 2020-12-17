import React from 'react';

import { Categories, SortPopup, PizzaCart } from '../components';

const Home = ({ categories, items }) => {
  const [activeItem, setActiveItem] = React.useState('Все');

  return (
    <div className="container">
      <div className="content__top">
        <div className="categories">
          <Categories
            items={categories.category}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>
        <div className="sort">
          <SortPopup sortNames={['популярности', 'цене', 'алфавиту']} />
        </div>
      </div>
      <h2 className="content__title">{activeItem}</h2>
      <div className="content__items">
        {items && items.map((pizza) => <PizzaCart id={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
};

export default Home;
