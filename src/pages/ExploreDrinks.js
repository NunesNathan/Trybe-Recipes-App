import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import { searchCocktailRandom } from '../server/apiCocktail';

export default function ExploreDrinks() {
  const history = useHistory();

  const searchRandom = async () => {
    const { idDrink } = await searchCocktailRandom();

    history.push(`/drinks/${idDrink}`);
  };

  return (
    <main>
      <Header title="Explore Drinks" search={ false } />
      <Button
        test="explore-by-ingredient"
        text="By Ingredient"
        onClick={ () => history.push('/explore/drinks/ingredients') }
      />
      <Button
        test="explore-surprise"
        text="Surprise me!"
        onClick={ searchRandom }
      />
    </main>
  );
}
