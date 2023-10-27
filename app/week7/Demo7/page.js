"use client"

import React, { useState, useEffect } from 'react';

async function fetchRandomDog() {
  //  https://dog.ceo/api/breeds/image/random

  const response = await fetch ('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  return data.message;
}


export default function Page(){

  const [dog, setDog] = useState(null);

  async function loadRandomDog(){
    const randomDog = await fetchRandomDog();
    setDog(randomDog);
    }

    useEffect(() => {
      loadRandomDog();
    }, []);

  return (
    <div>
      <div className="text-white">
      <h1> Dogy Dog</h1>
        <div>
          <img src = {dog}>
          </img>
        </div>
      </div>
    </div>
  );
}



