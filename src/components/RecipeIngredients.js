import PropTypes from 'prop-types';
import React from 'react';

const RecipeIngredients = ({ recipe }) => {
  console.log(recipe);

  return (
    <ul>
      {Object.entries(recipe)
        .filter((items) => items[0].includes('strIngredient'))
        .filter((items) => items[1])
        .map((element, index) => (
          <li key={ index } data-testid={ `${index}-ingredient-step` }>{element[1]}</li>
        ))}
    </ul>
  );
};

RecipeIngredients.propTypes = {
  recipe: PropTypes.object,
}.isRequired;

export default RecipeIngredients;
