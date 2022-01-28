import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import ListCards from '../components/ListCards';
import SearchBar from '../components/SearchBar';
import recipesContext from '../context/recipesContext';

const Drinks = () => {
  const { drinks } = useContext(recipesContext);

  return (
    <div>
      <SearchBar />
      <main>
        {
          drinks !== null ? (
            drinks.length === 1 && <Redirect to={ `/drinks/${drinks[0].idDrink}` } />
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
    </div>
  );
};

export default Drinks;
