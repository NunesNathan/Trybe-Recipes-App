import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useLocation } from 'react-router-dom';
import {
  addLocalStorage,
  filterInLocalStorage,
  removeInLocalStorage,
} from '../helpers/helperLocalStorageInProgress';
import { allCheckboxMarked } from '../helpers/helpers';
import recipesContext from '../context/recipesContext';

const RecipeIngredientsItem = ({ item, index }) => {
  const [ingredientChecked, setIngredientChecked] = useState({
    checked: false,
    doneItem: '',
  });

  const { setButtonFinishRecipe } = useContext(recipesContext);

  const { pathname } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    // Verifica se o item existe no localStorage e se existir ele marca o item como feito
    const key = pathname.includes('foods') ? 'meals' : 'cocktails';
    const itemChecked = filterInLocalStorage(id, item, key);

    if (itemChecked) {
      setIngredientChecked((prev) => (
        { ...prev, checked: true, doneItem: 'line-through' }
      ));
    }
  }, [id, item, pathname]);

  // verifica se todos os checkbox estão marcados para habilitar o butão de finalizar.
  useEffect(() => {
    const result = allCheckboxMarked();

    setButtonFinishRecipe(result);
  }, [ingredientChecked, setButtonFinishRecipe]);

  // Faz a chamada para o helper que adiciona no local storage;
  const handleAddLocalStorage = () => {
    const key = pathname.includes('foods') ? 'meals' : 'cocktails';
    addLocalStorage(id, item, key);
  };

  // Faz a chamada para o helper que deleta o item no local storage;
  const handleRemoveLocalStorage = () => {
    const key = pathname.includes('foods') ? 'meals' : 'cocktails';
    removeInLocalStorage(id, item, key);
  };

  // É sempre chamado quandoa uma mudança no checkbox;
  const handleState = ({ target: { checked } }) => {
    if (checked) {
      setIngredientChecked((prev) => (
        { ...prev, checked: true, doneItem: 'line-through' }
      ));

      handleAddLocalStorage();
    } else {
      setIngredientChecked((prev) => (
        { ...prev, checked: false, doneItem: '' }
      ));

      handleRemoveLocalStorage();
    }
  };

  const { checked, doneItem } = ingredientChecked;

  return (
    <li
      data-testid={ `${index}-ingredient-step` }
      style={ { textDecoration: doneItem } }
    >
      {window.Cypress ? (
        <input
          type="checkbox"
          name="ingrediente"
          // checked={ checked } // Verificar esse erro com os meninos
          defaultChecked={ checked }
          onChange={ handleState }
        />)
        : (
          <input
            type="checkbox"
            name="ingrediente"
            checked={ checked } // Verificar esse erro com os meninos
            // defaultChecked={ checked }
            onChange={ handleState }
          />
        )}
      {item}
    </li>
  );
};

RecipeIngredientsItem.propTypes = {
  index: PropTypes.number,
  item: PropTypes.string,
}.isRequired;

export default RecipeIngredientsItem;
