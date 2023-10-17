import react from 'react';
import ShopTitles from '/app/comps/shoptitles';
import Back from '/app/comps/backtoshop';
import SauceData from './sauceData';
import SauceItems from './sauceItems';

export default function Sauce() {
  return(
    <div className="text-white">
      <ShopTitles>
      <h1>🥫 Sauce Products</h1>
      </ShopTitles>
      <ul className="grid grid-cols-2 p-4 pt-10">
        {SauceData.map((item, index) => (
          <SauceItems key={index} name={item.name} quantity={item.quantity} category={item.category} price={item.price}/>
        ))}
      </ul>
      <div>
        <Back href= "/week3">
        <h1>Back</h1>
        </Back>

      </div>
    </div>
  );
}