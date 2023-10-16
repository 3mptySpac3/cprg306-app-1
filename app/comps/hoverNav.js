"use client";

import React, { useState } from 'react';
import Navbar from '../Navbar';

const HoverNav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="relative">
      {/* Icon at the top right */}
      <div 
        className="cursor-pointer"
        onMouseEnter={() => setShowNavbar(true)}
        onMouseLeave={() => setShowNavbar(false)}
      >
        {}
        <span className="flex justify-center mr-4 mb-4 mt-0 text-">🧭</span> 
      </div>

      {/* Conditionally render Navbar based on the state */}
      {showNav && <Navbar />}
    </div>
  );
}

export default HoverNav;