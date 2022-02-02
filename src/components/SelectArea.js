import React, { useContext, useEffect, useState } from 'react';
import recipesContext from '../context/recipesContext';
import { searchMealListNationality } from '../server/apiMeal';

const SelectArea = () => {
  const { nationality, setNationality } = useContext(recipesContext);
  const [nationalities, setNationalities] = useState([]);

  useEffect(() => {
    searchMealListNationality()
      .then((data) => setNationalities(data));
  }, []);

  const handleState = ({ target: { value } }) => {
    setNationality(value);
  };

  return (
    <select
      data-testid="explore-by-nationality-dropdown"
      value={ nationality }
      name="Nationality"
      onChange={ handleState }
    >
      <option
        data-testid="All-option"
        value="All"
      >
        All
      </option>
      { nationalities.map(({ strArea }, index) => (
        <option
          key={ index }
          data-testid={ `${strArea}-option` }
          value={ strArea }
        >
          {strArea}
        </option>
      )) }
    </select>
  );
};

export default SelectArea;
