

import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-1 left-2 right-2 h-16 mt-1 mb-1 p-10 border-2 hover:text-black ">
      <div className="container mx-auto flex justify-center items-center h-full">
        <div className=""style= {{fontFamily: "cursive"}}>
          <ul className= "flex space-x-2 hover:">
            <li><CustomLink href="/">Home</CustomLink></li>
            <li><CustomLink href="/week2">Week-II</CustomLink></li>
            <li><CustomLink href="/week3">Week-III</CustomLink></li>
            <li><CustomLink href="/week4.11/week4">Week-IV</CustomLink></li>
            <li><CustomLink href="/week4.11/week5">Week-V</CustomLink></li>
            <li><CustomLink href="/week4.11/week6">Week-VI</CustomLink></li>
            <li><CustomLink href="/week4.11/week7">Week-VII</CustomLink></li>
            <li><CustomLink href="/week4.11/week8">Week-VIII</CustomLink></li>
            <li><CustomLink href="/week4.11/week10">Week-X</CustomLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function CustomLink({ href, children, }) {
  return (
    <Link href={href} passHref>
      <span className="cursor-pointer p-2 my-2 bg-black hover:bg-white hover:text-black transition duration-1000">
        {children}
      </span>
    </Link>
  );
}




