import PropType from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import ImageButton from './ImageButton';
import SearchBar from './SearchBar';

export default function Header({ title, search }) {
  const history = useHistory();
  const [searchBar, setSearchbar] = useState(false);

  return (
    <header>
      <div className="d-flex flex-row w-100">
        <ImageButton
          src={ profileIcon }
          test="profile-top-btn"
          onClick={ () => history.push('/profile') }
        />
        <p
          data-testid="page-title"
          className="display-4"
        >
          {title}
        </p>
      </div>

      {search
        && <ImageButton
          src={ searchIcon }
          alt="shareIcon"
          test="search-top-btn"
          onClick={ () => setSearchbar(!searchBar) }
        /> }

      {searchBar
        && <SearchBar /> }

    </header>
  );
}

Header.propTypes = {
  title: PropType.string.isRequired,
  search: PropType.bool.isRequired,
};
