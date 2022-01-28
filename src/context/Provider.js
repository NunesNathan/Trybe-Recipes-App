import React, { useState } from 'react';
import PropTypes from 'prop-types';
import recipesContext from './recipesContext';

const Provider = (props) => {
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const { children } = props;

  return (
    <recipesContext.Provider
      value={ {
        foods,
        setFoods,
        drinks,
        setDrinks,
      } }
    >
      {children}
    </recipesContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default Provider;
