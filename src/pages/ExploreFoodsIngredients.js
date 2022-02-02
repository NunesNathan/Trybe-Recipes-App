import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ListCards from '../components/ListCards';
import { searchMealIngredientsList } from '../server/apiMeal';

export default function ExploreFoodsIngredients() {
  const [listIngredients, setListIngredients] = useState([]);

  useEffect(() => {
    searchMealIngredientsList()
      .then((data) => {
        data.forEach((item) => {
          item.image = `https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png`;
        });

        setListIngredients(data);
      });
  }, []);

  return (
    <main>
      <Header title="Explore Ingredients" search={ false } />
      {listIngredients.length > 0 && <ListCards
        listItems={ listIngredients }
        keyName="strIngredient"
        keyURLImage="image"
        testCard="ingredient-card"
        linked
        pathname="/foods"
      />}
    </main>
  );
}
