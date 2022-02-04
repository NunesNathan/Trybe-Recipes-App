import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import CategoryList from '../components/CategoryLists';
import Header from '../components/Header';
import ListCards from '../components/ListCards';
import recipesContext from '../context/recipesContext';
import { searchMealByCategory, searchMealByIngredient,
  searchMealCategories, searchMealListAll } from '../server/apiMeal';

export default function Foods() {
  const { foods, setFoods } = useContext(recipesContext);
  // const { setFoods } = useContext(recipesContext);
  const [categories, setCategories] = useState([]);
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

  // Ao carregar a página faz a busca na API com todas as receitas
  useEffect(() => {
    searchMealListAll()
      .then((data) => setFoods(data));
  }, [setFoods]);

  useEffect(() => {
    searchMealCategories()
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <Header title="Foods" search />
      <main>
        { categories && <CategoryList
          categories={ categories }
          maxFilter={ 5 }
          apiByCatgory={ searchMealByCategory }
          type="foods"
        />}

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
