import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ items, activeCategory, onClickItem }) {
  return (
    <ul>
      <li onClick={() => onClickItem(null)} className={activeCategory === null ? 'active' : ''}>
        Все
      </li>
      {items.map((name, index) => (
        <li
          key={index}
          onClick={() => onClickItem(index)}
          className={activeCategory === index ? 'active' : null}>
          {name}
        </li>
      ))}
    </ul>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickItem: PropTypes.func,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categories;
