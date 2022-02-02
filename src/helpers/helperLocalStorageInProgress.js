import {
  getLocalStorage,
  removeItemLocalStorage,
  setLocalStorage,
} from '../server/localStorageinProgressRecipes';

export const addLocalStorage = (id, item, key) => {
  if (key === 'meals') {
    setLocalStorage(id, item, 'meals');
  } else if (key === 'cocktails') {
    setLocalStorage(id, item, 'cocktails');
  }
};

export const removeInLocalStorage = (id, item, key) => {
  if (key === 'meals') {
    removeItemLocalStorage(id, item, 'meals');
  } else if (key === 'cocktails') {
    removeItemLocalStorage(id, item, 'cocktails');
  }
};

export const filterInLocalStorage = (id, item, key) => {
  const objLocalStorage = getLocalStorage();
  let itemExists = false;

  if (objLocalStorage && objLocalStorage[key]) {
    itemExists = objLocalStorage[key][id].some((value) => value === item);
  }

  return itemExists;
};
