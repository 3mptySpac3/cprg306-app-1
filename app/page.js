import React from 'react';
import Navbar from './components/Navbar';
import Link from 'next/link';


export default function Page() {
  return (
    
      <main>
        < Navbar />
      <h1 className = 'text-4xl m-2'>CPRG 306: Web Development 2 - Assignments</h1>

      <div>
        <p>Name: Jean-Pierre Nde-Forgwang</p>
        <p>Course Section: CPRG 306 A</p>
        <p>
          <a href="https://github.com/">GitHub</a>
        </p>
        < Link href="/week2">Week II</Link>
        < Link href="/week3">Week III</Link>
        < Link href="/week4">Week IV</Link>
      </div>

      </main>
    

  );
}

