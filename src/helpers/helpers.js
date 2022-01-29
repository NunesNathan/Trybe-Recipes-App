const verifyRecipes = (pathname, recipe) => {
  if (recipe && Object.keys(recipe).length > 0) {
    if (pathname.includes('foods')) {
      const {
        strMealThumb: URLImage,
        strMeal: title,
        strCategory,
        strInstructions,
      } = recipe;

      return { URLImage, title, strCategory, strInstructions };
    }

    const {
      strDrinkThumb: URLImage,
      strDrink: title,
      strCategory,
      strInstructions,
    } = recipe;

    return { URLImage, title, strCategory, strInstructions };
  }

  return { URLImage: '', title: '', strCategory: '', strInstructions: '' };
};

export default verifyRecipes;
