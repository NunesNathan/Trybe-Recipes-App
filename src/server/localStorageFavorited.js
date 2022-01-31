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

export const getLocalStorageFavorite = () => {
  const arr = JSON.parse(localStorage.getItem('favoriteRecipes'));

  return arr;
};

export const setLocalStorageFavorite = (recipe, pathname) => {
  const type = (pathname.includes('foods')) ? 'food' : 'drink';

  let recipeFavorited = getLocalStorage();

  if (!recipeFavorited) {
    recipeFavorited = [];
  }

  const {
    id, nationality, category, name, image, alcoholicOrNot,
  } = reduceKeys(recipe, type);

  const newObj = { id, type, nationality, category, alcoholicOrNot, name, image };

  const newArray = [...recipeFavorited, newObj];

  localStorage.setItem('favoriteRecipes', newArray);
};
