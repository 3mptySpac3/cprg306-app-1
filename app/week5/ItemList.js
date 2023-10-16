import React, { useState } from 'react';
import Item from '/.Item';
import ItemsData from './Data.json';

const ItemList = () =>{ 
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...ItemsData.items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    } else {
      return 0;
    }
  });

    return (
      <div>
        <button onClick={() => setSortBy('name')} style={{backgroundColor: sortBy === "name" ? "lightblue" : "whitesmoke"}}>
        </button> Sort by Name
        <button onClick={() => setSortBy('category')} style={{backgroundColor: sortBy === "category" ? "lightblue" : "whitesmoke"}}>
        </button> Sort by Category
        <ul>
          {sortedItems.map(item =>
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              price={item.price}
              />
            )}
        </ul>
      </div>
    );
  };
  

export default ItemList;

