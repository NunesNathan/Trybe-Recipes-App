export const searchCocktailByIngredient = async (ingredient) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  const response = await fetch(URL);
  const data = await response.json();

  return data.drinks;
};

export const searchCocktailByName = async (name) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;

  const response = await fetch(URL);
  const data = await response.json();

  return data.drinks;
};

export const searchCocktailByFirstLetter = async (firstLetter) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;

  const response = await fetch(URL);
  const data = await response.json();

  return data.drinks;
};
