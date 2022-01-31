export const getDoneRecipes = () => JSON.parse(localStorage.getItem('doneRecipes'));

export const filterDoneRecipes = (filterType) => {
  const doneRecipes = getDoneRecipes();
  if (doneRecipes) {
    if (filterType === 'all') {
      return doneRecipes;
    }
    return doneRecipes.filter(({ type }) => type === filterType);
  }
  return [];
};
