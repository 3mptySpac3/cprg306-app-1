import React from 'react';
import Link from 'next/link';

// this is a component that controlls the naming of the items and how the items look

function ItemKart({name, href}){
  if (href){
    return(
      <Link href={href} passHref>
        <div className="border p-8 flex justify-center hover:bg-white hover:text-black transition duration-1000">{name}</div>
      </Link>
    );
}

return(
  <div className="border p-8 flex justify-center hover:bg-white hover:text-black transition duration-1000">{name}</div>
);
}

export default ItemKart;
