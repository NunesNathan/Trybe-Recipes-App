import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import RecipeIngredientsItem from './RecipeIngredientsItem';

const RecipeIngredients = ({ recipe }) => {
  const [ingredients, SetIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  /* const ingredientsAndMeasure = () => {
    const arrIngredients = Object.entries(recipe)
      .filter((items) => items[0].includes('strIngredient'))
      .filter((items) => items[1])
      .map((element) => element[1]);

    SetIngredients(arrIngredients);

    const arrMeasures = Object.entries(recipe)
      .filter((items) => items[0].includes('strMeasure'))
      .filter((items) => items[1])
      .map((element) => element[1]);

    setMeasures(arrMeasures);
  }; */

  useEffect(() => {
    const arrIngredients = Object.entries(recipe)
      .filter((items) => items[0].includes('strIngredient'))
      .filter((items) => items[1])
      .map((element) => element[1]);

    SetIngredients(arrIngredients);

    const arrMeasures = Object.entries(recipe)
      .filter((items) => items[0].includes('strMeasure'))
      .filter((items) => items[1])
      .map((element) => element[1]);

    setMeasures(arrMeasures);
  }, [recipe]);

  return (
    <ul>
      {ingredients && ingredients
        .map((item, index) => (
          <RecipeIngredientsItem
            key={ index }
            item={ item }
            measure={ measures[index] }
            index={ index }
          />
        ))}
    </ul>
  );
};

RecipeIngredients.propTypes = {
  recipe: PropTypes.object,
}.isRequired;

export default RecipeIngredients;
