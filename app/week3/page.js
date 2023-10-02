import React from 'react';
import Navbar from '../Navbar';
import ItemKart from '../comps/shoppingkart';
import GridStyle from '../comps/shopgrid';

export default function Week3() {
  return (
    <div>
      <div><Navbar /></div>

      <GridStyle>
        <ItemKart name="Milk" href="/week3/Dshop/milk" />
        <ItemKart name="Eggs" href="/week3/Dshop/egg"/>
        <ItemKart name="Bread" href="/week3/Dshop/bread"/>
        <ItemKart name="Banana" href="/week3/Dshop/banana"/>
        <ItemKart name="Broccoli" href="/week3/Dshop/broccoli"/>
        <ItemKart name="Chicken" href="/week3/Dshop/chicken"/>
        <ItemKart name="Sauce" href="/week3/Dshop/sauce"/>
        <ItemKart name="Spaghetti" href="/week3/Dshop/spaghetti"/>
        <ItemKart name="Toilet Paper" href="/week3/Dshop/toiletpaper"/>
        <ItemKart name="Paper Towel" href="/week3/Dshop/papertowel"/>
        <ItemKart name="Hand Soap" href="/week3/Dshop/handsoap"/>
        <ItemKart name="Dish Soap" href="/week3/Dshop/dishsoap"/>
      </GridStyle>

    </div>
   
  )
}