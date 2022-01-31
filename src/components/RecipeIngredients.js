import PropTypes from 'prop-types';
import React from 'react';
import RecipeIngredientsItem from './RecipeIngredientsItem';

const RecipeIngredients = ({ recipe }) => (
  <ul>
    {Object.entries(recipe)
      .filter((items) => items[0].includes('strIngredient'))
      .filter((items) => items[1])
      .map((element, index) => (
        <RecipeIngredientsItem key={ index } item={ element[1] } index={ index } />
      ))}
  </ul>
);

RecipeIngredients.propTypes = {
  recipe: PropTypes.object,
}.isRequired;

export default RecipeIngredients;
