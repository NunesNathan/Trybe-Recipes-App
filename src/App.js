import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BottomMenu from './components/BottomMenu';
import Provider from './context/Provider';
import DoneRecipes from './pages/DoneRecipes';
import Drinks from './pages/Drinks';
import DrinksRecipes from './pages/DrinksRecipes';
import Explore from './pages/Explore';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import ExploreFoods from './pages/ExploreFoods';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreNationalities from './pages/ExploreNationalities';
import FavoriteRecipes from './pages/FavoriteRecipes';
import FoodRecipes from './pages/FoodRecipes';
import Foods from './pages/Foods';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import RecipesInProgress from './pages/RecipesInProgress';
import './styles/App.css';
import './styles/BottomMenu.css';
import './styles/Card.css';
import './styles/FoodAndDrinkRecipe.css';
import './styles/Header.css';
import './styles/index.css';
import './styles/RecipeCards.css';
import './styles/RecommendedCards.css';
import './styles/SearchBar.css';

function App() {
  const routes = () => (
    <Switch>
      <Route
        exact
        path="/"
      >
        <Login />
      </Route>
      <Route
        exact
        path="/foods"
      >
        <Foods />
        <BottomMenu />
      </Route>
      <Route
        exact
        path="/drinks"
      >
        <Drinks />
        <BottomMenu />
      </Route>
      <Route
        // path="/foods/{id-da-receita}"
        exact
        path="/foods/:id"

      >
        <FoodRecipes />
      </Route>

      <Route
        exact
        // path="/drinks/{id-da-receita}"
        path="/drinks/:id"
      >
        <DrinksRecipes />
      </Route>
      <Route
        exact
        path="/foods/:id/in-progress"
        // path="/foods/{id-da-receita}/in-progress"
      >
        <RecipesInProgress />
      </Route>

      <Route
        exact
        // path="/drinks/{id-da-receita}/in-progress"
        path="/drinks/:id/in-progress"
      >
        <RecipesInProgress />
      </Route>
      <Route
        exact
        path="/explore"
      >
        <Explore />
        <BottomMenu />
      </Route>
      <Route
        exact
        path="/explore/foods"
      >
        <ExploreFoods />
        <BottomMenu />
      </Route>
      <Route
        exact
        path="/explore/drinks"
      >
        <ExploreDrinks />
        <BottomMenu />
      </Route>
      <Route
        exact
        path="/explore/foods/ingredients"
      >
        <ExploreFoodsIngredients />
        <BottomMenu />
      </Route>
      <Route
        exact
        path="/explore/drinks/ingredients"
      >
        <ExploreDrinksIngredients />
        <BottomMenu />
      </Route>
      <Route
        exact
        path="/explore/foods/nationalities"
      >
        <ExploreNationalities />
        <BottomMenu />
      </Route>
      <Route
        exact
        path="/profile"
      >
        <Profile />
        <BottomMenu />
      </Route>
      <Route
        exact
        path="/done-recipes"
      >
        <DoneRecipes />
      </Route>
      <Route
        exact
        path="/favorite-recipes"
      >
        <FavoriteRecipes />
      </Route>
      <Route
        exact
        path="*"
      >
        <NotFound />
      </Route>
    </Switch>
  );
  return (
    <Provider>
      {
        routes()
      }
    </Provider>);
}

export default App;
