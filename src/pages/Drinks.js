import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import CategoryList from '../components/CategoryLists';
import Header from '../components/Header';
import ListCards from '../components/ListCards';
import recipesContext from '../context/recipesContext';
import { searchCocktailByCategory,
  searchCocktailByIngredient,
  searchCocktailByName, searchCocktailCategories } from '../server/apiCocktail';

const Drinks = () => {
  const initialNumber = 5;
  const minusOne = -1;
  const { drinks, setDrinks } = useContext(recipesContext);
  // const { setDrinks } = useContext(recipesContext);
  const [categories, setCategories] = useState([]);
  const [haventFilteredByCategory, setHaventFilteredByCategory] = useState(true);
  const [maximumFilter, setMaximumFilter] = useState(initialNumber);
  const history = useHistory();
  const location = useLocation();

  const searchAPI = () => {
    if (location.state) {
      const { keyName } = location.state;

      searchCocktailByIngredient(keyName).then((data) => {
        setDrinks(data);
      });
    }
  };

  useEffect(searchAPI, [searchAPI]);

  useEffect(() => {
    searchCocktailByName('')
      .then((data) => setDrinks(data));
  }, [setDrinks]);

  useEffect(() => {
    searchCocktailCategories()
      .then((data) => setCategories(data));
  }, []);

  const verify = () => {
    if (haventFilteredByCategory && drinks.length === 1) {
      return history.push(`/drinks/${drinks[0].idDrink}`);
    }
    return (
      <ListCards
        listItems={ drinks }
        keyName="strDrink"
        keyURLImage="strDrinkThumb"
        linked
        pathname="/drinks"
        idName="idDrink"
      />);
  };

  return (
    <>
      <Header title="Drinks" search />
      <main>
        { categories && <CategoryList
          categories={ categories }
          maxFilter={ maximumFilter }
          apiByCatgory={ searchCocktailByCategory }
          setHaventFilteredByCategory={ setHaventFilteredByCategory }
          setMaximumFilter={ setMaximumFilter }
          type="drinks"
        />}

        {drinks !== null ? drinks.length > minusOne && verify()
          : global.alert('Sorry, we haven\'t found any recipes for these filters.')}
      </main>
    </>
  );
};

export default Drinks;
