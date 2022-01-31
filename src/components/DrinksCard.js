import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import shareIcon from '../images/shareIcon.svg';

export default function DrinksCard({ recipe, index: i }) {
  return (
    <li>
      <img
        data-testid={ `${i}-horizontal-image` }
        src={ recipe.image }
        alt={ `${recipe.name}` }
      />
      <p data-testid={ `${i}-horizontal-top-text` }>{recipe.alcoholicOrNot}</p>
      <p data-testid={ `${i}-horizontal-name` }>{recipe.name}</p>
      <p data-testid={ `${i}-horizontal-done-date` }>{recipe.doneDate}</p>
      <Button
        test={ `${i}-horizontal-share-btn` }
        src={ shareIcon }
        onClick={ () => { } }
      />
    </li>);
}

DrinksCard.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
    doneDate: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
