import React, { useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import { getDoneRecipes, filterDoneRecipes } from '../helpers/utils';
import FoodCard from '../components/FoodCard';
import DrinksCard from '../components/DrinksCard';
import LinkCopiedToast from '../components/LinkCopiedToast';

export default function DoneRecipes() {
  const [doneList, setDoneList] = useState(getDoneRecipes());
  const [toast, setToast] = useState(false);
  const toaster = 3000;

  const showToast = () => {
    setToast(true);
    const me = setTimeout(() => {
      setToast(false);
      clearTimeout(me);
    }, toaster);
  };

  return (
    <>
      <Header title="Done Recipes" search={ false } />
      <main>
        <div>
          <Button
            test="filter-by-all-btn"
            text="All"
            onClick={ () => setDoneList(filterDoneRecipes('all')) }
          />
          <Button
            test="filter-by-food-btn"
            text="Food"
            onClick={ () => setDoneList(filterDoneRecipes('food')) }
          />
          <Button
            test="filter-by-drink-btn"
            text="Drinks"
            onClick={ () => setDoneList(filterDoneRecipes('drink')) }
          />
        </div>
        {doneList.length > 0 && (
          <ul className="done-recipes-list">
            {doneList.map((eachDoneRecipe, i) => {
              if (eachDoneRecipe.type === 'drink') {
                return (
                  <DrinksCard
                    key={ i }
                    index={ i }
                    recipe={ eachDoneRecipe }
                    showToast={ showToast }
                  />);
              }
              return (
                <FoodCard
                  key={ i }
                  index={ i }
                  recipe={ eachDoneRecipe }
                  showToast={ showToast }
                />);
            })}
          </ul>)}
      </main>
      {toast
        && <LinkCopiedToast />}
    </>
  );
}
