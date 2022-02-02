const getLocalStorageProfile = () => {
  const profile = JSON.parse(localStorage.getItem('user'));

  return profile;
};

export default getLocalStorageProfile;
