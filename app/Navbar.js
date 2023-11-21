

import Link from 'next/link';
import React from 'react';

export default function Navbar({}) {
  return (
    <nav className="h-16 ml-4 mr-4 mt-4 p-10 border-2 hover:text-emerald-200 ">
      <div className="container mx-auto flex justify-center items-center h-full">
        <div className=""style= {{fontFamily: "cursive"}}>
          <ul className= "flex space-x-2 hover:">
            {/* <li><CustomLink href="/home"></CustomLink></li> */}
            <li><CustomLink href="/">Week-I</CustomLink></li>
            <li><CustomLink href="/week2">Week-II</CustomLink></li>
            <li><CustomLink href="/week3">Week-III</CustomLink></li>
            <li><CustomLink href="/week4">Week-IV</CustomLink></li>
            <li><CustomLink href="/week5">Week-V</CustomLink></li>
            <li><CustomLink href="/week6">Week-VI</CustomLink></li>
            <li><CustomLink href="/week7">Week-VII</CustomLink></li>
            <li><CustomLink href="/week8">Week-VIII</CustomLink></li>
            <li><CustomLink href="/week10">Week-X</CustomLink></li> 
            {/*<li><CustomLink href="/week10/test10">Test10</CustomLink></li>*
           {/* <li><CustomLink href="/week11">Week-XI</CustomLink></li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

function CustomLink({ href, children, }) {
  return (
    <Link href={href} passHref>
      <span className="cursor-pointer p-2 my-2 bg-white hover:bg-black hover:text-white transition duration-1000">
        {children}
      </span>
    </Link>
  );
}




