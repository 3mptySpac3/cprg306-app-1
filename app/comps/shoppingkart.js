import React from 'react';

// this is a component that controlls the naming of the items and how the items look

function ItemKart({name}){
  return(
    <div className="border p-8 flex justify-center hover:bg-white hover:text-black transition duration-1000">{name}</div>
  );
}

export default ItemKart;
