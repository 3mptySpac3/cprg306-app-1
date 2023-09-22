import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>The Map</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/week2">Week II</Link>
      <Link href="/week3">Week III</Link>
      <Link href="/week4">Week IV</Link>
    </nav>
  )
}

