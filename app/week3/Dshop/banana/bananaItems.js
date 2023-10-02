import react from 'react';

function BananaItems({name, quantity,category,price}){
  return(
    <li className="border p-4 mb-4 ml-4 mr-4">
      <h4 className="font-bold">{name}</h4>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
    </li>
    );
} 

export default BananaItems;