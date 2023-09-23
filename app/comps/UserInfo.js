import Link from 'next/link';
import React from 'react';

function UserInfo() {
  return (
    <div style= {{fontFamily: "cursive"}}className = 'ml-36'>
      <p>Name: Jean-Pierre Nde-Forgwang</p>
      <p>Course Section: CPRG 306 A</p>
      <p>
      <Link href="https://github.com/">GitHub</Link> 
      </p>
    </div>
  );
}

export default UserInfo;