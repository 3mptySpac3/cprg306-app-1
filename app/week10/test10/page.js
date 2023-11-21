"use client";

import React, { useState, useEffect, useContext } from 'react';
import { db } from '../firebase'; 
import { collection, getDocs, addDoc, updateDoc, doc } from  "firebase/firestore";
import { useUserAuth } from '../auth-context'; 

const Week10test = () => {
  const [items, setItems] = useState([]);
  const { user } = useUserAuth();

  useEffect(() => {
    if (user) {
      fetchItems();
    }
  }, [user]);

  const fetchItems = async () => {
    const itemsCollection = collection(db, "users", user.uid, "items");
    const querySnapshot = await getDocs(itemsCollection);
    const fetchedItems = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setItems(fetchedItems);
  };

  const handleCheck = async (itemId, checked) => {
    const itemDocRef = doc(db, "users", user.uid, "items", itemId);
    await updateDoc(itemDocRef, { checked });
    fetchItems(); // Refresh items from Firestore
  };

  const handleAddItem = async () => {
    const itemsCollectionRef = collection(db, "users", user.uid, "items");
    await addDoc(itemsCollectionRef, { name: 'New Item', checked: false });
    fetchItems(); // Refresh items from Firestore
  };

  return (
    <div className=' bg-slate-400'>
      <button onClick={handleAddItem} className='text-white'>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={(e) => handleCheck(item.id, e.target.checked)}
            />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Week10test;
