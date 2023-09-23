import React from 'react';
import Navbar from '../Navbar';
import Link from 'next/link';
import UserInfo from '../comps/UserInfo';

export default function Week2() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center">
        <div className="mt-24 ml-36">
          <h1 className='text-4xl m-2 '>My Shopping List</h1>
        </div>
        <div className=" mr-12 mt-24">
          <UserInfo />
        </div>
      </div>
    </div>
  )
}