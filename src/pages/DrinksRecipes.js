import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import DetailsIngred from '../components/DetailsIngred';
import ImageButton from '../components/ImageButton';
import RecommendedCards from '../components/RecommendedCards';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { searchCocktailById } from '../server/apiCocktail';
import { searchMealRecommended } from '../server/apiMeal';

export default function DrinksRecipes() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState({});
  const [recommended, setRecommended] = useState([]);

  const fetchDrinks = useCallback(async () => {
    const data = await searchCocktailById(id);
    setRecipe(data);
  }, [id]);

  const fetchMeals = useCallback(async () => {
    const data = await searchMealRecommended();
    setRecommended(data);
  }, []);

  useEffect(() => {
    fetchDrinks();
    fetchMeals();
  }, [fetchDrinks, fetchMeals]);

  console.log(recommended);
  return (
    (Object.keys(recipe).length > 0)
      ? (
        <main>
          <img
            data-testid="recipe-photo"
            alt={ recipe.strDrink }
            src={ recipe.strDrinkThumb }
          />

          <h1 data-testid="recipe-title">{ recipe.strDrink}</h1>

          <ImageButton
            src={ shareIcon }
            alt="shareIcon"
            test="share-btn"
            onClick={ () => {} }
          />
          <ImageButton
            src={ whiteHeartIcon }
            alt="favoriteIcon"
            test="favorite-btn"
            onClick={ () => {} }
          />

          <h4 data-testid="recipe-category">{ recipe.strAlcoholic }</h4>

          <h2>Ingredients</h2>
          <DetailsIngred recipe={ recipe } />

          <h2>Instructions</h2>
          <p data-testid="instructions">{ recipe.strInstructions }</p>

          <h2>Recommended</h2>
          <RecommendedCards recipes={ recommended } type="meal" />

          <Button
            text="Start Recipe"
            test="start-recipe-btn"
            onClick={ () => {} }
            disabled={ false }
          />

        </main>)
      : null
  );
}
