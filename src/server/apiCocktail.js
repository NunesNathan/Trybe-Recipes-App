export const searchCocktailByIngredient = async (ingredient) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.drinks;
  } catch {
    return null;
  }
};

export const searchCocktailByName = async (name) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.drinks;
  } catch {
    return null;
  }
};

export const searchCocktailByFirstLetter = async (firstLetter) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.drinks;
  } catch {
    return null;
  }
};

export const searchCocktailById = async (id) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.drinks[0];
  } catch {
    return null;
  }
};
