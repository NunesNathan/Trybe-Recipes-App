import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';
import shareIcon from '../images/shareIcon.svg';

export default function DrinksCard({ recipe, index: i, showToast }) {
  return (
    <li>
      <Link
        to={ `/drinks/${recipe.id}` }
      >
        <img
          data-testid={ `${i}-horizontal-image` }
          src={ recipe.image }
          alt={ `${recipe.name}` }
        />
      </Link>
      <p data-testid={ `${i}-horizontal-top-text` }>{recipe.alcoholicOrNot}</p>
      <Link
        to={ `/drinks/${recipe.id}` }
      >
        <p data-testid={ `${i}-horizontal-name` }>{recipe.name}</p>
      </Link>
      <p data-testid={ `${i}-horizontal-done-date` }>{recipe.doneDate}</p>
      <Button
        test={ `${i}-horizontal-share-btn` }
        src={ shareIcon }
        onClick={ () => {
          /* descoberta a existência de da propriedade
          .clipboard e do metodo .writeText em
          https://www.kindacode.com/article/react-copy-to-clipboard-when-click-a-button-link/
          */
          navigator.clipboard.writeText(`${window.location.origin}/drinks/${recipe.id}`);
          showToast();
        } }
      />
    </li>);
}

DrinksCard.propTypes = {
  index: PropTypes.number.isRequired,
  showToast: PropTypes.func.isRequired,
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
    doneDate: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
