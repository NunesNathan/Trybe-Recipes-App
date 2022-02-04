import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import getLocalStorageProfile from '../server/localStorageProfile';
import localStorageClear from '../server/localStorageClear';

export default function Profile() {
  const [profile, setProfile] = useState('');
  const history = useHistory();

  useEffect(() => {
    const user = getLocalStorageProfile() || '';

    setProfile(user.email);
  }, []);

  return (
    <main>
      <Header title="Profile" search={ false } />
      <p data-testid="profile-email">{ profile }</p>
      <Button
        test="profile-done-btn"
        text="Done Recipes"
        onClick={ () => history.push('/done-recipes') }
      />
      <Button
        test="profile-favorite-btn"
        text="Favorite Recipes"
        onClick={ () => history.push('/favorite-recipes') }
      />
      <Button
        test="profile-logout-btn"
        text="Logout"
        onClick={ () => {
          localStorageClear(); history.push('/');
        } }
      />
    </main>
  );
}
