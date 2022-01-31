import React, { useContext, useState } from 'react';
import { createBrowserHistory } from 'history';
import {
  searchMealByFirstLetter,
  searchMealByIngredient,
  searchMealByName,
} from '../server/apiMeal';
import recipesContext from '../context/recipesContext';
import {
  searchCocktailByFirstLetter,
  searchCocktailByIngredient,
  searchCocktailByName,
} from '../server/apiCocktail';
import Button from './Button';

const INGREDIENT = 'ingredient';
const NAME = 'name';
const FIRSTLETTER = 'firstLetter';

const SearchBar = () => {
  const [searchForm, setSearchForm] = useState({
    search: '',
    rbSearch: 'ingredient',
  });

  // Recebendo dados do estado global
  const { setFoods, setDrinks } = useContext(recipesContext);

  // Desestruturando o estado searchForm.
  const { search, rbSearch } = searchForm;

  // Setando valores no estado searchForm.
  const handleForm = ({ target: { name, value } }) => {
    setSearchForm((prev) => ({ ...prev, [name]: value }));
  };

  // Faz a chamada da API de refeição de acordo com o filtro.
  const searchAPIMeal = () => {
    let result = [];

    switch (rbSearch) {
    case INGREDIENT:
      result = searchMealByIngredient(search);
      break;
    case NAME:
      result = searchMealByName(search);
      break;
    case FIRSTLETTER:
      result = (search.length === 1) ? searchMealByFirstLetter(search) : global
        .alert('Your search must have only 1 (one) character');
      break;
    default:
      return result;
    }

    return result;
  };

  // Faz a chamada da API de drinks de acordo com o filtro.
  const searchAPICocktail = () => {
    let result = [];

    switch (rbSearch) {
    case INGREDIENT:
      result = searchCocktailByIngredient(search);
      break;
    case NAME:
      result = searchCocktailByName(search);
      break;
    case FIRSTLETTER:
      result = (search.length === 1) ? searchCocktailByFirstLetter(search) : global
        .alert('Your search must have only 1 (one) character');
      break;
    default:
      return result;
    }

    return result;
  };

  // Seleciona qual API Usar de acordo com a URL em que se encontra atualmente. E seta no estado global o retorno da API.
  const selectLocation = async () => {
    const { location: { pathname } } = createBrowserHistory();

    if (pathname === '/foods') {
      const retornoFoods = await searchAPIMeal();
      setFoods(retornoFoods);
    } else if (pathname === '/drinks') {
      const retornoDrinks = await searchAPICocktail();
      setDrinks(retornoDrinks);
    }
  };

  return (
    <form className="form-group d-flex flex-column">
      <input
        type="text"
        name="search"
        className="form-control"
        value={ search }
        placeholder="Digite sua busca"
        onChange={ handleForm }
        data-testid="search-input"
      />
      <div
        className="align-self-center form-check
        d-flex flex-row justify-content-around"
      >
        <label className="form-check-label" htmlFor={ INGREDIENT }>
          Ingrendiente:
          <input
            type="radio"
            name="rbSearch"
            id={ INGREDIENT }
            value={ INGREDIENT }
            className="form-check-input"
            checked={ rbSearch === INGREDIENT }
            onChange={ handleForm }
            data-testid="ingredient-search-radio"
          />
        </label>

        <label className="form-check-label" htmlFor={ NAME }>
          Nome:
          <input
            type="radio"
            name="rbSearch"
            id={ NAME }
            value={ NAME }
            className="form-check-input"
            checked={ rbSearch === NAME }
            onChange={ handleForm }
            data-testid="name-search-radio"
          />
        </label>

        <label className="form-check-label" htmlFor={ FIRSTLETTER }>
          Primeira letra:
          <input
            type="radio"
            name="rbSearch"
            id={ FIRSTLETTER }
            value={ FIRSTLETTER }
            className="form-check-input"
            checked={ rbSearch === FIRSTLETTER }
            onChange={ handleForm }
            data-testid="first-letter-search-radio"
          />
        </label>
      </div>

      <Button
        text="Search"
        className="submit"
        test="exec-search-btn"
        onClick={ selectLocation }
      />
    </form>
  );
};

export default SearchBar;
