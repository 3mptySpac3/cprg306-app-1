"use client";

import React from 'react';
import Item from './Item';
import ItemsData from './Data.json';

const ItemList = () => { 
  const [sortBy, setSortBy] = React.useState('name');

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
    <div className="bg-orange-200 text-black min-h-screen">
    <div className="sticky top-0 bg-gray-950 p-4">
      <button 
        onClick={() => setSortBy('name')} 
        className={`px-4 py-2 border border-gray-300 ${sortBy === 'name' ? 'bg-lightblue' : 'bg-whitesmoke'} hover:bg-blue-200 transition`}
      >
        Sort by Name
      </button>
      <button 
        onClick={() => setSortBy('category')} 
        className={`px-4 py-2 border border-gray-300 ml-2 ${sortBy === 'category' ? 'bg-lightblue' : 'bg-whitesmoke'} hover:bg-blue-200 transition`}
      >
        Sort by Category
      </button>
    </div>
    <div>
      <ul className="grid grid-cols-5">
        {sortedItems.map(item => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            price={item.price}
          />
        ))}
      </ul>
    </div>
    </div>
  );
};

export default ItemList;
