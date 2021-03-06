import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import ImageButton from './ImageButton';

export default function FoodCard({ recipe, index: i, showToast }) {
  return (
    <li>
      <Link
        to={ `/foods/${recipe.id}` }
      >
        <img
          data-testid={ `${i}-horizontal-image` }
          src={ recipe.image }
          alt={ `${recipe.name}` }
        />
      </Link>
      <p data-testid={ `${i}-horizontal-top-text` }>
        {`${recipe.nationality} - ${recipe.category}`}
      </p>
      <Link
        to={ `/foods/${recipe.id}` }
      >
        <p data-testid={ `${i}-horizontal-name` }>{recipe.name}</p>
      </Link>
      <p data-testid={ `${i}-horizontal-done-date` }>{recipe.doneDate}</p>
      <ImageButton
        test={ `${i}-horizontal-share-btn` }
        src={ shareIcon }
        alt="shareIcon"
        onClick={ () => {
          /* descoberta a existĂȘncia de da propriedade
          .clipboard e do metodo .writeText em
          https://www.kindacode.com/article/react-copy-to-clipboard-when-click-a-button-link/
          */
          navigator.clipboard.writeText(`${window.location.origin}/foods/${recipe.id}`);
          showToast();
        } }
      />
      <ul>
        {recipe.tags
          && recipe.tags.map((eachTag, index) => {
            if (index < 2) {
              return (
                <li
                  key={ `i-${eachTag}` }
                  data-testid={ `${i}-${eachTag}-horizontal-tag` }
                >
                  {eachTag}
                </li>);
            }
            return null;
          })}
      </ul>
    </li>);
}

FoodCard.propTypes = {
  index: PropTypes.number.isRequired,
  showToast: PropTypes.func.isRequired,
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    doneDate: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
