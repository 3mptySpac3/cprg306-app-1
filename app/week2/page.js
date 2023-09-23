import React from 'react';
import Navbar from '../Navbar';
import Link from 'next/link';
import UserInfo from '../comps/UserInfo';

export default function Week2() {
  return (
    <div>
      <Navbar />
      <div className="mt-24">
        <h1 className='text-4xl ml-36 m-2'>My Shopping List</h1>
      </div>
      <div>
        <UserInfo />
      </div>
    </div>
  )
}