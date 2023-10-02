import react from 'react';
import ShopTitles from '/app/comps/shoptitles';
import Back from '/app/comps/backtoshop';
import EggData from './eggData';
import EggItems from './eggItems';

export default function Egg() {
  return(
    <div>
      <ShopTitles>
      <h1>🥚 Egg Products</h1>
      </ShopTitles>
      <ul className="grid grid-cols-2 p-4 pt-10">
        {EggData.map((item, index) => (
          <EggItems key={index} name={item.name} quantity={item.quantity} category={item.category} price={item.price}/>
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