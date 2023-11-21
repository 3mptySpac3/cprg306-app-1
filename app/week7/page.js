
//93jd32.jpg Default image

"use client"

import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import ItemsData from './Data.json';
import Model from './ModelWeek7'
import Item from './Item';
import ImageMap from './ImageMap';
import {getItems, addItem} from '../week10/_services/shopping-list-service';
import UserContext from './UserContext';


const { NekosAPI } = require("nekosapi");
const nekos = new NekosAPI();

///update here -->
const Page7 = () => {
  const user = useContext(UserContext);
  const [items, setItems] = useState(ItemsData.items);
  const [sortBy, setSortBy] = useState('name');
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [isModelOpen, setModalOpen] = useState(false);
  // const imageUrl = `https://pic.re/image?category=${item.category}&_=${new Date().getTime()}`;
  const [newItem, setNewItem] = useState({
    name: '',
    quantity: '',
    category: '',
    price: ''
  });

      // Outside of your handleSubmit
      useEffect(() => {
        console.log('Items state updated:', items); // Log to verify rerender
      }, [items]);

  useEffect(() => {
    const updateItemsWithDefaultImage = () => {
      const updatedItems = ItemsData.items.map(item => ({
        ...item,
        image: 'https://pic.re/image' // Directly assign the API URL
      }));
      setItems(updatedItems);
      console.log("Items updated with image.");
    };
  
    updateItemsWithDefaultImage();
  }, []) ;

  ///update here -->
  useEffect(() => {
    if (user) {
      getItems(user.uid).then(itemsFromFirestore => {
        setItems(itemsFromFirestore);
      }).catch(error => {
        console.error("Error fetching items:", error);
      });
    }
  }, [user]);

  

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


  async function handleSubmit (e) {
    e.preventDefault();

     // Fetch a random anime image from the API
    let imageUrl = ImageMap[newItem.category] || "https://pic.re/image";


     try {
       const response = await fetch('https://pic.re/image');
       const data = await response.json();
       imageUrl = data.url; // Update imageUrl with the API response
     } catch (error) {
       console.error('Error fetching image:', error);
     }
    // const newItemWithId = {
    //   id: Math.max(...items.map(i => i.id)) + 1,
    //   ...newItem,
    //   image: imageUrl
    // };

    // const newItemWithImage = {
    //   ...newItem,
    //   image: imageUrl
    // };

    // if (user) {
    //   try {
    //     await addItem(user.uid, newItemWithImage); // Add to Firestore
    //     const updatedItems = await getItems(user.uid); // Fetch updated items list
    //     setItems(updatedItems);
    //     console.log('Items after adding:', updatedItems); // Log to verify the items
    //   } catch (error) {
    //     console.error('Error adding item:', error);
    //   }
    // } else {
    //   console.error('No authenticated user found!');
    // }
    
    
  //   setItems(prevItems => [...prevItems, newItemWithId]);
  //   setNewItem({
  //     name: '',
  //     quantity: '',
  //     category: '',
  //     price: ''
  //   });
  //   setModalOpen(false);
  // };

  setItems(prevItems => [...prevItems]);
  setNewItem({ name: '', quantity: '', category: '', price: '' });
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
      <Model isOpen={isModelOpen} onClose={() => setModelOpen(false)}>
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
          <button onClick={() => setModalOpen(true)}>Add Item</button>
      </div>
    </main>
  );
}

export default Page7;