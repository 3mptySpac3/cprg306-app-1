import React from 'react';
import Navbar from '../Navbar';
import Link from 'next/link';

export default function Week7() {
  return (
    <div>
      <Navbar />
      <div ClassName="text-white">
        <Link href="/week7/Demo7">
          <button className="bg-white rounded text-xl hover:bg-emerald-100 hover:text-gray-800 transition duration-1000">Demo 7</button>
        </Link>
      </div>
    </div>
  )
}