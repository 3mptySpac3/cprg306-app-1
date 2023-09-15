import React from 'react';
import { NavigationMenu } from './NavigationMenu';

export default function Page() {
  return (
    <main>
    <NavigationMenu />
    <h1 className = 'text-4xl m-2'>Page</h1>
    <p>This is the page page</p>
    <p>This is another</p>
    </main>
  );
}