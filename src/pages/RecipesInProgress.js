import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import Button from '../components/Button';
import shareIcon from '../images/shareIcon.svg';
import favoriteIcon from '../images/blackHeartIcon.svg';
import verifyRecipes from '../helpers/helpers';
import { searchMealById } from '../server/apiMeal';
import RecipeIngredients from '../components/RecipeIngredients';
import { searchCocktailById } from '../server/apiCocktail';
import recipesContext from '../context/recipesContext';

const copy = require('clipboard-copy');

const START_SEARCH_URL = 8;
const MAX_TIME_OUT = 3000;

const RecipesInProgress = () => {
  const [recipe, setRecipe] = useState({});
  const [enableLinkCopied, setEnableLinkCopied] = useState(false);
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
    setTimeout(() => {
      setEnableLinkCopied(false);
    }, MAX_TIME_OUT);
  }, [enableLinkCopied]);

  const shareLink = () => {
    copy(`http://localhost:3000${pathname.slice(0, pathname.indexOf('/', START_SEARCH_URL))}`);
    setEnableLinkCopied(true);
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
          <Button
            text="S"
            src={ shareIcon }
            test="share-btn"
            onClick={ shareLink }
          />
          <Button
            text="F"
            src={ favoriteIcon }
            test="favorite-btn"
            onClick={ () => console.log('heirrr') }
          />
          {enableLinkCopied && <span>Link copied!</span>}
          <p data-testid="recipe-category">{ strCategory }</p>
          <RecipeIngredients recipe={ recipe } />
          <p data-testid="instructions">{strInstructions}</p>
          <Button
            id="finish"
            text="Finish Recipe"
            test="finish-recipe-btn"
            disabled={ buttonFinishRecipe }
            onClick={ () => { history.push('/done-recipes'); console.log('aquiii'); } }
          />
        </div>
      )}
    </div>
  );
};

export default RecipesInProgress;
