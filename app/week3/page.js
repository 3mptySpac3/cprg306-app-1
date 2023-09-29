import React from 'react';
import Navbar from '../Navbar';
import ItemKart from '../comps/shoppingkart';
import GridStyle from '../comps/shopgrid';

export default function Week3() {
  return (
    <div>
      <div><Navbar /></div>

      <GridStyle>
        <ItemKart name="Milk" href="/week3/milk" />
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
      </GridStyle>

    </div>
   
  )
}