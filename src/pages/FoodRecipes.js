import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Button from '../components/Button';
import DetailsIngred from '../components/DetailsIngred';
import ImageButton from '../components/ImageButton';
import LinkCopiedToast from '../components/LinkCopiedToast';
import RecommendedCards from '../components/RecommendedCards';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { searchCocktailRecommended } from '../server/apiCocktail';
import { searchMealById } from '../server/apiMeal';

const copy = require('clipboard-copy');

const MAX_TIME_OUT = 3000;

export default function FoodRecipes() {
  const { id } = useParams();
  const { pathname } = useLocation();

  const [recipe, setRecipe] = useState({});
  const [recommended, setRecommended] = useState([]);
  const [enableLinkCopied, setEnableLinkCopied] = useState(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      setEnableLinkCopied(false);
    }, MAX_TIME_OUT);

    return () => clearTimeout(timeOutID);
  }, [enableLinkCopied]);

  const fetchMeals = useCallback(async () => {
    const data = await searchMealById(id);
    setRecipe(data);
  }, [id]);

  const fetchDrinks = useCallback(async () => {
    const data = await searchCocktailRecommended();
    setRecommended(data);
  }, []);

  useEffect(() => {
    fetchMeals();
    fetchDrinks();
  }, [fetchMeals, fetchDrinks]);

  const URLEmbed = (url) => url.replace('watch?v=', 'embed/');

  const shareLink = () => {
    copy(`http://localhost:3000${pathname}`);
    setEnableLinkCopied(true);
  };

  return (
    (Object.keys(recipe).length > 0)
      ? (
        <main>
          <img
            className="recipe-img"
            data-testid="recipe-photo"
            alt={ recipe.strMeal }
            src={ recipe.strMealThumb }
          />

          <h1 data-testid="recipe-title">{ recipe.strMeal}</h1>

          <ImageButton
            src={ shareIcon }
            alt="shareIcon"
            test="share-btn"
            onClick={ shareLink }
          />
          <ImageButton
            src={ whiteHeartIcon }
            alt="favoriteIcon"
            test="favorite-btn"
            onClick={ () => {} }
          />

          {enableLinkCopied && <LinkCopiedToast />}

          <h4 data-testid="recipe-category">{ recipe.strCategory }</h4>

          <h2>Ingredients</h2>
          <DetailsIngred recipe={ recipe } />

          <h2>Instructions</h2>
          <p data-testid="instructions">{ recipe.strInstructions }</p>

          <h2>Vídeo</h2>
          <iframe
            data-testid="video"
            width="420"
            height="315"
            src={ URLEmbed(recipe.strYoutube) }
            title="Youtube vídeo"
            frameBorder="0"
            allowFullScreen
          />

          <h2>Recommended</h2>
          <RecommendedCards recipes={ recommended } type="drink" />

          <Button
            className="start-recipe-btn"
            text="Start Recipe"
            test="start-recipe-btn"
            onClick={ () => {} }
            disabled={ false }
          />

        </main>)
      : null
  );
}

// função fetchMeals:
// https://qastack.com.br/programming/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret
