import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import CategoryList from '../components/CategoryLists';
import Header from '../components/Header';
import ListCards from '../components/ListCards';
import recipesContext from '../context/recipesContext';
import { searchCocktailByCategory, searchCocktailByIngredient,
  searchCocktailByName, searchCocktailCategories } from '../server/apiCocktail';

const Drinks = () => {
  const { drinks, setDrinks } = useContext(recipesContext);
  // const { setDrinks } = useContext(recipesContext);
  const [categories, setCategories] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const searchAPI = useCallback(async () => {
    if (location.state) {
      const { keyName } = location.state;

      const data = await searchCocktailByIngredient(keyName);
      await setDrinks(data);
    }
  }, [location.state, setDrinks]);

  useEffect(() => {
    searchAPI();
  }, [searchAPI]);

  useEffect(() => {
    searchCocktailByName('')
      .then((data) => setDrinks(data));
  }, [setDrinks]);

  useEffect(() => {
    searchCocktailCategories()
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <Header title="Drinks" search />
      <main>
        { categories && <CategoryList
          categories={ categories }
          maxFilter={ 5 }
          apiByCatgory={ searchCocktailByCategory }
          type="drinks"
        />}

        {
          drinks !== null ? (
            drinks.length === 1 && history.push(`/drinks/${drinks[0].idDrink}`)
          ) : global.alert('Sorry, we haven\'t found any recipes for these filters.')
        }

        {
          drinks !== null ? (
            drinks.length > 1
            && <ListCards
              listItems={ drinks }
              keyName="strDrink"
              keyURLImage="strDrinkThumb"
            />
          ) : null
        }
      </main>
    </>
  );
};

export default Drinks;
