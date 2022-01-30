import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RecipeIngredientsItem = ({ item, index }) => {
  const [ingredientChecked, setIngredientChecked] = useState({
    checked: false,
    doneItem: '',
  });

  const handleState = ({ target: { checked } }) => {
    if (checked) {
      setIngredientChecked((prev) => (
        { ...prev, checked: true, doneItem: 'line-through' }
      ));
    } else {
      setIngredientChecked((prev) => (
        { ...prev, checked: false, doneItem: '' }
      ));
    }
  };

  const { checked, doneItem } = ingredientChecked;

  return (
    <li
      data-testid={ `${index}-ingredient-step` }
      style={ { textDecoration: doneItem } }
    >
      <input
        type="checkbox"
        name="ingrediente"
        value={ checked }
        onChange={ handleState }
      />
      {item}
    </li>
  );
};

RecipeIngredientsItem.propTypes = {
  index: PropTypes.number,
  item: PropTypes.string,
}.isRequired;

export default RecipeIngredientsItem;
