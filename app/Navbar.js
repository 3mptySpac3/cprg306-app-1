

import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white h-16 mt-1 mb-1 p-10 border-2 border-white rounded hover:shadow-xl transition-shadow duration-300">
      <div className="container mx-auto flex justify-center items-center h-full">
        <div style= {{fontFamily: "cursive"}} className="space-x-10">
          <CustomLink href="/">Home</CustomLink>
          <CustomLink target="_blank" href="/week2">Week-II</CustomLink>
          <CustomLink href="/week3">Week-III</CustomLink>
          <CustomLink href="/week4">Week-IV</CustomLink>
          <CustomLink href="/week5">Week-V</CustomLink>
          <CustomLink href="/week6">Week-VI</CustomLink>
          <CustomLink href="/week7">Week-VII</CustomLink>
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




