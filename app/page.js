import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';


export default function Page() {
  return (
      <main>
      <Navbar />
      <div className = "mt-24">
        <h1 className = 'text-4xl m-2 ml-36'>CPRG 306: Web Development 2 - Assignments</h1>

        <div style= {{fontFamily: "cursive"}}className = 'ml-36'>
          <p>Name: Jean-Pierre Nde-Forgwang</p>
          <p>Course Section: CPRG 306 A</p>
          <p>
            <Link href="https://github.com/">GitHub</Link> 
          </p>
        </div>
      </div>

      </main>
  );
}

