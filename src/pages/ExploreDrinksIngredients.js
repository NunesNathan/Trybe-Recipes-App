import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ListCards from '../components/ListCards';
import { searchCocktailIngredientsList } from '../server/apiCocktail';

export default function ExploreDrinksIngredients() {
  const [listIngredients, setListIngredients] = useState([]);

  useEffect(() => {
    searchCocktailIngredientsList()
      .then((data) => {
        data.forEach((item) => {
          item.image = `https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}-Small.png`;
        });

        setListIngredients(data);
      });
  }, []);

  return (
    <main>
      <Header title="Explore Ingredients" search={ false } />
      {listIngredients.length > 0 && <ListCards
        listItems={ listIngredients }
        keyName="strIngredient1"
        keyURLImage="image"
        testCard="ingredient-card"
        linked
      />}
    </main>
  );
}
