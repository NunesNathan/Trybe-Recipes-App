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

export const allCheckboxMarked = () => {
  const checkBox = document.getElementsByTagName('input');

  let unchecked = false;

  for (let element = 0; element < checkBox.length; element += 1) {
    if (window.Cypress && !checkBox[element].defaultChecked) {
      unchecked = true;
    }

    if (!window.Cypress && !checkBox[element].checked) {
      unchecked = true;
    }
  }

  if (!unchecked) {
    return false;
  }

  return true;
};

export default verifyRecipes;
