const getDoneRecipes = (filterType) => {
  const doneRecipes = localStorage.getItem(JSON.parse('doneRecipes'));
  switch (doneRecipes) {
  case Array.isArray(doneRecipes) && doneRecipes.length > 0:
    return doneRecipes.filter(({ type }) => type === filterType);
  default:
    return [];
  }
};

export default getDoneRecipes;
