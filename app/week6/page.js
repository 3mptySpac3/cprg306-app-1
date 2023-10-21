// Page.js
"use client"
import React, { useState } from 'react';
import Model from './Model';
import ItemList from './ItemList';
import Link from 'next/link';
import ItemsData from './Data.json';


const Page = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [items, setItems] = useState(ItemsData.items);
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

    const newItemWithId = {
      id: Math.max(...items.map(i => i.id)) + 1,
      ...newItem
  };

  setItems(prevItems => [...prevItems, newItemWithId]);
  setModelOpen(false);
}

  return (
    <main className="bg-orange-100">
      <div>
        <div className=''>  
          <button onClick={() => setModelOpen(true)}>Add Item</button>
        </div>
        <div>
          <ItemList items={items} setItems={setItems} />
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
              <label>Price:</label>
              <input type="number" name="price" value={newItem.price} onChange={handleInputChange} />
            </div>
            <div>
              {/* <label>Category:</label> */}
              <select name="category" value={newItem.category} onChange={handleInputChange}
              className="w-full p-2 border rounded mt-1 text-black">
                <option value="" disabled>Select a category</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Meat">Meat</option>
                <option value="Dairy">Dairy</option>
                <option value="Grains">Grains</option>
                <option value="Nuts">Snacks</option>
                <option value="Drinks">Bevies</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button type="submit">Add</button>
          </form>
        </Model>
      </div>
    </main>
  );
}

export default Page;
