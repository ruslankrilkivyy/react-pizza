import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory } from '../redux/actions/filters';
import { Categories, SortPopup, PizzaCart } from '../components';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzasReducer }) => pizzasReducer.items);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <div className="categories">
          <Categories items={categories} onClickItem={onSelectCategory} />
        </div>
        <div className="sort">
          <SortPopup
            sortTypes={[
              { name: 'популярности', type: 'popular' },
              { name: 'цене', type: 'price' },
              { name: 'алфавиту', type: 'alphabet' },
            ]}
          />
        </div>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((pizza) => <PizzaCart id={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
};

export default Home;
