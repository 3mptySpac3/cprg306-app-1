
import React from 'react';
import Navbar from '../Navbar';
import FoodForm from './FoodForm';
import Link from 'next/link';

export default function Week4() {
  return (
    <div>
      <Navbar />
      <FoodForm />
      <Link href="/">
        <button className=" text-emerald-100 p-2 ml-8 mb-4 bg-gray-800 rounded text-xl hover:bg-emerald-100 hover:text-gray-800 transition duration-1000">&lt;</button>
        </Link>
    </div>
  );
};