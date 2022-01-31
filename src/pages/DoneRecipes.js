import React, { useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import { getDoneRecipes, filterRecipes, showToast } from '../helpers/utils';
import FoodCard from '../components/FoodCard';
import DrinksCard from '../components/DrinksCard';
import LinkCopiedToast from '../components/LinkCopiedToast';

export default function DoneRecipes() {
  const [doneList, setDoneList] = useState(getDoneRecipes());
  const [toast, setToast] = useState(false);

  return (
    <>
      <Header title="Done Recipes" search={ false } />
      <main>
        <div>
          <Button
            test="filter-by-all-btn"
            text="All"
            onClick={ () => setDoneList(filterRecipes('done', 'all')) }
          />
          <Button
            test="filter-by-food-btn"
            text="Food"
            onClick={ () => setDoneList(filterRecipes('done', 'food')) }
          />
          <Button
            test="filter-by-drink-btn"
            text="Drinks"
            onClick={ () => setDoneList(filterRecipes('done', 'drink')) }
          />
        </div>
        {doneList && doneList.length > 0 && (
          <ul className="done-recipes-list">
            {doneList.map((eachDoneRecipe, i) => {
              if (eachDoneRecipe.type === 'drink') {
                return (
                  <DrinksCard
                    key={ i }
                    index={ i }
                    recipe={ eachDoneRecipe }
                    showToast={ () => showToast(setToast) }
                  />);
              }
              return (
                <FoodCard
                  key={ i }
                  index={ i }
                  recipe={ eachDoneRecipe }
                  showToast={ () => showToast(setToast) }
                />);
            })}
          </ul>)}
        {toast
          && <LinkCopiedToast />}
      </main>
    </>
  );
}
