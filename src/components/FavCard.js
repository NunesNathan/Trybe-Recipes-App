import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import ImageButton from './ImageButton';
import { unfavoriteRecipe } from '../helpers/utils';

export default function FavCard({ recipe, index: i, showToast, setFavList }) {
  const renderByType = () => {
    if (recipe.type === 'drink') {
      return recipe.alcoholicOrNot;
    }
    return `${recipe.nationality} - ${recipe.category}`;
  };

  return (
    <li>
      <Link
        to={ `/${recipe.type}s/${recipe.id}` }
      >
        <img
          data-testid={ `${i}-horizontal-image` }
          src={ recipe.image }
          alt={ `${recipe.name}` }
        />
      </Link>
      <p data-testid={ `${i}-horizontal-top-text` }>
        {renderByType()}
      </p>
      <Link
        to={ `/${recipe.type}s/${recipe.id}` }
      >
        <p data-testid={ `${i}-horizontal-name` }>{recipe.name}</p>
      </Link>
      <ImageButton
        test={ `${i}-horizontal-favorite-btn` }
        src={ blackHeartIcon }
        alt="blackHeartIcon"
        onClick={ () => setFavList(unfavoriteRecipe(recipe.id)) }
      />
      <ImageButton
        test={ `${i}-horizontal-share-btn` }
        src={ shareIcon }
        alt="shareIcon"
        onClick={ () => {
          /* descoberta a existência de da propriedade
          .clipboard e do metodo .writeText em
          https://www.kindacode.com/article/react-copy-to-clipboard-when-click-a-button-link/
          */
          navigator.clipboard
            .writeText(`${window.location.origin}/${recipe.type}s/${recipe.id}`);
          showToast();
        } }
      />
    </li>);
}

FavCard.propTypes = {
  index: PropTypes.number.isRequired,
  showToast: PropTypes.func.isRequired,
  setFavList: PropTypes.func.isRequired,
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
  }).isRequired,
};
