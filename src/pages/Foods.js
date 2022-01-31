import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import ListCards from '../components/ListCards';
import recipesContext from '../context/recipesContext';

export default function Foods() {
  const { foods } = useContext(recipesContext);
  const history = useHistory();

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
