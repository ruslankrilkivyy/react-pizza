import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addPizzaCart } from '../redux/actions/cart';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { Categories, SortPopup, PizzaCart, LoadingBlock } from '../components';
import { getPizzas } from '../redux/actions/pizzas';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const pizzaCartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(getPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortBy = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizza = (obj) => {
    dispatch(addPizzaCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <div className="categories">
          <Categories activeCategory={category} items={categories} onClickItem={onSelectCategory} />
        </div>
        <div className="sort">
          <SortPopup items={sortItems} activeType={sortBy.type} onSelectSortBy={onSelectSortBy} />
        </div>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((pizza) => (
              <PizzaCart
                key={pizza.id}
                addedCount={pizzaCartItems[pizza.id] && pizzaCartItems[pizza.id].items.length}
                onClickAddPizza={handleAddPizza}
                {...pizza}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
};

export default Home;
