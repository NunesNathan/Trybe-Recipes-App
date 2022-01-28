import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import recipesContext from '../context/recipesContext';

export default function Foods() {
  const { foods } = useContext(recipesContext);

  return (
    <div>
      <SearchBar />
      <main>
        { foods !== null ? (
          foods.length === 1 && <Redirect to={ `/foods/${foods[0].idMeal}` } />
        ) : global.alert('Sorry, we haven\'t found any recipes for these filters.')}
      </main>
    </div>
  );
}
