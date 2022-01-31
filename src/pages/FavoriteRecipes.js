import React, { useState } from 'react';
import Button from '../components/Button';
import FavCard from '../components/FavCard';
import Header from '../components/Header';
import LinkCopiedToast from '../components/LinkCopiedToast';
import { getFavoriteRecipes, filterRecipes, showToast } from '../helpers/utils';

export default function FavoriteRecipes() {
  const [favList, setFavList] = useState(getFavoriteRecipes());
  const [toast, setToast] = useState(false);

  return (
    <>
      <Header title="Favorite Recipes" search={ false } />
      <main>
        <div>
          <Button
            test="filter-by-all-btn"
            text="All"
            onClick={ () => setFavList(filterRecipes('fav', 'all')) }
          />
          <Button
            test="filter-by-food-btn"
            text="Food"
            onClick={ () => setFavList(filterRecipes('fav', 'food')) }
          />
          <Button
            test="filter-by-drink-btn"
            text="Drinks"
            onClick={ () => setFavList(filterRecipes('fav', 'drink')) }
          />
        </div>
        {favList && favList.length > 0 && (
          <ul className="done-recipes-list">
            {favList.map((eachDoneRecipe, i) => (
              <FavCard
                key={ i }
                index={ i }
                recipe={ eachDoneRecipe }
                showToast={ () => showToast(setToast) }
              />))}
          </ul>)}
        {toast
          && <LinkCopiedToast />}
      </main>
    </>
  );
}
