import React from 'react';
import Navbar from '../Navbar';
import ItemList from './ItemList';

const Page = () => {
  return(
    <main>
      <div>
        <div>
        <Navbar />
        </div>
        <h1>
          Shopping ItemList
        </h1>
        <ItemList />
      </div>

    </main>
  );
}

export default Page;