import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import ListCards from '../components/ListCards';
import SelectArea from '../components/SelectArea';
import recipesContext from '../context/recipesContext';
import { searchMealByNationality, searchMealListAll } from '../server/apiMeal';

export default function ExploreNationalities() {
  const { nationality } = useContext(recipesContext); // Item selecionado no dropdown
  const [recipesByNationality, setRecipesByNationality] = useState([]); // Lista de receitas pela nacionalidade selecionada.

  useEffect(() => {
    if (nationality === 'All') {
      searchMealListAll()
        .then((data) => setRecipesByNationality(data));
    } else {
      searchMealByNationality(nationality)
        .then((data) => setRecipesByNationality(data));
    }
  }, [nationality]);

  return (
    <main>
      <Header title="Explore Nationalities" search />
      <SelectArea />
      {recipesByNationality && recipesByNationality.length > 0 && <ListCards
        listItems={ recipesByNationality }
        keyName="strMeal"
        keyURLImage="strMealThumb"
        linked
        pathname="/foods"
        idName="idMeal"
      />}
    </main>
  );
}
