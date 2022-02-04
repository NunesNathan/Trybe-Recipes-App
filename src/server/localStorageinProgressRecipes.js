export const getLocalStorage = (key = '') => {
  const result = JSON.parse(localStorage.getItem('inProgressRecipes'));

  if (key === '') {
    return result;
  }

  // return result[key] || {};
  return result ? result[key] : {};
};

/* ID: id da receita, ingredient: ingrediente a ser adicionado, key: meals/cocktails */
export const setLocalStorage = (id, ingredient, key) => {
  let objLocalStorage = getLocalStorage();
  if (!objLocalStorage) {
    objLocalStorage = {};
  }

  let newObj;
  if (objLocalStorage[key] && objLocalStorage[key][id]) {
    newObj = {
      ...objLocalStorage,
      [key]: {
        ...objLocalStorage[key],
        [id]: [...objLocalStorage[key][id], ingredient],
      },
    };
  } else {
    newObj = {
      ...objLocalStorage,
      [key]: {
        ...objLocalStorage[key],
        [id]: [ingredient],
      },
    };
  }

  localStorage.setItem('inProgressRecipes', JSON.stringify(newObj));
};

export const removeItemLocalStorage = (id, ingredient, key) => {
  const objLocalStorage = getLocalStorage();

  const objFiltered = objLocalStorage[key][id].filter((item) => item !== ingredient);

  const newObj = {
    ...objLocalStorage,
    [key]: {
      ...objLocalStorage[key],
      [id]: objFiltered,
    },
  };

  localStorage.setItem('inProgressRecipes', JSON.stringify(newObj));
};

const extractType = (pathname) => ((pathname.includes('foods')) ? 'meals' : 'cocktails');

export const filterInLocalStorageInProgress = (id, pathname) => {
  const type = extractType(pathname);

  const local = getLocalStorage(type);

  const found = Object.keys(local).includes(id);

  return found;
};
