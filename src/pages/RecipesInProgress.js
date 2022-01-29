import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Button from '../components/Button';
import shareIcon from '../images/shareIcon.svg';
import favoriteIcon from '../images/blackHeartIcon.svg';
import verifyRecipes from '../helpers/helpers';
import { searchMealById } from '../server/apiMeal';
import RecipeIngredients from '../components/RecipeIngredients';
import { searchCocktailById } from '../server/apiCocktail';

const RecipesInProgress = () => {
  const [recipe, setRecipe] = useState({});
  const { pathname } = useLocation();
  const { id } = useParams();

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

  const {
    URLImage, title, strCategory, strInstructions,
  } = verifyRecipes(pathname, recipe); // Essa função retorna os mesmos nomes tanto para a API de Foods como a de Drinks já que alguns são diferentes e queremos usar o mesmo componente.

  return (
    <div>
      {recipe && (
        <div>
          <img data-testid="recipe-photo" src={ URLImage } alt={ title } />
          <h1 data-testid="recipe-title">{title}</h1>
          <Button text="S" src={ shareIcon } test="share-btn" onClick="" />
          <Button text="F" src={ favoriteIcon } test="favorite-btn" onClick="" />
          <p data-testid="recipe-category">{ strCategory }</p>
          <RecipeIngredients recipe={ recipe } />
          <p data-testid="instructions">{strInstructions}</p>
          <Button
            text="Finish Recipe"
            test="finish-recipe-btn"
            onClick=""
          />
        </div>
      )}
    </div>
  );
};

export default RecipesInProgress;
