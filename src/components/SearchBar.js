import React, { useState } from 'react';
import searchIcon from '../images/searchIcon.svg';

const INGREDIENT = 'ingredient';
const NAME = 'name';
const FIRSTLETTER = 'firstLetter';

const SearchBar = () => {
  const [searchForm, setSearchForm] = useState({
    search: '',
    rbSearch: 'ingredient',
  });

  // Desestruturando o estado searchForm
  const { search, rbSearch } = searchForm;

  // Setando valores no estado searchForm
  const handleForm = ({ target: { name, value } }) => {
    setSearchForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <input
        type="text"
        name="search"
        value={ search }
        placeholder="Digite o item a ser buscado"
        onChange={ handleForm }
        data-testid="search-input"
      />

      <label htmlFor={ INGREDIENT }>
        Ingrendiente:
        <input
          type="radio"
          name="rbSearch"
          value={ INGREDIENT }
          checked={ rbSearch === INGREDIENT }
          onChange={ handleForm }
          data-testid="ingredient-search-radio"
        />
      </label>

      <label htmlFor={ NAME }>
        Nome:
        <input
          type="radio"
          name="rbSearch"
          value={ NAME }
          checked={ rbSearch === NAME }
          onChange={ handleForm }
          data-testid="name-search-radio"
        />
      </label>

      <label htmlFor={ FIRSTLETTER }>
        Primeira letra:
        <input
          type="radio"
          name="rbSearch"
          value={ FIRSTLETTER }
          checked={ rbSearch === FIRSTLETTER }
          onChange={ handleForm }
          data-testid="first-letter-search-radio"
        />
      </label>

      <button type="button" data-testid="exec-search-btn">
        <img src={ searchIcon } alt="lupa" />
      </button>
    </form>
  );
};

export default SearchBar;
