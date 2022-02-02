import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import Button from '../components/Button';
import shareIcon from '../images/shareIcon.svg';
import favoriteIconBlack from '../images/blackHeartIcon.svg';
import favoriteIconWhite from '../images/whiteHeartIcon.svg';
import verifyRecipes from '../helpers/helpers';
import { searchMealById } from '../server/apiMeal';
import RecipeIngredients from '../components/RecipeIngredients';
import { searchCocktailById } from '../server/apiCocktail';
import recipesContext from '../context/recipesContext';
import {
  deleteItemLocalStorageFavorite,
  filterInLocalStorageFavorited,
  setLocalStorageFavorite,
} from '../server/localStorageFavorited';
import LinkCopiedToast from '../components/LinkCopiedToast';

const copy = require('clipboard-copy');

const START_SEARCH_URL = 8;
const MAX_TIME_OUT = 3000;

const RecipesInProgress = () => {
  const [recipe, setRecipe] = useState({});
  const [enableLinkCopied, setEnableLinkCopied] = useState(false);
  const [favorited, setFavorite] = useState(false);
  const { buttonFinishRecipe } = useContext(recipesContext);
  const { pathname } = useLocation();
  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    if (recipe && Object.keys(recipe).length === 0) {
      if (pathname.includes('foods')) {
        searchMealById(id).then((data) => {
          setRecipe(data);
        });
      } else if (pathname.includes('drinks')) {
        searchCocktailById(id).then((data) => {
          setRecipe(data);
        });
      }
    }
  }, [id, pathname, recipe]);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      setEnableLinkCopied(false);
    }, MAX_TIME_OUT);

    return () => clearTimeout(timeOutID);
  }, [enableLinkCopied]);

  // Verifica ao carregar a pagina se o item já é favoritado.
  useEffect(() => {
    const found = filterInLocalStorageFavorited(id, pathname);

    setFavorite(found);
  }, [id, pathname]);

  const shareLink = () => {
    copy(`http://localhost:3000${pathname.slice(0, pathname.indexOf('/', START_SEARCH_URL))}`);
    setEnableLinkCopied(true);
  };

  // Função que favorita e desfavorita a receita.
  const favoriteRecipe = () => {
    if (favorited) {
      setFavorite(false);

      deleteItemLocalStorageFavorite(id, pathname);
    } else {
      setFavorite(true);

      setLocalStorageFavorite(recipe, pathname);
    }
  };

  const {
    URLImage, title, strCategory, strInstructions,
  } = verifyRecipes(pathname, recipe); // Essa função retorna os mesmos nomes tanto para a API de Foods como a de Drinks já que alguns são diferentes e queremos usar o mesmo componente.

  return (
    <div>
      {recipe && (
        <div>
          <img data-testid="recipe-photo" src={ URLImage } alt={ title } />
          <h1 data-testid="recipe-title">{title}</h1>
          <button type="button" onClick={ shareLink }>
            <img
              src={ shareIcon }
              data-testid="share-btn"
              alt="share-btn"
            />
          </button>

          <button type="button" onClick={ favoriteRecipe }>
            <img
              src={ favorited ? favoriteIconBlack : favoriteIconWhite }
              data-testid="favorite-btn"
              alt="favorite-btn"
            />
          </button>

          {enableLinkCopied && <LinkCopiedToast />}
          <p data-testid="recipe-category">{ strCategory }</p>
          <RecipeIngredients recipe={ recipe } />
          <p data-testid="instructions">{strInstructions}</p>
          <Button
            id="finish"
            text="Finish Recipe"
            test="finish-recipe-btn"
            disabled={ buttonFinishRecipe }
            onClick={ () => { history.push('/done-recipes'); } }
          />
        </div>
      )}
    </div>
  );
};

export default RecipesInProgress;
