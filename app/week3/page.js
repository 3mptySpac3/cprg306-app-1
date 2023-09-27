import React from 'react';
import Navbar from '../Navbar';
import Link from 'next/link';
import ItemKart from '../comps/shoppingkart';
import GridStyle from '../comps/shopgrid';

export default function Week3() {
  return (
    <div>
      <div><Navbar /></div>

      <GridStyle>
        <ItemKart name="Milk" href="/milk" />
        <ItemKart name="Eggs" href=""/>
        <ItemKart name="Bread" href=""/>
        <ItemKart name="Banana" href=""/>
        <ItemKart name="Broccoli" href=""/>
        <ItemKart name="Chicken Breast" href=""/>
        <ItemKart name="Pasta Sauce" href=""/>
        <ItemKart name="Spaghetti" href=""/>
        <ItemKart name="Toilet Paper" href=""/>
        <ItemKart name="Paper Towel" href=""/>
        <ItemKart name="Hand Soap" href=""/>
        <ItemKart name="Dish Soap" href=""/>
      </GridStyle>

    </div>
   
  )
}