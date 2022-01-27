import React from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import Button from './Button';

const style = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',

};

export default function Header() {
  const history = useHistory();

  return (
    <div style={ style }>
      <Button
        src={ profileIcon }
        test="profile-top-btn"
        onClick={ () => history.push('/profile') }
      />
      <h3 data-testid="page-title">Food</h3>
      <Button
        src={ searchIcon }
        test="search-top-btn"
      />
    </div>);
}
