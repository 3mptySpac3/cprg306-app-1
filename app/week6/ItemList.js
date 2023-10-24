"use client";

import React from 'react';
import Item from './Item';
import Model from './Model';
import page from './page';


const ItemList  = ({items, setItems}) => { 
  const [sortBy, setSortBy] = React.useState('name');
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentItem, setCurrentItem] = React.useState(null);

  const handleItemClick = (item) => {
    setCurrentItem(item);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentItem(null);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    } else {
      return 0;
    }
  });

  return (
    <div className="bg-orange-100 text-black min-h-screen">
    <div className=" top-0 bg-gray-900 p-4">
      <h1 className="text-4xl font-mono bold mb-2 text-emerald-100 ml-4">Shopping List</h1>
      <div className="flex justify-end mr-4">
      <button 
        onClick={() => setSortBy('name')} 
        className={`relative font-serif px-4 py-2 border-gray-600 border border-8px rounded-md mr-4 text-gray-900 ${sortBy === 'name' ? 'bg-emerald-200' : 'bg-emerald-100'} hover:bg-orange-100 hover:text-green-200 transition duration-1000 active:translate-y-0.5`}
      >
        Name
      </button>
      <button 
        onClick={() => setSortBy('category')}
        className={`relative font-serif px-4 py-2  border-gray-600 border border-8px rounded-md ml-4 text-gray-900 ${sortBy === 'name' ? 'bg-emerald-100' : 'bg-emerald-200'} hover:bg-orange-100 hover:text-green-200 transition duration-1000 active:translate-y-0.5`}
      >

        Category
      </button>
      </div>
    </div>
    <div className="p-4">
      <ul className="grid grid-cols-4 gap-6">
        {sortedItems.map(item => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            price={item.price}
            onClick={() => handleItemClick(item)}
          />
          
        ))}
      </ul>
      <Model isOpen={isOpen} onClose={handleClose} item={currentItem} image={currentItem?.image}/>
    </div>
    </div>
  );
};

export default ItemList;
