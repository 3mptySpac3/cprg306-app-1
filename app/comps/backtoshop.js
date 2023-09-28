import React from "react";
import Link from "next/link";

function Back({children}) {
  return(
    <Link href = "/week3">
      <div className="text-2xl ml-10 bg-black border border-white w-20 justify-center flex hover:bg-red-500 hover:text-black mt-20 transition duration-1000" style= {{fontFamily: "cursive"}}>
        {children}
      </div>
    </Link>
  );
}

export default Back;

