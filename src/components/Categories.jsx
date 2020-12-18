import React from 'react';

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  return (
    <ul>
      <li onClick={() => onSelectItem(null)} className={activeItem === null ? 'active' : ''}>
        Все
      </li>
      {items.map((name, index) => (
        <li
          key={index}
          onClick={() => onSelectItem(index)}
          className={activeItem === index ? 'active' : null}>
          {name}
        </li>
      ))}
    </ul>
  );
});

export default Categories;
