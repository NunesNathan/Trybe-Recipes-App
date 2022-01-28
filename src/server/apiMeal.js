export const searchMealByIngredient = async (ingredient) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  const response = await fetch(URL);
  const data = await response.json();

  return data.meals;
};

export const searchMealByName = async (name) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

  const response = await fetch(URL);
  const data = await response.json();

  return data.meals;
};

export const searchMealByFirstLetter = async (firstLetter) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;

  const response = await fetch(URL);
  const data = await response.json();

  return data.meals;
};
