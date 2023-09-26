import React from 'react';
import Navbar from '../Navbar';
import Link from 'next/link';
import ItemKart from '../comps/shoppingkart';

export default function Week3() {
  return (
    <div>
      <div><Navbar /></div>

      <div className="grid-container mt-36 hover:cursor-pointer">
        <ItemKart name="Milk" />
        <ItemKart name="Eggs" />
        <ItemKart name="Bread" />
        <ItemKart name="Banana" />
        <ItemKart name="Broccoli" />
        <ItemKart name="Chicken Breast" />
        <ItemKart name="Pasta Sauce" />
        <ItemKart name="Spaghetti" />
        <ItemKart name="Toilet Paper" />
        <ItemKart name="Paper Towel" />
        <ItemKart name="Hand Soap" />
        <ItemKart name="Dish Soap" />

      </div>
    </div>
   
  )
}