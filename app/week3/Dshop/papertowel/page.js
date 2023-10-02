import react from 'react';
import ShopTitles from '/app/comps/shoptitles';
import Back from '/app/comps/backtoshop';
import PaperTowelData from './ptData';
import PaperTowelItems from './ptItems';

export default function PaperTowel() {
  return(
    <div>
      <ShopTitles>
      <h1>🧻 Paper Towel Products</h1>
      </ShopTitles>
      <ul className="grid grid-cols-2 p-4 pt-10">
        {PaperTowelData.map((item, index) => (
          <PaperTowelItems key={index} name={item.name} quantity={item.quantity} category={item.category} price={item.price}/>
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

