"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import ItemsData from '../week6/Data.json';
import Model from '../week6/Model';
import Item from './Item';
import ImageMap from './ImageMap';

const Page = () => {
  const [items, setItems] = useState(ItemsData.items);
  const [sortBy, setSortBy] = useState('name');
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [isModalOpen, setModelOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    quantity: '',
    category: '',
    price: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItemWithId = {
      id: Math.max(...items.map(i => i.id)) + 1,
      ...newItem,
      image: ImageMap[newItem.category] || "/f6ba70936b5dadbaf5b40610ca88ec2b.jpg"
    };

    setItems(prevItems => [...prevItems, newItemWithId]);
    setNewItem({
      name: '',
      quantity: '',
      category: '',
      price: ''
    });
    setModalOpen(false);
  };


return (
    <main className="bg-orange-100">
      <div className=" top-0 bg-gray-900 p-4">
        <h1 className="text-4xl font-mono bold mb-2 text-emerald-100 ml-4">Shopping List</h1>
        <div className="flex justify-end mr-4">
          <button onClick={() => setSortBy('name')} className={`relative font-serif px-4 py-2 border-gray-600 border border-8px rounded-md mr-4 text-gray-900 ${sortBy === 'name' ? 'bg-emerald-200' : 'bg-emerald-100'} hover:bg-orange-100 hover:text-green-200 transition duration-1000 active:translate-y-0.5`}>Name</button>
          <button onClick={() => setSortBy('category')} className={`relative font-serif px-4 py-2  border-gray-600 border border-8px rounded-md ml-4 text-gray-900 ${sortBy === 'name' ? 'bg-emerald-100' : 'bg-emerald-200'} hover:bg-orange-100 hover:text-green-200 transition duration-1000 active:translate-y-0.5`}>Category</button>
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
      <Link href="/">
        <button className=" text-emerald-100 mt-4 p-2 ml-8 mb-4 bg-gray-800 rounded text-xl hover:bg-emerald-100 hover:text-gray-800 transition duration-1000">&lt;</button>
      </Link>
      <Model isOpen={isModalOpen} onClose={() => setModelOpen(false)}>
          <form onSubmit={handleSubmit} style = {{fontFamily: "cursive"}}>
            <div>
              <label className=""  >Item Name:</label>
              <input type="text" name="name" value={newItem.name} onChange={handleInputChange} className=" border border-black w-full" />
            </div>
            <div>
              <label>Item Quantity:</label>
              <input type="number" name="quantity" value={newItem.quantity} onChange={handleInputChange} className=" border border-black w-full" />
            </div>
            <div>
              <label>Price:</label>
              <input type="number" name="price" value={newItem.price} onChange={handleInputChange} className=" border border-black w-full"/>
            </div>
            <div>
              <label>Category</label>
              <select name="category" value={newItem.category} onChange={handleInputChange}
              className="w-full p-2 border border-black mt-1 text-black">
                <option value="" disabled>Select a category</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Meat">Meat</option>
                <option value="Dairy">Dairy</option>
                <option value="Grains">Grains</option>
                <option value="Nuts">Nuts</option>
                <option value="Drinks">Bevies</option>
                <option value="Toilet Paper">Toilet Paper</option>
                <option value="Bread">Bread</option>
                <option value="Snacks">Snacks</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button type="submit" className="bg-gray-900 text-white p-2 mb-4 rounded text-xs w-full hover:bg-emerald-100 hover:text-gray-800 transition duration-1000 mt-4" >+</button>
          </form>
        </Model>
      <div className=' text-emerald-100 p-2 bg-gray-800 rounded text-xl justify-center flex hover:bg-emerald-100 hover:text-gray-800 transition duration-1000'>  
          <button onClick={() => setModelOpen(true)}>Add Item</button>
      </div>
    </main>
  );
}

export default Page;
