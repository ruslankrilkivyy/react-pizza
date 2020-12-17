import React from 'react';

const Categories = ({ items }) => {
  const [activeItem, setActiveItem] = React.useState(null);

  return (
    <ul>
      <li onClick={() => setActiveItem(null)} className={activeItem === null ? 'active' : null}>
        Все
      </li>
      {items.map(({ name, id }) => (
        <li
          key={id}
          onClick={() => setActiveItem(id)}
          className={activeItem === id ? 'active' : null}>
          {name}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
