import React, { useContext, useState } from 'react';
import recipesContext from '../context/recipesContext';
import { searchCocktailRecommended } from '../server/apiCocktail';
import { searchMealListAll } from '../server/apiMeal';

const CategoryList = ({
  categories, maxFilter, apiByCatgory,
  type, setHaventFilteredByCategory, setMaximumFilter,
}) => {
  const five = 5;
  const six = 6;
  const { setFoods, setDrinks } = useContext(recipesContext);
  const [currentFilter, setCurrentFilter] = useState('');

  const searchByCategory = (category) => {
    if (type === 'foods') {
      if (currentFilter === category) {
        searchMealListAll().then((data) => {
          setHaventFilteredByCategory(true);
          setMaximumFilter(five);
          setCurrentFilter('');
          setFoods(data);
        });
      } else if (category === 'All') {
        searchMealListAll().then((data) => {
          setHaventFilteredByCategory(false);
          setMaximumFilter(five);
          setCurrentFilter('');
          setFoods(data);
        });
      } else {
        apiByCatgory(category)
          .then((data) => {
            setHaventFilteredByCategory(false);
            setCurrentFilter(category);
            setMaximumFilter(six);
            setFoods(data);
          });
      }
    } else if (type === 'drinks') {
      if (currentFilter === category) {
        searchCocktailRecommended().then((data) => {
          setHaventFilteredByCategory(true);
          setMaximumFilter(five);
          setCurrentFilter('');
          setDrinks(data);
        });
      } else if (category === 'All') {
        searchCocktailRecommended().then((data) => {
          setHaventFilteredByCategory(false);
          setMaximumFilter(five);
          setCurrentFilter('');
          setDrinks(data);
        });
      } else {
        apiByCatgory(category)
          .then((data) => {
            setHaventFilteredByCategory(false);
            setCurrentFilter(category);
            setMaximumFilter(six);
            setDrinks(data);
          });
      }
    }
  };

  return (
    categories.map(({ strCategory }, index) => {
      if (index < maxFilter) {
        return (
          <button
            key={ index }
            data-testid={ `${strCategory}-category-filter` }
            type="button"
            onClick={ () => searchByCategory(strCategory) }
          >
            { strCategory }
          </button>
        );
      }

      return null;
    })
  );
};

export default CategoryList;
