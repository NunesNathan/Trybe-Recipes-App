import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';

export default function Explore() {
  const history = useHistory();

  return (
    <main>
      <Header title="Explorer" search={ false } />
      <Button
        test="explore-foods"
        text="Explore Foods"
        onClick={ () => history.push('/explore/foods') }
      />
      <Button
        test="explore-drinks"
        text="Explore Drinks"
        onClick={ () => history.push('/explore/drinks') }
      />
    </main>
  );
}
