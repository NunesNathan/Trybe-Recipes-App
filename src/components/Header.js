import PropType from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import Button from './Button';
import ImageButton from './ImageButton';
import SearchBar from './SearchBar';

export default function Header({ title, search }) {
  const history = useHistory();
  const [searchBar, setSearchbar] = useState(false);

  return (
    <header>
      <Button
        src={ profileIcon }
        test="profile-top-btn"
        onClick={ () => history.push('/profile') }
      />
      <h3 data-testid="page-title">{ title }</h3>

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
