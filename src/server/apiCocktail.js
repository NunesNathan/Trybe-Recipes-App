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

export const searchCocktailRecommended = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.drinks;
  } catch {
    return null;
  }
};

export const searchCocktailRandom = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.drinks[0];
  } catch {
    return null;
  }
};

export const searchCocktailIngredientsList = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.drinks;
  } catch {
    return null;
  }
};

export const searchCocktailCategories = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.drinks;
  } catch {
    return null;
  }
};

export const searchCocktailByCategory = async (category) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.drinks;
  } catch {
    return null;
  }
};
