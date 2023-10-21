import React from 'react';
import Navbar from '../Navbar';
import UserInfo from '../comps/UserInfo';

export default function Week2() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center text-white">
        <div className="mt-4 ml-36">
          <h1 className='text-4xl m-2 '>My Shopping List</h1>
        </div>
        <div className=" mr-12 mt-4">
          <UserInfo />
        </div>
      </div>
    </div>
  )
}