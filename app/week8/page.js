"use client"; 
import Page7 from '../week7/page';
import { useUserAuth } from './auth-context';
import React, { useState, useEffect } from "react";


const Page8 =() => {

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    setIsSignedIn(!!user);}
    , [user]);

    const handleSignInWithGithub = async (event) => {
      event.preventDefault(); // Prevent form submission if it's inside a form
      try {
        await gitHubSignIn();
      } catch (error) {
        console.error('Error signing in with GitHub:', error);
      }
    };


  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (isSignedIn) {
    return(
      <div>
      <Page7 />
      <div className="bg-[#FFF8E7] flex justify-end items-center pt-2 pb-2 pr-2">
      <div className=" rounded-lg pb-2 pl-2 pr-2 w-40 max-w-md">
        <button onClick={handleSignOut} className=" shadow-lg w-full mt-4 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors">
          Sign Out
        </button>
      </div>
    </div>
    </div>
  );
  } else {
    return (
      <div className="bg-[#FFF8E7] min-h-screen flex justify-center items-center">
        <div className="bg-[#F0EAD6] shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#333]">Sign In</h2>
          <button onClick={handleSignInWithGithub} className="w-full bg-[#333] text-white py-2 rounded-md hover:bg-[#444] transition-colors">Sign In with GitHub</button>
        </div>
      </div>
    );

};

}

export default Page8;
