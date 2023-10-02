import react from 'react';
import ShopTitles from '/app/comps/shoptitles';
import Back from '/app/comps/backtoshop';
import BananaData from './bananaData';
import BananaItems from './bananaItems';

export default function Banana() {
  return(
    <div>
      <ShopTitles>
      <h1>🍌 Banana Products</h1>
      </ShopTitles>
      <ul className="grid grid-cols-2 p-4 pt-10">
        {BananaData.map((item, index) => (
          <BananaItems key={index} name={item.name} quantity={item.quantity} category={item.category} price={item.price}/>
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

