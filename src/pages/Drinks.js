import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import ListCards from '../components/ListCards';
import recipesContext from '../context/recipesContext';

const Drinks = () => {
  const { drinks } = useContext(recipesContext);
  const history = useHistory();

  return (
    <div>
      <Header title="Drinks" search />
      <main>
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
    </div>
  );
};

export default Drinks;
