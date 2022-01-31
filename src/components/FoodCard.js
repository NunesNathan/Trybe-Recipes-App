import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import shareIcon from '../images/shareIcon.svg';

export default function FoodCard({ recipe, index: i }) {
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
        onClick={ () => { } }
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
  recipe: PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    doneDate: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
