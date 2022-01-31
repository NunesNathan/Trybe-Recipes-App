const reduceKeys = (recipe, type) => {
  if (type === 'food') {
    const {
      idMeal: id,
      strArea: nationality,
      strCategory: category,
      strMeal: name,
      strMealThumb: image,
    } = recipe;

    const alcoholicOrNot = '';

    return { id, nationality, category, name, image, alcoholicOrNot };
  }

  const {
    idDrink: id,
    strCategory: category,
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: alcoholicOrNot,
  } = recipe;

  const nationality = '';

  return { id, nationality, category, name, image, alcoholicOrNot };
};

const extractType = (pathname) => ((pathname.includes('foods')) ? 'food' : 'drink');

export const getLocalStorageFavorite = () => {
  let arr = JSON.parse(localStorage.getItem('favoriteRecipes'));

  if (!arr) {
    arr = [];
  }

  return arr;
};

export const setLocalStorageFavorite = (recipe, pathname) => {
  const type = extractType(pathname);

  const recipeFavorited = getLocalStorageFavorite();

  // if (!recipeFavorited) {
  //   recipeFavorited = [];
  // }

  const {
    id, nationality, category, name, image, alcoholicOrNot,
  } = reduceKeys(recipe, type);

  const newObj = { id, type, nationality, category, alcoholicOrNot, name, image };

  const newArray = [...recipeFavorited, newObj];

  localStorage.setItem('favoriteRecipes', JSON.stringify(newArray));
};

export const deleteItemLocalStorageFavorite = (id, pathname) => {
  const type = extractType(pathname);

  const arr = getLocalStorageFavorite();

  const newArray = arr.filter((item) => item.id !== id && item.type !== type);

  localStorage.setItem('favoriteRecipes', JSON.stringify(newArray));
};

export const filterInLocalStorageFavorited = (id, pathname) => {
  const type = extractType(pathname);

  const arr = getLocalStorageFavorite();

  const found = arr.some((item) => item.id === id && item.type === type);

  return found;
};
