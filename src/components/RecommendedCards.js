import PropTypes from 'prop-types';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function RecommendedCards({ recipes, type }) {
  const MAX_RECIPES = 6;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 2,
    },
  };

  return (
    <Carousel responsive={ responsive }>
      {recipes.map((recipe, index) => {
        if (index < MAX_RECIPES && type === 'meal') {
          return (
            <div key={ index } data-testid={ `${index}-recomendation-card` }>
              <img
                src={ recipe.strMealThumb }
                alt={ recipe.strMeal }
                className="carousel-item-img"
              />
              <p>{ recipe.strCategory }</p>
              <h3 data-testid={ `${index}-recomendation-title` }>{ recipe.strMeal }</h3>
            </div>);
        }
        if (index < MAX_RECIPES && type === 'drink') {
          return (
            <div key={ index } data-testid={ `${index}-recomendation-card` }>
              <img
                src={ recipe.strDrinkThumb }
                alt={ recipe.strDrink }
                className="carousel-item-img"
              />
              <p>{ recipe.strAlcoholic }</p>
              <h3
                data-testid={ `${index}-recomendation-title` }
              >
                {recipe.strDrink}
              </h3>
            </div>);
        }
        return null;
      })}
    </Carousel>);
}

RecommendedCards.propTypes = {
  recipes: PropTypes.arrayOf,
  type: PropTypes.string,
}.isRequired;
