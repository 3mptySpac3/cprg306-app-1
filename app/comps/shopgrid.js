import React from 'react';

// This is the function component for the grid style of the shop page

function GridStyle({children}){
  return(
    <div className="grid grid-cols-4 gap-6 mt-4 hover:cursor-pointer p-4">
      {children}
    </div>
  );
}

export default GridStyle;