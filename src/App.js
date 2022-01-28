import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DoneRecipes from './pages/DoneRecipes';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import ExploreFoods from './pages/ExploreFoods';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreNationalities from './pages/ExploreNationalities';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Foods from './pages/Foods';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  const routes = () => (
    <Switch>
      <Route
        path="/"
        exact
      >
        <Home />
      </Route>
      <Route
        path="/foods"
        exact
      >
        <Foods />
      </Route>
      <Route
        path="/drinks"
        exact
      >
        <Drinks />
      </Route>
      <Route
        path="/foods/{id-da-receita}"
      />
      <Route
        path="/drinks/{id-da-receita}"
        exact
      />
      <Route
        path="/foods/{id-da-receita}/in-progress"
        exact
      />
      <Route
        path="/drinks/{id-da-receita}/in-progress"
        exact
      />
      <Route
        path="/explore"
        exact
      >
        <Explore />
      </Route>
      <Route
        path="/explore/foods"
        exact
      >
        <ExploreFoods />
      </Route>
      <Route
        path="/explore/drinks"
        exact
      >
        <ExploreDrinks />
      </Route>
      <Route
        path="/explore/foods/ingredients"
        exact
      >
        <ExploreFoodsIngredients />
      </Route>
      <Route
        path="/explore/drinks/ingredients"
        exact
      >
        <ExploreDrinksIngredients />
      </Route>
      <Route
        path="/explore/foods/nationalities"
        exact
      >
        <ExploreNationalities />
      </Route>
      <Route
        path="/profile"
        exact
      >
        <Profile />
      </Route>
      <Route
        path="/done-recipes"
        exact
      >
        <DoneRecipes />
      </Route>
      <Route
        path="/favorite-recipes"
        exact
      >
        <FavoriteRecipes />
      </Route>
    </Switch>
  );
  return (
    <>
      {
        routes()
      }
    </>);
}

export default App;
