import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import CategoryList from '../components/CategoryLists';
import Header from '../components/Header';
import ListCards from '../components/ListCards';
import recipesContext from '../context/recipesContext';
import { searchMealByCategory,
  searchMealByIngredient,
  searchMealCategories, searchMealListAll } from '../server/apiMeal';

export default function Foods() {
  const minusOne = -1;
  const initialNumber = 5;
  const { foods, setFoods } = useContext(recipesContext);
  // const { setFoods } = useContext(recipesContext);
  const [categories, setCategories] = useState([]);
  const [haventFilteredByCategory, setHaventFilteredByCategory] = useState(true);
  const [maximumFilter, setMaximumFilter] = useState(initialNumber);
  const history = useHistory();
  const location = useLocation();

  const searchAPI = () => {
    if (location.state) {
      const { keyName } = location.state;

      searchMealByIngredient(keyName).then((data) => {
        setFoods(data);
      });
    }
  };

  useEffect(searchAPI, [searchAPI]);

  // Ao carregar a página faz a busca na API com todas as receitas
  useEffect(() => {
    searchMealListAll()
      .then((data) => setFoods(data));
  }, [setFoods]);

  useEffect(() => {
    searchMealCategories()
      .then((data) => setCategories(data));
  }, []);

  const verify = () => {
    if (haventFilteredByCategory && foods.length === 1) {
      return history.push(`/foods/${foods[0].idMeal}`);
    }
    return (
      <ListCards
        listItems={ foods }
        keyName="strMeal"
        keyURLImage="strMealThumb"
        linked
        pathname="/foods"
        idName="idMeal"
      />);
  };

  return (
    <>
      <Header title="Foods" search />
      <main>
        { categories && <CategoryList
          categories={ categories }
          maxFilter={ maximumFilter }
          apiByCatgory={ searchMealByCategory }
          setHaventFilteredByCategory={ setHaventFilteredByCategory }
          setMaximumFilter={ setMaximumFilter }
          type="foods"
        />}

        {foods !== null ? foods.length > minusOne && verify()
          : global.alert('Sorry, we haven\'t found any recipes for these filters.')}
      </main>
    </>
  );
}
