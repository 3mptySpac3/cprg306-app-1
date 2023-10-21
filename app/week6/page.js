// Page.js
"use client"
import React, { useState } from 'react';
import Model from './Model';
import ItemList from './ItemList';
import Link from 'next/link';


const Page = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    quantity: '',
    category: '',
    price: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new item to the items array
    // You can use a context, redux, or lift the state up to manage the items array
    // For now, I'll just log the new item
    console.log(newItem);
    setModalOpen(false);
  };

  return (
    <main className="bg-orange-100">
      <div>
        <div className=''>  
          <button onClick={() => setModalOpen(true)}>Add Item</button>
        </div>
        <div>
          <ItemList />
        </div>
        <Link href="/">
          <button className=" text-emerald-100 p-2 ml-8 mb-4 bg-gray-800 rounded text-xl hover:bg-emerald-100 hover:text-gray-800 transition duration-1000">Home</button>
        </Link>
        <Model isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Item Name:</label>
              <input type="text" name="name" value={newItem.name} onChange={handleInputChange} />
            </div>
            <div>
              <label>Item Quantity:</label>
              <input type="number" name="quantity" value={newItem.quantity} onChange={handleInputChange} />
            </div>
            <div>
              <label>Category:</label>
              <input type="text" name="category" value={newItem.category} onChange={handleInputChange} />
            </div>
            <div>
              <label>Price:</label>
              <input type="number" name="price" value={newItem.price} onChange={handleInputChange} />
            </div>
            <button type="submit">Add</button>
          </form>
        </Model>
      </div>
    </main>
  );
}

export default Page;
