import React, { useCallback, useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ListCards from '../components/ListCards';
import recipesContext from '../context/recipesContext';
import { searchMealByIngredient } from '../server/apiMeal';

export default function Foods() {
  const { foods } = useContext(recipesContext);
  const { setFoods } = useContext(recipesContext);
  const history = useHistory();
  const location = useLocation();

  const searchAPI = useCallback(async () => {
    if (location.state) {
      const { keyName } = location.state;
      const data = await searchMealByIngredient(keyName);
      await setFoods(data);
    }
  }, [location.state, setFoods]);

  useEffect(() => {
    searchAPI();
  }, [searchAPI]);

  return (
    <>
      <Header title="Foods" search />
      <main>
        { foods !== null ? (
          foods.length === 1 && history.push(`/foods/${foods[0].idMeal}`)
        ) : global.alert('Sorry, we haven\'t found any recipes for these filters.')}

        {
          foods !== null ? (
            foods.length > 1
            && <ListCards
              listItems={ foods }
              keyName="strMeal"
              keyURLImage="strMealThumb"
            />
          ) : null
        }
      </main>
    </>
  );
}
