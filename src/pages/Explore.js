import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';

export default function Explore() {
  return (
    <main>
      <Header title="Explorer" search={ false } />
      <Button test="explore-foods" text="Explore Foods" />
      <Button test="explore-drinks" text="Explore Drinks" />
    </main>
  );
}
