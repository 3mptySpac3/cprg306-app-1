import React from 'react';
import Link from 'next/link';
import MilkData from './milkData';
import MilkItems from './milkItems';
import ShopTitles from '/app/comps/shoptitles';
import Back from '/app/comps/backtoshop';


export default function Milk() {
  return(
    <div>
      <ShopTitles>
      <h1>🥛 Milk Products</h1>
      </ShopTitles>
      <ul className="grid grid-cols-2 p-4 pt-10">
        {MilkData.map((item, index) => (
          <MilkItems key={index} name={item.name} quantity={item.quantity} category={item.category} price={item.price}/>
        ))}
      </ul>
      <div>
        <Back href= "">
        <h1>Back</h1>
        </Back>

      </div>
    </div>
  );
}
