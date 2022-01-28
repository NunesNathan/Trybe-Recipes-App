import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
import './styles/App.css';
import './styles/BottomMenu.css';
import './styles/index.css';
import Login from './pages/Login';
import BottomMenu from './components/BottomMenu';

function App() {
  const routes = () => (
    <Switch>
      <Route
        path="/"
        exact
      >
        <Login />
      </Route>
      <Route
        path="/foods"
        exact
      >
        <Foods />
        <BottomMenu />
      </Route>
      <Route
        path="/drinks"
        exact
      >
        <Drinks />
        <BottomMenu />
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
        <BottomMenu />
      </Route>
      <Route
        path="/explore/foods"
        exact
      >
        <ExploreFoods />
        <BottomMenu />
      </Route>
      <Route
        path="/explore/drinks"
        exact
      >
        <ExploreDrinks />
        <BottomMenu />
      </Route>
      <Route
        path="/explore/foods/ingredients"
        exact
      >
        <ExploreFoodsIngredients />
        <BottomMenu />
      </Route>
      <Route
        path="/explore/drinks/ingredients"
        exact
      >
        <ExploreDrinksIngredients />
        <BottomMenu />
      </Route>
      <Route
        path="/explore/foods/nationalities"
        exact
      >
        <ExploreNationalities />
        <BottomMenu />
      </Route>
      <Route
        path="/profile"
        exact
      >
        <Profile />
        <BottomMenu />
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
