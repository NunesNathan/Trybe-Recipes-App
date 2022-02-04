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

export const searchMealRandom = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.meals[0];
  } catch {
    return null;
  }
};

export const searchMealIngredientsList = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.meals;
  } catch {
    return null;
  }
};

export const searchMealListNationality = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.meals;
  } catch {
    return null;
  }
};

export const searchMealByNationality = async (nationality) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.meals;
  } catch {
    return null;
  }
};

export const searchMealListAll = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.meals;
  } catch {
    return null;
  }
};

export const searchMealCategories = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.meals;
  } catch {
    return null;
  }
};

export const searchMealByCategory = async (category) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.meals;
  } catch {
    return null;
  }
};
