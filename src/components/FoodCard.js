import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import shareIcon from '../images/shareIcon.svg';

export default function FoodCard({ recipe, index: i, showToast }) {
  return (
    <li>
      <img
        data-testid={ `${i}-horizontal-image` }
        src={ recipe.image }
        alt={ `${recipe.name}` }
      />
      <p data-testid={ `${i}-horizontal-top-text` }>
        {`${recipe.nationality} - ${recipe.category}`}
      </p>
      <p data-testid={ `${i}-horizontal-name` }>{recipe.name}</p>
      <p data-testid={ `${i}-horizontal-done-date` }>{recipe.doneDate}</p>
      <Button
        test={ `${i}-horizontal-share-btn` }
        src={ shareIcon }
        onClick={ () => {
          /* descoberta a existência de da propriedade
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
