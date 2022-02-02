export const searchMealByIngredient = async (ingredient) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.meals;
  } catch {
    return null;
  }
};

export const searchMealByName = async (name) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.meals;
  } catch {
    return null;
  }
};

export const searchMealByFirstLetter = async (firstLetter) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.meals;
  } catch {
    return null;
  }
};

export const searchMealById = async (id) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.meals[0];
  } catch {
    return null;
  }
};

export const searchMealRecommended = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.meals;
  } catch {
    return null;
  }
};
