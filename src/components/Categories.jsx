import React from 'react';

const Categories = ({ items, activeItem, setActiveItem }) => {
  return (
    <ul>
      <li onClick={() => setActiveItem('Все')} className={activeItem === 'Все' ? 'active' : null}>
        Все
      </li>
      {items.map(({ name, id }) => (
        <li
          key={id}
          onClick={() => setActiveItem(name)}
          className={activeItem === name ? 'active' : null}>
          {name}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
