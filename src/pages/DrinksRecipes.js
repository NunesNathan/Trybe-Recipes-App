import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Button from '../components/Button';
import DetailsIngred from '../components/DetailsIngred';
import ImageButton from '../components/ImageButton';
import LinkCopiedToast from '../components/LinkCopiedToast';
import RecommendedCards from '../components/RecommendedCards';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { searchCocktailById } from '../server/apiCocktail';
import { searchMealListAll } from '../server/apiMeal';
import {
  deleteItemLocalStorageFavorite,
  filterInLocalStorageFavorited,
  setLocalStorageFavorite,
} from '../server/localStorageFavorited';

const copy = require('clipboard-copy');

const MAX_TIME_OUT = 3000;

export default function DrinksRecipes() {
  const { id } = useParams();
  const { pathname } = useLocation();

  const [recipe, setRecipe] = useState({});
  const [recommended, setRecommended] = useState([]);
  const [enableLinkCopied, setEnableLinkCopied] = useState(false);
  const [favorited, setFavorite] = useState(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      setEnableLinkCopied(false);
    }, MAX_TIME_OUT);

    return () => clearTimeout(timeOutID);
  }, [enableLinkCopied]);

  const fetchDrinks = useCallback(async () => {
    const data = await searchCocktailById(id);
    setRecipe(data);
  }, [id]);

  const fetchMeals = useCallback(async () => {
    const data = await searchMealListAll();
    setRecommended(data);
  }, []);

  useEffect(() => {
    fetchDrinks();
    fetchMeals();
  }, [fetchDrinks, fetchMeals]);

  console.log(recommended);

  // Verifica ao carregar a pagina se o item já é favoritado.
  useEffect(() => {
    const found = filterInLocalStorageFavorited(id, pathname);

    setFavorite(found);
  }, [id, pathname]);

  // Função que favorita e desfavorita a receita.
  const favoriteRecipe = () => {
    if (favorited) {
      setFavorite(false);

      deleteItemLocalStorageFavorite(id);
    } else {
      setFavorite(true);

      setLocalStorageFavorite(recipe, pathname);
    }
  };

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
            alt={ recipe.strDrink }
            src={ recipe.strDrinkThumb }
          />

          <h1 data-testid="recipe-title">{ recipe.strDrink}</h1>

          <ImageButton
            src={ shareIcon }
            alt="shareIcon"
            test="share-btn"
            onClick={ shareLink }
          />
          <ImageButton
            src={ favorited ? blackHeartIcon : whiteHeartIcon }
            alt="favoriteIcon"
            test="favorite-btn"
            onClick={ favoriteRecipe }
          />

          {enableLinkCopied && <LinkCopiedToast />}

          <h4 data-testid="recipe-category">{ recipe.strAlcoholic }</h4>

          <h2>Ingredients</h2>
          <DetailsIngred recipe={ recipe } />

          <h2>Instructions</h2>
          <p data-testid="instructions">{ recipe.strInstructions }</p>

          <h2>Recommended</h2>
          <RecommendedCards recipes={ recommended } type="meal" />

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
