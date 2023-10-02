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
        <ItemKart name="Eggs" href="/week3/egg"/>
        <ItemKart name="Bread" href="/week3/bread"/>
        <ItemKart name="Banana" href="/week3/banana"/>
        <ItemKart name="Broccoli" href="/week3/broccoli"/>
        <ItemKart name="Chicken" href="/week3/chicken"/>
        <ItemKart name="Sauce" href="/week3/sauce"/>
        <ItemKart name="Spaghetti" href="/week3/spaghetti"/>
        <ItemKart name="Toilet Paper" href="/week3/toiletpaper"/>
        <ItemKart name="Paper Towel" href="/week3/papertowel"/>
        <ItemKart name="Hand Soap" href="/week3/handsoap"/>
        <ItemKart name="Dish Soap" href="/week3/dishsoap"/>
      </GridStyle>

    </div>
   
  )
}