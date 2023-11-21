

import { db } from "../firebase";
import { collection, getDocs, addDoc, query, deleteDoc, doc } from "firebase/firestore";



const getItems = async (userId) => {
  const itemsCollection = collection(db, "users", userId, "items");
  const querySnapshot = await getDocs(itemsCollection);
  let items = [];
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
};

const addItem = async (userId, item) => {
  const itemsCollectionRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsCollectionRef, item);
  return { id: docRef.id, ...item };
};

const deleteItem = async (userId, itemId) => {
  await deleteDoc(doc(db, "users", userId, "items", itemId));
};

export { getItems, addItem, deleteItem };


