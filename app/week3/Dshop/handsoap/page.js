import react from 'react';
import ShopTitles from '/app/comps/shoptitles';
import Back from '/app/comps/backtoshop';
import HandsoapData from './handsoapData';
import HandsoapItems from './handsoapItems';

export default function Handsoap() {
  return(
    <div className="text-white">
      <ShopTitles>
      <h1>🧼 Handsoap Products</h1>
      </ShopTitles>
      <ul className="grid grid-cols-2 p-4 pt-10">
        {HandsoapData.map((item, index) => (
          <HandsoapItems key={index} name={item.name} quantity={item.quantity} category={item.category} price={item.price}/>
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

