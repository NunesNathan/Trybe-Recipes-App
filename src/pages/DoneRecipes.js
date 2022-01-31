import React, { useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import { getDoneRecipes, filterDoneRecipes } from '../helpers/utils';
import FoodCard from '../components/FoodCard';
import DrinksCard from '../components/DrinksCard';

export default function DoneRecipes() {
  const [doneList, setDoneList] = useState(getDoneRecipes());

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
            onClick={ () => setDoneList(filterDoneRecipes('drinks')) }
          />
        </div>
        {doneList.length > 0 && (
          <ul>
            {doneList.map((eachDoneRecipe, i) => {
              if (eachDoneRecipe.type === 'drink') {
                return <DrinksCard key={ i } index={ i } recipe={ eachDoneRecipe } />;
              }
              return <FoodCard key={ i } index={ i } recipe={ eachDoneRecipe } />;
            })}
          </ul>)}
      </main>
    </>
  );
}
