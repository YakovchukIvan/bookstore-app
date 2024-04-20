import React, { useState } from 'react';

function ListSort({ onClickList }) {
  const [activeItem, setActiveItem] = useState(0);

  const sortOptions = ['title', 'slug', 'id']; // Масив варіантів сортування

  const handleItemClick = (index) => {
    setActiveItem(index);
    onClickList(sortOptions[index]); // Доступ до значення сортування за індексом
  };

  return (
    <ul className="list__sort">
      <li>Sort by:</li>
      {sortOptions.map((option, index) => (
        <li
          key={index} // Додати ключ для кожного елемента списку
          className={activeItem === index ? 'item-sort-active' : ''}
          onClick={() => handleItemClick(index)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
}

export default ListSort;
