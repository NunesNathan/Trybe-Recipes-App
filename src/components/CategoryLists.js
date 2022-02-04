import React, { useContext } from 'react';
import recipesContext from '../context/recipesContext';

const CategoryList = ({ categories, maxFilter, apiByCatgory, type }) => {
  const { setFoods, setDrinks } = useContext(recipesContext);

  const searchByCategory = (category) => {
    if (type === 'foods') {
      apiByCatgory(category)
        .then((data) => setFoods(data));
    } else {
      apiByCatgory(category)
        .then((data) => setDrinks(data));
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
