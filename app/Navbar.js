

import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white h-16 mt-1 mb-1 p-10 border-2 border-white rounded hover:shadow-xl transition-shadow duration-300">
      <div className="container mx-auto flex justify-center items-center h-full">
        <div style= {{fontFamily: "cursive"}}>
          <ul className= "flex space-x-2">
            <li><CustomLink href="/">Home</CustomLink></li>
            <li><CustomLink href="/week2">Week-II</CustomLink></li>
            <li><CustomLink href="/week3">Week-III</CustomLink></li>
            <li><CustomLink href="/week4">Week-IV</CustomLink></li>
            <li><CustomLink href="/week5">Week-V</CustomLink></li>
            <li><CustomLink href="/week6">Week-VI</CustomLink></li>
            <li><CustomLink href="/week7">Week-VII</CustomLink></li>
            <li><CustomLink href="/week8">Week-VIII</CustomLink></li>
            <li><CustomLink href="/week9">Week-IX</CustomLink></li>
            <li><CustomLink href="/week10">Week-X</CustomLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function CustomLink({ href, children, }) {
  return (
    <Link href={href} passHref>
      <span className="cursor-pointer p-2 my-2 bg-black hover:bg-gray-500 transition-colors duration-200 rounded">
        {children}
      </span>
    </Link>
  );
}




