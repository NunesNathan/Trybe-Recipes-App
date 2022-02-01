import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import { searchMealRandom } from '../server/apiMeal';

export default function ExploreFoods() {
  const history = useHistory();

  const searchRandom = async () => {
    const { idMeal } = await searchMealRandom();

    history.push(`/foods/${idMeal}`);
  };

  return (
    <main>
      <Header title="Explore Foods" search={ false } />
      <Button
        test="explore-by-ingredient"
        text="By Ingredient"
        onClick={ () => history.push('/explore/foods/ingredients') }
      />
      <Button
        test="explore-by-nationality"
        text="By Nationality"
        onClick={ () => history.push('/explore/foods/nationalities') }
      />
      <Button
        test="explore-surprise"
        text="Surprise me!"
        onClick={ searchRandom }
      />
    </main>
  );
}
