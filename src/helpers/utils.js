export const getDoneRecipes = () => JSON.parse(localStorage.getItem('doneRecipes'));
export const getFavoriteRecipes = () => JSON.parse(localStorage
  .getItem('favoriteRecipes'));

export const filterRecipes = (get, filterType) => {
  const recipes = get === 'done' ? getDoneRecipes() : getFavoriteRecipes();
  if (recipes) {
    if (filterType === 'all') {
      return recipes;
    }
    return recipes.filter(({ type }) => type === filterType);
  }
  return [];
};

export const unfavoriteRecipe = (unId) => {
  const favotires = getFavoriteRecipes();
  const newFavorites = favotires.filter(({ id }) => id !== unId);
  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  return newFavorites;
};

const toaster = 3000;
export const showToast = (setToast) => {
  setToast(true);
  const me = setTimeout(() => {
    setToast(false);
    clearTimeout(me);
  }, toaster);
};
